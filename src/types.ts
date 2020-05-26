export interface Addr {
  id: string
  name?: string
  location?: string
  office?: string
  officePhone?: string
  cellPhone?: string
  newAdding?: boolean
}

export type Addrs = Addr[]