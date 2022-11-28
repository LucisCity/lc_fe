import { createContext, useContext } from "react";
import UserStore from "./user.store";

export class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore();
  }
}

export const ROOT_STORE = new RootStore();
export const StoreContext = createContext(ROOT_STORE);
export const useStores = () => useContext(StoreContext);
