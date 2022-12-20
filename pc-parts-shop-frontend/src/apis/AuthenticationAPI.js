import Api from "./api";

export default class AuthenticationApi extends Api {
  login = async (data) => {
    return super.init().post("/users/login", data);
  };

  signup = async (data) => {
    return super.init().post("/users/signup", data);
  };

  update = async (data) => {
    return super.init().post("/users/update", data);
  };

  getCurrentUser = async () => {
    return super.init().get("/users/current-user-data");
  };

  logout = async () => {
    return super.init().post("users/logout");
  };
}
