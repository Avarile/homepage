import axios from "axios";
import { store } from "data/redux/redux.store";
import envService from "utils/envService";
import { setError, setLoadingStatus } from "./redux/universal.reduxSlice";
import LocalStorageService from "./LocalStorage.service";
import { Notification } from "components/universalComponents/Notification.component";
import { rejects } from "assert";

const baseUrl = envService?.baseUrl;

class Request {
  axiosInstance: any;

  /**
   *
   */
  constructor() {
    this.axiosInstance = axios.create({
      timeout: 10000,
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Requested-Width": "XMLHttpRequest",
      },
    });

    this.interceptRequest();
    this.interceptResponse();
  }

  private interceptRequest() {
    this.axiosInstance.interceptors.request.use((config: any) => {
      config.header["autherization"] = LocalStorageService.getCachedData("TOKEN") || "";
      return config;
    });
  }

  private interceptResponse() {
    this.axiosInstance.interceptors.response.use((response: any) => {
      if (response?.data) {
        const { code = "200" } = response.data;
        if (code === "200") {
          return Promise.resolve(response);
        } else return Promise.reject(new Error(response));
      }
    });
  }

  private setLoadingStatus(status: boolean) {
    store.dispatch(setLoadingStatus(status));
  }

  private setError(error: any) {
    store.dispatch(setError(error));
  }

  public get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .get(url, {
          params: params,
        })
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((error: any) => {
          this.setError(error?.message || error);
          Notification({ type: "error", message: `error: ${error?.message || error} ` });
        });
    });
  }

  public post(url: string, params = {}, config: { [key: string]: any } = {}, notification?: string) {
    return new Promise((resolve, reject) => {
      if (typeof params === "object") {
        config["Content-type"] = "application/json";
      }
      this.axiosInstance.post(url, params, config).then((response: any) => {
        if (notification) {
          Notification({ type: "success", message: notification });
        }
        resolve(response.data);
      });
    }).catch((error: any) => {
      this.setError(error.message || error);
      if (notification) {
        Notification({ type: "error", message: `Error: ${error?.message || error}` });
      }
      rejects(error);
    });
  }

  public patch(url: string, params: {}, notification?: string) {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .patch(url, params)
        .then((response: any) => {
          resolve(response);
          Notification({ type: "success", message: `${notification} was successfully updated!` });
        })
        .catch((error: any) => {
          this.setError(error?.message || error);
          Notification({ type: "error", message: `${notification} update failed!` });
          reject(error);
        });
    });
  }
}

export default new Request()