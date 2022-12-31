import { makeAutoObservable } from "mobx";
import { ProjectGql } from "../gql/graphql";
import { ProjectModel } from "../model/project.model";

class ProjectStore {
  private _projectDetail: ProjectModel | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get projectDetail() {
    return this._projectDetail;
  }

  setProjectDetail(value: ProjectModel) {
    this._projectDetail = value;
  }
}

export default new ProjectStore();
