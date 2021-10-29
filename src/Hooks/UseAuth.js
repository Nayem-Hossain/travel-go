import { useContext } from "react";
import { AuthContext } from "../Context/ProvideAuth";


const UseAuth = () => {
  return useContext(AuthContext);
};

export default UseAuth;