import Api from "./api";

export default class PartsApi extends Api {
  getPartsByType = (type) => {
    return super.init().get(`/parts?type=${type}`); //&partId=${null}
  };

  getPart = async (id) => {
    return super.init().get(`/parts?partId=${id}&type=${null}&action=single`);
  };

  deletePart = async (id) => {
    return super.init().delete(`/parts?partId=${id}`);
  };

  addPart = async (
    name //, partType, manufacturer, releaseDate, price
  ) => {
    const partData = {
      name,
    };
    console.log(name);
    console.log(partData);
    return super.init().post(`/parts/create-part`, partData);
  };

  editPart = async () => {
    return super.init().patch(`/parts?`);
  };

  // name: '1', type, manufacturer, releaseDate,price,details,createdAt,updatedAt)
  //VALUES ('test','test','test','test',1,'test','test','test'););
}
