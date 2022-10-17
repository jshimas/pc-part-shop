import Api from "../../api";

export default class AuthenticationAPI extends Api {
  login = (data) => {
    return super.init().post("/users/login", { data });
  };

  singup = async (data) => {
    return super.init().post("/users/singup", { data });
  };
}
