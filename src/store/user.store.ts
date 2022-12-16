import { makeAutoObservable } from "mobx";
import { UserGql } from "../gql/graphql";
import { StorageHelper } from "../utils";

class UserStore {
  private _user: UserGql | null = null;
  _token: string | null = null;
  private _isLoadedFromLocal = false;

  constructor() {
    makeAutoObservable(this);
  }

  get user() {
    return this._user;
  }
  get token() {
    return this._token;
  }
  get isLoggedIn() {
    return this._token != null && this._token != "";
  }

  get isLoadedFromLocal() {
    return this._isLoadedFromLocal;
  }

  loadFromLocal() {
    if (typeof window == "undefined") {
      return;
    }
    console.log("loadFromLocal: ", this._isLoadedFromLocal);
    if (this._isLoadedFromLocal) {
      return;
    }
    this._isLoadedFromLocal = true;
    if (this._token) {
      return;
    }
    const userLocal = StorageHelper.getUser();
    if (userLocal) {
      this._user = userLocal;
    }
    const tokenLocal = StorageHelper.getToken();
    if (tokenLocal && tokenLocal !== "") {
      this._token = tokenLocal;
    }
    return {
      user: this.user,
      token: this.token,
      isLogged: this.isLoggedIn,
    };
  }

  saveLoginInfo(token: string, user: UserGql) {
    this._user = user;
    this._token = token;
    StorageHelper.setToken(this._token);
    StorageHelper.setUser(this._user);
  }

  logout() {
    this._user = null;
    this._token = null;
    StorageHelper.clearSession();
  }
}

export default new UserStore();
