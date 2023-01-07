import { makeAutoObservable } from "mobx";
import { ProjectGql } from "../gql/graphql";
import { ProjectModel } from "../model/project.model";
import { StorageHelper } from "../utils";

class ProjectStore {
  private _projectDetail: ProjectModel | null = null;
  private _visitedProject: { [key: string]: ProjectGql } = {};

  constructor() {
    makeAutoObservable(this);
  }

  get projectDetail() {
    return this._projectDetail;
  }

  get visitedProject() {
    return this._visitedProject;
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
}

export default new ProjectStore();
