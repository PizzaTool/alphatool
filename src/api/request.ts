import axios from "axios";

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string, // 使用 Vite 的环境变量配置
  timeout: 10000 * 1000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    // 在发送请求之前处理请求头和数据

    const token = localStorage.getItem("token") || "";
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
      Authorization: token ? token : "",
    };

    const isJson = config.headers["Content-Type"]?.includes("application/json");
    if (!isJson) {
      const isMultipart = config.headers["Content-Type"]?.includes(
        "multipart/form-data",
      );
      if (!isMultipart) {
        // 根据需要序列化数据
        // config.data = qs.stringify(config.data); // 如果需要，安装 qs 并解开此行
      }
    } else {
      if (!config.data) {
        config.data = {}; // 如果请求数据为空，设置为空对象
      }
    }
    return config;
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.config.responseType === "blob") {
      // 文件类型特殊处理
      return response;
    }
    const res = response.data;
    return res;
  },
  (error) => {
    // 错误响应处理
    const { response } = error;
    if (response) {
      switch (response.status) {
        case 401:
          localStorage.clear();
          sessionStorage.clear();
          const currentUrl = window.location.href;
          localStorage.setItem("url", currentUrl);
          window.location.href = `${window.location.origin}/login`;
          break;
        case 403:
          // errorMessage(response.data?.message || '无权限访问');
          break;
        case 500:
          // errorMessage('服务器错误，请稍后再试');
          break;
        default:
          // errorMessage('网络错误，请检查您的网络');
          break;
      }
    } else {
      // errorMessage('请求失败，请稍后再试');
    }
    return Promise.reject(error);
  },
);

export default service;
