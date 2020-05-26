import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          title: "Address Book",
          id: "ID",
          name: "Name",
          location: "Location",
          office: "Office",
          phone: "Phone",
          cell: "Cell",
          delete: "Delete",
          update: "Update",
          add: "Add",
        },
      },
      zh: {
        translation: {
          title: "地址簿",
          id: "ID",
          name: "姓名",
          location: "位置",
          office: "办公室",
          phone: "电话",
          cell: "手机",
          delete: "删除",
          update: "更新",
          add: "添加",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
