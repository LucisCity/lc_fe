import { makeAutoObservable } from "mobx";

class AuthStoreMobx {
  private _verified = false;
  private _connectModalVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  /* ============= Getter & Setter ==============*/
  get verified(): boolean {
    return this._verified;
  }

  set verified(value: boolean) {
    this._verified = value;
  }

  get connectModalVisible(): boolean {
    return this._connectModalVisible;
  }

  set connectModalVisible(value: boolean) {
    this._connectModalVisible = value;
  }
}

const AuthStore = new AuthStoreMobx();
export default AuthStore;
