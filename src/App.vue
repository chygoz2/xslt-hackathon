<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h3 class="py-2">Hackathon III Cars</h3>
      </div>
    </div>
    <CarsTable />
  </div>
</template>

<script>
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/@popperjs/core/dist/cjs/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import CarsTable from "./components/CarsTable.vue";

export default {
  name: "App",
  components: {
    CarsTable,
  },
};
</script>

<style>

h3 {
  margin-top: 10px;
  text-align: center;
  color: white;
  background-color: rgb(41, 172, 215);
}
</style>
