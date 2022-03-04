let api_base_url = null;
if (process.env.REACT_APP_ENV == "production") {
  api_base_url = process.env.REACT_APP_API_BASE_URL_PRODUCTION;
} else if (process.env.REACT_APP_ENV == "beta") {
  api_base_url = process.env.REACT_APP_API_BASE_URL_BETA;
}else if (process.env.REACT_APP_ENV == "staging") {
  api_base_url = process.env.REACT_APP_API_BASE_URL_STAGING;
} else {
  api_base_url = 'http://localhost:3000/api/v1';
}
export const API_BASE_URL = `${api_base_url}`;
export const DEBOUNCE_TIME = 500;
