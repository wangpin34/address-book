import React from 'react'
import { Addr, Addrs } from './types'

interface Context {
  addrs: Addrs
  all?: Addrs
  selected?: Addrs
  handleDelete?: Function
  handleUpdate?: Function
  syncUpdate?: Function
}

export const defaultValue: Context = {
  addrs: [
    // Copied from the excel sheet
    {
      id: '501',
      name: 'Khali Zhang',
      location: 'Shanghai',
      office: 'C-103',
      officePhone: 'x55778',
      cellPhone: '650-353-1239'
    }
  ],
  selected: []
}

export const context = React.createContext(defaultValue)

export default context