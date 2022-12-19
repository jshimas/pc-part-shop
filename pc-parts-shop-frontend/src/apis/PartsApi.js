import Api from "./api";

export default class PartsApi extends Api {
  getPartsByType = (type) => {
    return super.init().get(`/parts?type=${type}`); //&partId=${null}
  };

  getOnePart = async (id, type) => {
    return super.init().get(`/parts/get-part?partId=${id}&type=${type}`); //parts?partId=${id}&type=${type}&action=single);
  };

  deletePart = async (id) => {
    return super.init().delete(`/parts?partId=${id}`);
  };

  addPart = async (partName, type, manufacturer, releaseDate, price) => {
    const partData = {
      partName,
      type,
      manufacturer,
      releaseDate,
      price,
    };
    console.log(partName);
    console.log(partData);
    return super.init().post(`/parts/create-part`, partData);
  };

  editPart = async () => {
    return super.init().patch(`/parts?`);
  };

  // name: '1', type, manufacturer, releaseDate,price,details,createdAt,updatedAt)
  //VALUES ('test','test','test','test',1,'test','test','test'););
}
