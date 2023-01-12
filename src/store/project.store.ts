import { makeAutoObservable } from "mobx";
import { ProjectGql, ProjectNftOwnerGql } from "../gql/graphql";
import { ProjectModel } from "../model/project.model";
import { StorageHelper } from "../utils";
import { KMath } from "../utils/math.util";

class ProjectStore {
  private _projectDetail: ProjectModel | null = null;
  private _profitRate = 0;
  private _visitedProject: { [key: string]: ProjectGql } = {};
  private _investor: { [key: string]: ProjectNftOwnerGql } = {};

  constructor() {
    makeAutoObservable(this);
  }

  get projectDetail() {
    return this._projectDetail;
  }

  get visitedProject() {
    return this._visitedProject;
  }
  get profitRate() {
    return this._profitRate;
  }
  setProjectDetail(value: ProjectModel) {
    this._projectDetail = {
      ...this._projectDetail,
      ...value,
    };
  }
  cacheVisitedProject(value: ProjectGql) {
    this._visitedProject[value.id] = {
      ...value,
      //@ts-ignore
      profile: null,
    };
    StorageHelper.setVistedProject(JSON.stringify(this._visitedProject));
  }

  loadVisitedProject() {
    this._visitedProject = StorageHelper.getVistedProject() ?? {};
  }

  setInvestor(item: ProjectNftOwnerGql) {
    this._investor[item.project_id] = item;
  }

  getInvestor(projectId: string) {
    return this._investor[projectId];
  }

  private getProfitWhenSellProject(nftPrice: number, nftBoughts: number, payAmount: number) {
    return KMath.mul(nftPrice, nftBoughts).minus(payAmount).toNumber();
  }
  computeProfitRate(
    nftPrice: number,
    nftBoughts: number,
    payAmount: number,
    profitBalance: number,
    profitBalanceClaimed: number,
  ) {
    const profitWhenSellProject = this.getProfitWhenSellProject(nftPrice, nftBoughts, payAmount);
    const profitRate = KMath.plus(profitBalance, profitBalanceClaimed)
      .plus(profitWhenSellProject)
      .div(payAmount)
      .multipliedBy(100)
      .toNumber();
    this._profitRate = profitRate;
  }
}

export default new ProjectStore();
