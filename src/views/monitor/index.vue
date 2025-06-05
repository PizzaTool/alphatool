<template>
  <div class="page">
    <div class="info" ref="info">
      <div class="info-date">
        <el-date-picker v-model="date" type="date" placeholder="请选择日期" />
      </div>
      <el-button @click="addMonitor">增加监控</el-button>
      <el-button @click="addressFlag = true">批量添加地址</el-button>
    </div>
    <div class="container" :style="{ height: Height + 'px', overflow: 'auto' }">
      <div class="module-container">
        <div class="module" v-for="(item, index) in list" :key="item.id">
          <div class="name">
            <div>名称:{{ item.name }}</div>
            <el-switch v-model="item.run" />
          </div>
          <div class="search">
            <el-input v-model="item.address" placeholder="请输入钱包地址" />
            <el-button :icon="Search" type="primary" @click="handleSum(item.address)" />
          </div>
          <div class="title">余额选择器</div>
          <div class="subtitle">
            <span>{{ marks[item.sliderValue] }}</span>
            <span>{{ (item.sliderValue / 25) }}积分/天</span>
          </div>
          <div class="slider">
            <el-slider v-model="item.sliderValue" :step="25" :show-tooltip="false" show-stops :marks="marks" />
          </div>
          <div class="title">交易记录</div>
          <div class="list">
            <div class="box">
              <div class="box-row">
                <div class="box-row__col">
                  <div>交易次数</div>
                  <div>
                    <span>{{ get(item, "summary.buyCount", 0) }}</span>/<span>{{ get(item, "summary.sellCount", 0)
                    }}</span>
                  </div>
                </div>
                <div class="box-row__col">
                  <div>买入交易量</div>
                  <div>${{ util.formatNumberBySlice(String(get(item, "summary.buyU", 0) * 2))
                  }}</div>
                </div>
                <div class="box-row__col">
                  <div>损耗总量</div>
                  <div>${{ util.formatNumberBySlice(String(get(item, "summary.abrase.USDT", 0))) }}</div>
                </div>
                <div class="box-row__col">
                  <div>获得积分</div>
                  <div>{{ util.getPowerRange(get(item, "summary.buyU", 0) * 2) + (item.sliderValue / 25) }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="close" v-if="index > 0" @click="removeMonitor(index)">
            <el-icon>
              <CloseBold />
            </el-icon>
          </div>

        </div>
      </div>
    </div>


    <DialogAddress v-model:visible="addressFlag" @closeBtn="addressClose" @subBtn="addressSub"></DialogAddress>
  </div>
</template>

<script setup lang="ts">
import { Search, CloseBold } from '@element-plus/icons-vue';
import { transactions } from "@/api/api";
import { get } from "lodash";
import DialogAddress from "@/views/monitor/DialogAddress.vue";
import util from "@/util/util";

let timer: any = null;
const date = ref(new Date());
const marks = reactive<any>({ 0: "$0", 25: "$100", 50: "$1K", 75: "$10K", 100: "$100K+" });
const list = ref<any>([]);
const addressFlag = ref(false);
const addressListAll = ref<any>([]);

const addressClose = (val: any) => { addressFlag.value = val; };

const addDefaultMonitor = () => {
  list.value = [{
    id: Date.now(),
    address: "",
    sliderValue: 0,
    run: false,
    summary: {},
    name: ''
  }];
};

// 初始加载逻辑
onMounted(() => {
  const storedList = localStorage.getItem("addressListAll");
  if (storedList) {
    try {
      const parsedList = JSON.parse(storedList);
      if (Array.isArray(parsedList) && parsedList.length > 0) {
        addressListAll.value = parsedList;
        const showList = parsedList.filter(item => item.isShow);
        if (showList.length > 0) {
          list.value = showList.map(item => ({
            id: Date.now() + Math.random(),
            address: item.address,
            sliderValue: 0,
            run: false,
            summary: {},
            name: item.name || ''   // 把name也加进去
          }));
        } else {
          addDefaultMonitor();
        }
      } else {
        addDefaultMonitor();
      }
    } catch (e) {
      console.error("本地缓存地址解析失败", e);
      addDefaultMonitor();
    }
  } else {
    addDefaultMonitor();
  }
});

const addressSub = (val: any) => {
  addressFlag.value = val;
  const storedList = localStorage.getItem("addressListAll");
  if (storedList) {
    try {
      const parsedList = JSON.parse(storedList);
      if (Array.isArray(parsedList) && parsedList.length > 0) {
        addressListAll.value = parsedList;
        const showList = parsedList.filter(item => item.isShow);
        if (showList.length > 0) {
          list.value = showList.map(item => ({
            id: Date.now() + Math.random(),
            address: item.address,
            sliderValue: 0,
            run: false,
            summary: {},
            name: item.name || ''   // 这里也加name
          }));
        } else {
          addDefaultMonitor();
        }
      } else {
        addDefaultMonitor();
      }
    } catch (e) {
      console.error("本地缓存地址解析失败", e);
      addDefaultMonitor();
    }
  } else {
    addDefaultMonitor();
  }
};

const addMonitor = () => {
  list.value.push({
    id: Date.now() + Math.random(),
    address: "",
    sliderValue: 0,
    run: false,
    summary: {}
  });
};

const removeMonitor = (index: number) => { list.value.splice(index, 1); };

const handleOpenMonitor = () => {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    const requestList = list.value.filter((e: any) => e.run)
      .filter((e: any) => e.address !== "")
      .map(async (e: any) => await handleSum(e.address));
    Promise.allSettled(requestList);
  }, 5000);
};

const handleSum = async (address: string) => {
  try {
    let params = { address, timestamp: new Date(date.value).getTime() / 1000 + "", chains: "56" };
    const res: any = await transactions(params);
    if (res.code === 0) {
      list.value.forEach((item: any) => {
        if (item.address === address) {
          item.summary = res.data.summary;
        }
      })
    }
  } catch (error) {
    console.error("Error in handleSum:", error);
  }
};
const info = ref<any>(null)
const Height = ref(0)

onMounted(() => {
  handleOpenMonitor()
  nextTick(() => {
    if (info.value) {
      const height = info.value?.clientHeight;
      Height.value = window.innerHeight - height - 116;
    }
  });
})
onUnmounted(() => { if (timer) clearTimeout(timer); });
</script>



<style lang="less" scoped>
.page {
  padding: 20px;
  height: 100%;
}

.info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
}

.module-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.module {
  flex: 0 0 calc(33.33% - 20px);
  /* 每行4个模块，减去间距 */
  background-color: #202127;
  color: #fff;
  padding: 20px;
  padding-top: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
}

.search {
  display: flex;
  align-items: center;
  gap: 4px;
}

.slider {
  margin-top: 5px;
  padding: 0px 30px 15px;
  border: 1px solid #4a4e58;
  border-radius: 10px;
}

.title {
  margin: 10px 0;
}

.subtitle {
  font-size: 10px;
  display: flex;
  justify-content: space-between;
}

.list {
  .box {
    background-color: #30343c;
    /* 21是模块总数 */
    padding: 10px;
    border-radius: 10px;

    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px #4a4e58;
      padding-bottom: 4px;

      &__right {
        padding: 4px;
      }
    }

    &-row {
      display: flex;
      color: #909399;
      justify-content: space-between;

      &__col {
        width: 24%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
          line-height: 18px;
          display: flex;
          align-items: center;

          span:nth-of-type(1) {
            color: green;
          }

          span:nth-of-type(2) {
            color: red
          }
        }

        div:nth-of-type(1) {
          font-size: 12px;
        }

        div:nth-of-type(2) {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, .8);
          margin: 0 2px;
        }

      }
    }
  }
}

.close {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 2px;
  cursor: pointer;
}

.name {
  color: #f5b70a;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>