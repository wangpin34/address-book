import React, { useContext } from "react";
import MyContext from "../../context";
import EditableCell from "components/editable-cell";
import { Table, Space, Button } from "antd";
import { Addr, Addrs } from "../../types";
import { Key } from "antd/lib/table/interface";
import { useTranslation } from "react-i18next";
import "./index.sass";
const { Column, ColumnGroup } = Table;

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

const AddrsTable = () => {
  const { t } = useTranslation();
  const { handleSelect, handleDelete, handleAdd, handleUpdate } = useContext(MyContext)
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (_: Key[], selectedRows: Addrs) => {
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
            {t("delete")}
          </Button>
          <Button onClick={handleUpdate}>{t("update")}</Button>
          <Button onClick={handleAdd}>{t("add")}</Button>
        </Space>
      )}
      bordered
    >
      <Column
        title={t("id")}
        dataIndex="id"
        key="id"
        sorter={(a: Addr, b: Addr) => parseInt(a.id) - parseInt(b.id)}
      />
      <Column
        title={t("name")}
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
        title={t("location")}
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
        title={t("office")}
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
      <ColumnGroup title={t("phone")}>
        <Column
          title={t("office")}
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
          title={t("cell")}
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
