import axios from "axios";

const BASE_URL = "https://yokotrade.ru/API/";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

class Http {
  constructor(private readonly apiUrl = "/") {}

  instance = axios.create({
    baseURL: this.apiUrl,
  });

  async post<T = unknown, K = unknown>(url: string, body: K): Promise<T> {
    try {
      const response = await this.instance.post<K, T>(url, body);
      return response;
    } catch (e) {
      throw e;
    }
  }

  async get<T = unknown>(url: string): Promise<T> {
    try {
      const response = await this.instance.get<any, T>(url);
      return response;
    } catch (e) {
      throw e;
    }
  }
}

const http = new Http(BASE_URL);

export default http;
