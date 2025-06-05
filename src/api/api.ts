import request from "./request";

// 获取代币列表tab标签列表
export function getChain() {
  return request({
    url: "/chain",
    method: "get",
  });
}

// 获取代币列表
export function postTokens(params: any) {
  return request({
    url: "/tokens",
    method: "post",
    data: params,
  });
}

// 查询交易信息
export function transactions(params: any) {
  return request({
    url: "/transactions",
    method: "post",
    data: params,
  });
}

// 获取交易分析
export function analysis(params: any) {
  return request({
    url: "/analysis",
    method: "post",
    data: params,
  });
}

// 获取交易分析
export function analysisSummary(params: any) {
  return request({
    url: "/analysis/summary",
    method: "post",
    data: params,
  });
}

// 空投列表
export function alpha(params?: any) {
  return request({
    url: "/alpha",
    method: "get",
    data: params,
  });
}
