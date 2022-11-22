import Storage from "react-secure-storage";
export const isClient = typeof window !== "undefined";

export const StorageHelper = {
  clearSession() {
    Storage.removeItem("token");
  },
  getToken: () => {
    return Storage.getItem("token") as string;
  },
  setToken: (token: string) => {
    Storage.setItem("token", token);
  },
  setUser: (user: any) => {
    Storage.setItem("user", JSON.stringify(user));
  },
  getUser: () => {
    try {
      if (!localStorage) {
        return;
      }
      const _result = Storage.getItem("user") as string;
      return _result != null && _result !== "" ? JSON.parse(_result) : undefined;
    } catch (err) {
      console.log("error parse user: ");
    }
  },
};
