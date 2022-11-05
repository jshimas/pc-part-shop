import Api from "./api";

export default class PartsApi extends Api {
  getPartsByType = (type) => {
    return super.init().get(`/parts?type=${type}`);
  };
}
