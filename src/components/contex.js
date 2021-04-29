import React, { useState } from "react";

export const access = React.createContext();

export default (props) => {
  const [token, setToken] = useState("");

  const upd = (value) => {
    setToken(value);
    console.log("val", value);
  };
  console.log(props.children);
  return (
    <NumberContext.Provider
      value={{
        token,
        upd
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};
