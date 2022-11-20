import { useEffect } from "react";
import { ROOT_STORE, StoreContext } from "../../stores";

export function StoreProvider({ children }: { children: JSX.Element }) {
  useEffect(() => {
    ROOT_STORE.userStore.loadFromLocal();
    // ROOT_STORE.mangaStore.loadFromLocal();
    // if (
    //   location.href.indexOf("/login") >= 0 &&
    //   _store.userStore.token != null
    // ) {
    //   Router.push("/");
    // }
  }, []);
  // return children;
  return <StoreContext.Provider value={ROOT_STORE}>{children}</StoreContext.Provider>;
}
