import Api from "./api";

export default class AuthenticationApi extends Api {
  login = (data) => {
    return super.init().post("/users/login", data);
  };

  singup = (data) => {
    return super.init().post("/users/singup", data);
  };
}
