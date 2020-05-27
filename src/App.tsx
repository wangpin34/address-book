import React, { useState, useCallback, useMemo } from "react";
import { Addrs, Addr, genAddr, Mode } from "./types";
import MyContext, { defaultValue } from "./context";
import AddrsTable from "components/addrs";
import { notification } from "antd";
import "./App.sass";

function App() {
  const [addrs, setAddrs] = useState<Addrs>(defaultValue.addrs);
  const [selected, setSelected] = useState<Addrs>([]);
  const [updating, setUpdating] = useState<Addrs>([]);
  const [mode, setMode] = useState<Mode>(Mode.View);

  const changed = useMemo(() => {
    return updating.filter((a) => {
      if (a.newAdding) {
        return true;
      }
      const target = addrs.find((b) => b.id === a.id);
      if (target) {
        if (JSON.stringify(a) !== JSON.stringify(target)) {
          return true;
        }
      }
      return false;
    });
  }, [addrs, updating]);

  const handleUpdate = useCallback(
    (updated: Addr) => {
      const index = addrs.findIndex((addr) => addr.id === updated.id);
      if (index > -1) {
        addrs[index] = { ...updated, newAdding: false };
      } else {
        addrs.push({ ...updated, newAdding: false });
      }
      setAddrs([...addrs]);
    },
    [addrs]
  );

  const handleUpdates = useCallback(() => {
    setMode(Mode.View);
    if (changed.length) {
      notification.open({
        message: "Updating messsage",
        description: `There are ${
          changed.length
        } address(es) will be updated\nThe ID:[${changed
          .map((c) => c.id)
          .join(",")}]`,
      });
    } else {
      return;
    }

    changed.forEach((updated) => {
      handleUpdate(updated);
    });
    setUpdating([]);
  }, [changed, handleUpdate]);

  // Each row sync the modified data to the list for later updating
  const syncUpdate = useCallback(
    (addr: Addr) => {
      const index = updating.findIndex((a) => addr.id === a.id);
      if (index > -1) {
        updating[index] = { ...addr };
      } else {
        updating.push({ ...addr });
      }
      setUpdating([...updating]);
    },
    [updating]
  );

  const handleDelete = useCallback(() => {
    if (selected.length < 1) {
      return;
    }
    const next: Addrs = [];
    addrs.forEach(addr => {
      if (!selected.find((a) => a.id === addr.id)) {
        next.push(addr)
      }
    });

    setAddrs(next);

    if (updating.length > 0) {
      const nextUpdating: Addrs = []

      updating.forEach(addr => {
        if (!selected.find((a) => a.id === addr.id)) {
          nextUpdating.push(addr)
        }
      })
      if (updating.length > nextUpdating.length) {
        setUpdating(nextUpdating)
      }
    }

    setSelected([]);
  }, [addrs, updating, selected]);

  const handleAdd = useCallback(() => {
    const addrNew = genAddr();

    setUpdating([...updating, addrNew]);
    setAddrs([...addrs, addrNew]);
    setMode(Mode.Editing);
  }, [updating, addrs]);

  const handleSelect = useCallback((selecting: Addrs) => {
    setSelected(selecting);
  }, []);

  const allAddr = useMemo(() => {
    const list = [...addrs];
    updating.forEach((a) => {
      const index = list.findIndex((b) => a.id === b.id);
      list[index] = { ...a };
    });
    return [...list];
  }, [addrs, updating]);

  return (
    <MyContext.Provider
      value={{
        addrs,
        all: allAddr,
        selected,
        handleAdd,
        handleUpdate: () => handleUpdates(),
        handleDelete,
        handleSelect,
        syncUpdate,
        mode,
        setMode,
      }}
    >
      <div className="App">
        <main>
          <AddrsTable />
        </main>
      </div>
    </MyContext.Provider>
  );
}

export default App;
