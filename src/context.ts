import React from "react";
import { Addrs, Mode } from "./types";

interface Context {
  addrs: Addrs;
  all?: Addrs;
  selected?: Addrs;
  handleDelete?: Function;
  handleUpdate?: Function;
  syncUpdate?: Function;
  mode: Mode;
  setMode(m: Mode): void;
}

export const defaultValue: Context = {
  addrs: [
    // Copied from the excel sheet
    {
      id: "501",
      key: "501",
      name: "Khali Zhang",
      location: "Shanghai",
      office: "C-103",
      officePhone: "x55778",
      cellPhone: "650-353-1239",
    },
  ],
  selected: [],
  mode: "view",
  setMode: (m: Mode) => null,
};

export const context = React.createContext(defaultValue);

export default context;
