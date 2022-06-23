class LocalStorageServie {
  private cacheStore: any;

  constructor() {
    this.cacheStore = window.localStorage;
  }

  private exisCacheData(key: string) {
    if (this.cacheStore.getItem(key) !== null) {
      return true;
    } else {
      return false;
    }
  }

  private isVoid(value: any) {
    if (value === undefined || value === null || value === "") {
      return true;
    } else {
      return false;
    }
  }

  private serilize(cachedValue: string | null) {
    if (typeof cachedValue !== "string") {
      return null;
    } else {
      try {
        return JSON.parse(cachedValue);
      } catch (error) {
        throw new Error("Unexpected Error during serilizing from local Storage");
      }
    }
  }

  public setValuesDependingonCacheData(key: string, value: string | null) {
    const cachedValue = this.serilize(this.getCachedData(key));
    return this.isVoid(cachedValue) ? value : cachedValue;
  }

  // CRUD actions:
  public getCachedData(key: string) {
    const value = this.cacheStore.getItem(key);
    return value;
  }

  public setCachedData(key: string, value: string | null) {
    if (this.isVoid(value)) {
      throw new Error("Cannot put invalid values into local storage!");
    } else {
      this.cacheStore.setItem(key, this.serilize(value));
    }
  }

  public setMultipleCacheData(...values: Array<{ key: string; value: string | null }>) {
    try {
      values.map((element: { key: string; value: string | null }) => {
        this.setCachedData(element.key, element.value);
      });
    } catch (error) {}
  }

  public removeCachedData(key: string) {
    this.cacheStore.removeItem(key);
  }

  public removeMultipleCachedData(...keys: Array<string>) {
    keys.map((key: string) => {
      this.removeCachedData(key);
    });
  }
  public purge() {
    this.cacheStore.clear();
  }
}

export default new LocalStorageServie();
