import Api from "./api";

export default class BuildApi extends Api {
  getBuild = (id) => {
    return super.init().get(`builds/getBuild?buildId=${id}`);
  };

  createBuild = (name, userId) => {
    return super.init().post(`builds/create?name=${name}&userId=${userId}`);
  };

  deleteBuild = (buildId) => {
    return super.init().delete(`builds/remove?buildId=${buildId}`);
  };

  addPartToBuild = (buildId, partId) => {
    return super.init().post(`builds/add?buildId=${buildId}&partId=${partId}`);
  };
}