import React, { useContext, ChangeEvent, useState } from 'react'
import MyContext from '../../context'
import { Table, Input } from 'antd'
import { Addr, Addrs } from '../../types'
import { Key } from 'antd/lib/table/interface'
import './index.sass'

interface PropsOfGrid {
  name: 'name' | 'office' | 'location' | 'officePhone' | 'cellPhone'
  addr: Addr
  defaultEditing?: boolean
  allowEdit?: boolean
  // onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const EditableGrid = ({name, addr, defaultEditing, allowEdit}: PropsOfGrid) => {
  const contextValue = useContext(MyContext)
  const syncUpdate = contextValue.syncUpdate
  const [editing, setEditing] = useState<boolean>(Boolean(defaultEditing))
  
  if (allowEdit && editing) {
    return (
      <Input
        value={addr[name]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newRecord = { ...addr, [name]: e.target.value }
          syncUpdate && syncUpdate(newRecord)
        }} 
      />
    )
  } else {
    return <span className="editable-grid-text" onDoubleClick={() => setEditing(true)}>{addr[name]}</span>
  }
}


const { Column, ColumnGroup } = Table

interface Props {
  handleSelect(p: Addrs): void
}

const AddrsTable = ({handleSelect}: Props) => {

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: Key[], selectedRows: Addrs) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      handleSelect(selectedRows)
    },
    getCheckboxProps: (record: Addr) => ({
      name: record.name,
    }),
  }
  

  const value = useContext(MyContext)
  const addrs = value.all || []
  
  return (
    <Table
     rowSelection={{
      ...rowSelection,
    }}
    dataSource={addrs}>
      <Column title="ID" dataIndex="id" key="id"/>
      <Column title="Name" dataIndex="name" key="name" 
        render={(_: string, record: Addr, index: number) => 
          <EditableGrid name="name" addr={record} allowEdit={record.newAdding} defaultEditing={record.newAdding} />
        }
      />
      <Column title="Location" dataIndex="location" key="location" 
        render={(_: string, record: Addr, index: number) => 
          <EditableGrid name="location" addr={record} allowEdit={record.newAdding} defaultEditing={record.newAdding} />
        }
      />
      <Column title="Office" dataIndex="office" key="office" 
        render={(_: string, record: Addr, index: number) => 
          <EditableGrid name="office" addr={record} allowEdit={record.newAdding} defaultEditing={record.newAdding} />
        }
      />
      <ColumnGroup title="Phone">
        <Column
          title="Office"
          dataIndex="officePhone"
          key="officePhone"
          render={(_: string, record: Addr, index: number) => 
            <EditableGrid name="officePhone" addr={record} allowEdit defaultEditing={record.newAdding} />
          }
        />
        <Column
          title="Cell"
          dataIndex="cellPhone"
          key="cellPhone"
          render={(_: string, record: Addr, index: number) => 
            <EditableGrid name="cellPhone" addr={record} allowEdit defaultEditing={record.newAdding} />
          }
        />
      </ColumnGroup>
    </Table>
  )
}

export default AddrsTable