export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const PRODUCT_DATA_SEEDS_URL = `${API_BASE_URL}/api/v1/product/initialize-seed-data`;
export const GET_ALL_PRODUCT_URL = `${API_BASE_URL}/api/v1/product`;
export const SEARCH_PRODUCT_URL = `${API_BASE_URL}/api/v1/product/search`;


export const STATISTICS_URL = `${API_BASE_URL}/api/v1/analytics/statistics`;
export const BAR_CHART_URL = `${API_BASE_URL}/api/v1/analytics/bar-chart`;
export const PIE_CHART_URL = `${API_BASE_URL}/api/v1/analytics/pie-chart`;
export const COMBINED_CHART_URL = `${API_BASE_URL}/api/v1/analytics/combined-chart`;