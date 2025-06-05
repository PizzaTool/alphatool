const formatString = (str: string, length: number, num: number): string => {
  if (str.length <= length) {
    return str; // 如果字符串长度不足8位，直接返回
  }
  const start = str.slice(0, num); // 取前4位
  const end = str.slice(-num); // 取后4位
  return `${start}...${end}`; // 拼接结果
};

const formatNumberBySlice = (num: string): string => {
  const dotIndex = num.indexOf("."); // 找到小数点的位置
  if (dotIndex === -1) {
    return num; // 如果没有小数点，直接返回
  }
  return num.slice(0, dotIndex + 5); // 保留小数点后 4 位（小数点 + 4 位）
};

const validateNumberInput = (value: string): string => {
  // 移除非数字和小数点字符
  const validValue = value.replace(/[^0-9.]/g, "");
  // 小数点首次出现位置
  const dotIndex = validValue.indexOf(".");
  if (dotIndex !== -1) {
    // 保证小数点只能出现一次，并截取小数点后的内容
    return (
      validValue.slice(0, dotIndex + 1) +
      validValue.slice(dotIndex + 1).replace(/\./g, "")
    );
  }
  // 如果没有小数点，直接返回
  return validValue;
};

const formatTimestamp = (timestamp: number): string => {
  // 时间戳需要乘以 1000，因为它是以秒为单位，而 JavaScript 需要以毫秒为单位
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从 0 开始
  const day = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const formatDatestamp = (timestamp: number): string => {
  // 时间戳需要乘以 1000，因为它是以秒为单位，而 JavaScript 需要以毫秒为单位
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从 0 开始
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const convertToKAndM = (num: number) => {
  if (num >= 1000000) {
    return Math.round((num / 1000000) * 100) / 100 + "M"; // 转换为百万并保留两位小数
  } else if (num >= 1000) {
    return Math.round((num / 1000) * 100) / 100 + "K"; // 转换为千并保留两位小数
  } else {
    return num.toString(); // 小于千，直接返回原始数字
  }
};

const formatNumberSmart = (raw: unknown): string => {
  const n = Number(raw);
  if (isNaN(n)) return "NaN";
  if (n === 0) return "0₀";

  const subscriptMap: Record<string, string> = {
    "0": "₀",
    "1": "₁",
    "2": "₂",
    "3": "₃",
    "4": "₄",
    "5": "₅",
    "6": "₆",
    "7": "₇",
    "8": "₈",
    "9": "₉",
  };

  // 小于 1 的处理逻辑
  if (n < 1) {
    const str = n.toFixed(20).replace(/0+$/, ""); // 防止科学计数法，保留足够多位小数
    const match = str.match(/^0\.0*(\d+)/);

    if (match) {
      const zeros = str.match(/^0\.0*(?=\d)/)?.[0].length ?? 2;
      const leadingZeros = zeros - 2;
      const digits = match[1];
      const valid = digits.slice(0, 5);

      if (leadingZeros >= 4) {
        const sub = leadingZeros
          .toString()
          .split("")
          .map((d) => subscriptMap[d] || d)
          .join("");
        return `0${sub}${valid}`;
      } else {
        // 普通格式，小于1的正常显示，避免科学计数法
        const fixed = parseFloat(n.toPrecision(5))
          .toFixed(10)
          .replace(/0+$/, "");
        return fixed;
      }
    }
  }

  // 千分位以上使用 K / M / B
  const abs = Math.abs(n);
  const formatWithUnit = (value: number, unit: string) =>
    parseFloat(value.toPrecision(4)).toString() + unit;

  if (abs >= 1_000_000_000) return formatWithUnit(n / 1_000_000_000, "B");
  if (abs >= 1_000_000) return formatWithUnit(n / 1_000_000, "M");
  if (abs >= 1_000) return formatWithUnit(n / 1_000, "K");

  // 普通数字（保留 4 位有效数字，不使用科学计数法）
  return parseFloat(n.toPrecision(4))
    .toFixed(10)
    .replace(/\.?0+$/, "");
};

const formatTime = (timestamp: any) => {
  const date = new Date(Number(timestamp));

  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const DD = String(date.getDate()).padStart(2, "0");
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");

  return `${MM}/${DD} ${HH}:${mm}`;
};

const getPowerRange = (n: number) => {
  if (n <= 0) return 0;
  return Math.floor(Math.log2(n));
};

export default {
  formatString,
  formatNumberBySlice,
  validateNumberInput,
  formatTimestamp,
  formatDatestamp,
  convertToKAndM,
  formatNumberSmart,
  formatTime,
  getPowerRange,
};
