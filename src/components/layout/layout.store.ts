import { makeAutoObservable } from "mobx";
import {isClientDevMode} from "../../utils/env";
import {deviceSupport} from "./bottom_navigation";

export type LayoutState = {
  isShowHeader?: boolean;
  isShowFooter?: boolean;
  hasBottomNav?: boolean;
}
class LayoutStore implements LayoutState {
  public isShowHeader!: boolean;
  public isShowFooter!: boolean;
  public hasBottomNav!: boolean;

  constructor() {
    this.resetState();
    this.hasBottomNav = false; // sync Initial UI with server
    makeAutoObservable(this);
  }

  resetState() {
    this.isShowHeader = true;
    this.isShowFooter = true;
    this.hasBottomNav = getDefaultHasBottomNav();
  }

  setState(s: LayoutState) {
    Object.assign(this, s);
  }

  // Set state or reset to default state if not provided
  setStateOrDefault(s: LayoutState) {
    this.isShowFooter = s.isShowFooter ?? true;
    this.isShowHeader = s.isShowHeader ?? true;
    this.hasBottomNav = s.hasBottomNav ?? getDefaultHasBottomNav();
  }
}

function getDefaultHasBottomNav(): boolean {
  return deviceSupport();
}

const s = new LayoutStore();
export default s;

if (isClientDevMode) {
  // @ts-ignore
  window.tmpLayoutStore = s;
}
