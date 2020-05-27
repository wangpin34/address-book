import React, { useContext, useState } from "react";
import { Input } from "antd";
import { Addr, Mode } from "../../types";
import MyContext from "../../context";

interface PropsOfCell {
  name: keyof Addr;
  addr: Addr;
  defaultEditing?: boolean;
  allowEdit?: boolean;
}

const EditableCell = ({
  name,
  addr,
  defaultEditing,
  allowEdit,
}: PropsOfCell) => {
  const contextValue = useContext(MyContext);
  const syncUpdate = contextValue.syncUpdate;
  const [editing, setEditing] = useState<boolean>(Boolean(defaultEditing));

  if (allowEdit && editing && contextValue.mode === Mode.Editing) {
    return (
      <Input
        value={addr[name] as string}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newRecord = { ...addr, [name]: e.target.value };
          syncUpdate && syncUpdate(newRecord);
        }}
      />
    );
  } else {
    return (
      <span
        className="editable-grid-text"
        onDoubleClick={() => {
          if (allowEdit) {
            setEditing(true);
            contextValue.setMode(Mode.Editing);
          }
        }}
      >
        {addr[name]}
      </span>
    );
  }
};

export default EditableCell;
