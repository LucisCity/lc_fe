export const isClient = typeof window !== "undefined";

export const StorageHelper = {
  clearSession() {
    localStorage.removeItem("token");
  },
  getToken: () => {
    return localStorage.getItem("token");
  },
  setToken: (token: string) => {
    localStorage.setItem("token", token);
  },
};
