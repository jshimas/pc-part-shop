import Api from "./api";

export default class BuildApi extends Api {
  getBuild = (id) => {
    return super.init().get(`builds/getBuild?buildId=${id}`);
  };

  getAllBuilds = () => {
    return super.init().get(`builds/getAllBuilds`);
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

  removeBuildPart = async (buildId, partId) => {
    return super.init().delete(`builds/removePart?buildId=${buildId}&partId=${partId}`);
  };

  checkCompatibility = (buildId) => {
    return super.init().get(`builds/check?buildId=${buildId}`);
  };
}
