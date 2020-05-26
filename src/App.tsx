import React, { useState, useCallback, useMemo } from 'react'
import { Addrs, Addr } from './types'
import MyContext, { defaultValue } from './context'
import AddrsTable from 'components/addrs'
import { Button, Space } from 'antd' 
import './App.sass'

function genID() {
  return `${Math.random()}`.slice(2)
}

function App() {
  
  const [addrs, setAddrs] = useState<Addrs>(defaultValue.addrs)
  const [selected, setSelected] = useState<Addrs>([])
  const [updating, setUpdating] = useState<Addrs>([])

  const handleUpdate = useCallback((updated: Addr) => {
    const index = addrs.findIndex(addr => addr.id === updated.id)
    if (index > -1) {
      addrs[index] = updated
    } else {
      addrs.push(updated)
    }
    setAddrs([...addrs])
  }, [addrs])

  const handleUpdates = useCallback(() => {
    updating.forEach(updated => {
      handleUpdate(updated)
    })
    setUpdating([])
  }, [updating, handleUpdate])

  // Each row sync the modified data to the list for later updating
  const syncUpdate = useCallback((addr: Addr) => {
    const index = updating.findIndex(a => addr.id === a.id)
    if (index > -1) {
      updating[index] = {...addr}
    } else {
      updating.push({...addr})
    }
    setUpdating([...updating])
  }, [updating])
  
  const handleDelete = useCallback(() => {
    const next: Addrs = []
    addrs.forEach((addr: Addr) => {
      if (!selected.find(a => a.id === addr.id)) {
        next.push(addr)
      }
    }
    )

    setAddrs(next)
    setSelected([])
  }, [addrs, selected])

  const handleAdd = useCallback(() => {
    const addrNew = { id: genID(), newAdding: true } as Addr

    setUpdating([...updating, addrNew])
    setAddrs([...addrs, addrNew])
  }, [updating, addrs])

  const handleSelect = useCallback((selecting: Addrs) => {
    setSelected(selecting)
  }, [])

  const allAddr = useMemo(() => {
    const list = [...addrs]
    updating.forEach(a => {
      const index = list.findIndex(b => a.id === b.id)
      list[index] = {...a}
    })
    return [...list]
  }, [addrs, updating])

  return (
    <MyContext.Provider value={{ addrs, all: allAddr, selected, handleUpdate, handleDelete, syncUpdate}}>
      <div className="App">
        <header>Address book</header>
      </div>
      <main>
        <AddrsTable handleSelect={handleSelect}/>
        <Space size="middle">
          <Button danger onClick={handleDelete}>Delete</Button>
          <Button onClick={() => handleUpdates()}>Update</Button>
          <Button onClick={handleAdd}>Add</Button>
        </Space>
      </main>
      <hr/>
      <h1>all: {allAddr.length} | selected: {selected.length}</h1>
      <pre>
        addrs({allAddr.length}):
        {JSON.stringify(addrs, null, 2)}
      </pre>
      <pre>
        updating({updating.length}):
        {JSON.stringify(updating, null, 2)}
      </pre>
    </MyContext.Provider>
  );
}

export default App;
