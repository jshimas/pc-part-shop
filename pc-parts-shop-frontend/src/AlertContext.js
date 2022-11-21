import { createContext, useState } from "react";

const ALERT_TIME = 3000;
const initialState = {
  text: "",
  type: "",
};

const AlertContext = createContext({
  ...initialState,
  setAlert: () => {},
  removeAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  let timeout;

  const setAlert = (text, type) => {
    setText(text);
    setType(type);

    timeout = setTimeout(() => {
      setText("");
      setType("");
    }, ALERT_TIME);
  };

  const removeAlert = () => {
    clearTimeout(timeout);
    setText("");
    setType("");
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
        removeAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
