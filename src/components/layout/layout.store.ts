import { makeAutoObservable } from "mobx";
import {isClientDevMode} from "../../utils/env";
import {deviceSupport, getHeight} from "./bottom_navigation";

export type LayoutState = {
  isShowHeader?: boolean;
  isShowFooter?: boolean;
  bottomNavVisible?: boolean;
  bottomNavHeight?: number;
}
class LayoutStore implements LayoutState {
  public isShowHeader!: boolean;
  public isShowFooter!: boolean;
  public bottomNavVisible!: boolean;
  public bottomNavHeight!: number;

  constructor() {
    this.resetState();
    this.bottomNavVisible = false; // sync Initial UI with server
    this.bottomNavHeight = 0; // sync Initial UI with server
    makeAutoObservable(this);
  }

  resetState() {
    this.isShowHeader = true;
    this.isShowFooter = true;
    this.bottomNavVisible = getDefaultHasBottomNav();
    this.bottomNavHeight = getHeight();
  }

  setState(s: LayoutState) {
    Object.assign(this, s);
  }

  // Set state or reset to default state if not provided
  setStateOrDefault(s: LayoutState) {
    this.isShowFooter = s.isShowFooter ?? true;
    this.isShowHeader = s.isShowHeader ?? true;
    this.bottomNavVisible = s.bottomNavVisible ?? getDefaultHasBottomNav();
    this.bottomNavHeight = s.bottomNavHeight ?? getHeight();
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
