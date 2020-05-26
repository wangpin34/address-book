import React, { useContext } from "react";
import MyContext from "../../context";
import EditableCell from "components/editable-cell";
import { Table, Space, Button } from "antd";
import { Addr, Addrs } from "../../types";
import { Key } from "antd/lib/table/interface";
import "./index.sass";
const { Column, ColumnGroup } = Table;

interface Props {
  handleSelect(p: Addrs): void;
  handleDelete(): void;
  handleUpdate(): void;
  handleAdd(): void;
}

function genSorter(name: keyof Addr) {
  return (a: Addr, b: Addr) => {
    const aVal = a[name];
    const bVal = b[name];

    if (!aVal || !bVal) {
      return 0;
    }
    if (aVal > bVal) {
      return 1;
    } else if (aVal === bVal) {
      return 0;
    } else {
      return -1;
    }
  };
}

const AddrsTable = ({
  handleSelect,
  handleDelete,
  handleUpdate,
  handleAdd,
}: Props) => {
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: Key[], selectedRows: Addrs) => {
      handleSelect(selectedRows);
    },
    getCheckboxProps: (record: Addr) => ({
      name: record.name,
    }),
  };

  const value = useContext(MyContext);
  const addrs = value.all || [];

  return (
    <Table
      rowSelection={{
        ...rowSelection,
      }}
      dataSource={addrs}
      title={() => "Address Book"}
      footer={() => (
        <Space size="middle">
          <Button danger onClick={handleDelete}>
            Delete
          </Button>
          <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={handleAdd}>Add</Button>
        </Space>
      )}
      bordered
    >
      <Column
        title="ID"
        dataIndex="id"
        key="id"
        sorter={(a: Addr, b: Addr) => parseInt(a.id) - parseInt(b.id)}
      />
      <Column
        title="Name"
        dataIndex="name"
        key="name"
        render={(_: string, record: Addr, index: number) => (
          <EditableCell
            name="name"
            addr={record}
            allowEdit={record.newAdding}
            defaultEditing={record.newAdding}
          />
        )}
        sorter={genSorter("name")}
      />
      <Column
        title="Location"
        dataIndex="location"
        key="location"
        render={(_: string, record: Addr, index: number) => (
          <EditableCell
            name="location"
            addr={record}
            allowEdit={record.newAdding}
            defaultEditing={record.newAdding}
          />
        )}
        sorter={genSorter("location")}
      />
      <Column
        title="Office"
        dataIndex="office"
        key="office"
        render={(_: string, record: Addr, index: number) => (
          <EditableCell
            name="office"
            addr={record}
            allowEdit={record.newAdding}
            defaultEditing={record.newAdding}
          />
        )}
        sorter={genSorter("office")}
      />
      <ColumnGroup title="Phone">
        <Column
          title="Office"
          dataIndex="officePhone"
          key="officePhone"
          render={(_: string, record: Addr, index: number) => (
            <EditableCell
              name="officePhone"
              addr={record}
              allowEdit={record.newAdding}
              defaultEditing={record.newAdding}
            />
          )}
          sorter={genSorter("officePhone")}
        />
        <Column
          title="Cell"
          dataIndex="cellPhone"
          key="cellPhone"
          render={(_: string, record: Addr, index: number) => (
            <EditableCell
              name="cellPhone"
              addr={record}
              allowEdit
              defaultEditing={record.newAdding}
            />
          )}
          sorter={genSorter("cellPhone")}
        />
      </ColumnGroup>
    </Table>
  );
};

export default AddrsTable;
