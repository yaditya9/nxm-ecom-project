"use client";

import * as React from "react";

type Props = {
  children: React.ReactNode;
};

export type GlobalContextType = {
  username: string;
  accessToken: string;
  setAccessToken: (token: string) => void;
  setUsername: (username: string) => void;
};

const globalValues: GlobalContextType = {
  username: "",
  accessToken: "",
  setAccessToken: (token: string) => {},
  setUsername: (username: string) => {},
};

export const GlobalContext = React.createContext<GlobalContextType>(globalValues);

function useGlobalContext() {
  return React.useContext(GlobalContext);
}

const GlobalContextProvider = ({ children }: Props) => {
  const [username, setLocalUsername] = React.useState<string>("");
  const [accessToken, setLocalAccessToken] = React.useState<string>("");

  const setUsername = async (username: string) => {
    setLocalUsername(username);
  };

  const setAccessToken = async (token: string) => {
    setLocalAccessToken(token);
  };

  return <GlobalContext.Provider value={{ username, setUsername, accessToken, setAccessToken }}>{children}</GlobalContext.Provider>;
};

export { GlobalContextProvider, useGlobalContext };