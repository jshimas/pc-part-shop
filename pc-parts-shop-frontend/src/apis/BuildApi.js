import Api from "./api";

export default class BuildApi extends Api {
  getBuild = (id) => {
    return super.init().get(`builds/getBuild?buildId=${id}`);
  };
}