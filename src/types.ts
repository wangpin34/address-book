export interface Addr {
  id: string;
  key?: string;
  name?: string;
  location?: string;
  office?: string;
  officePhone?: string;
  cellPhone?: string;
  newAdding?: boolean;
}

function genID() {
  return `${Math.random()}`.slice(2);
}

export function genAddr(): Addr {
  const id = genID();
  return { id, key: id, newAdding: true };
}

export type Addrs = Addr[];

// table mode
export enum Mode {
  View,
  Editing
}
