import PrimeVue from "primevue/config";
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { createApp } from "vue";

import App from "./App.vue";

createApp(App)
  .use(PrimeVue)
  .component("Card", Card)
  .component("DataTable", DataTable)
  .component("Column", Column)
  .component("InputText", InputText)
  .mount("#app");
