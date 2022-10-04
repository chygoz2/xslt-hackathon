<template>
  <div class="row">
    <div class="col-12">
      <CarsFilter @applyFilters="applyFilters" />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-12">
      <Card>
        <template #content>
          <DataTable
            :value="cars"
            :lazy="true"
            responsiveLayout="scroll"
            :paginator="false"
            :rows="50"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10, 20, 50]"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            :loading="loading"
            @sort="onSort($event)"
            showGridlines
            stripedRows
          >
            <template #header>
              <div class="flex justify-content-end">
                <span class="p-input-icon-left">
                  {{ total }} car{{ total != 1 ? "s" : "" }} found
                </span>
              </div>
            </template>
            <Column field="Make" header="Make" :sortable="true"></Column>
            <Column field="Model" header="Model" :sortable="true"></Column>
            <Column field="Year" header="Year" :sortable="true"></Column>
            <Column field="Price" header="Price" :sortable="true"></Column>
            <Column field="State" header="State" :sortable="true"></Column>
            <Column field="Color" header="Color" :sortable="true"></Column>
            <Column field="Engine" header="Engine" :sortable="true"></Column>
            <Column
              field="MPG"
              header="Miles per gallon"
              :sortable="true"
            ></Column>
            <Column field="Mileage" header="Mileage" :sortable="true"></Column>
            <Column field="VIN" header="VIN" :sortable="true"></Column>
          </DataTable>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CarsFilter from "./CarsFilter.vue";

export default {
  name: "CarsTable",
  components: {
    CarsFilter,
  },
  data() {
    return {
      cars: [],
      loading: true,
      sortField: undefined,
      sortOrder: undefined,
      filters: {},
      total: 0,
    };
  },
  methods: {
    applyFilters(data) {
      this.filters = { ...data };
      this.fetchCars();
    },
    onSort(event) {
      console.log(event);
      this.sortField = event.sortField || undefined;
      if (!event.sortOrder) {
        this.sortOrder = undefined;
      }
      this.sortOrder = event.sortOrder == 1 ? "ascending" : "descending";
      this.fetchCars();
    },
    fetchCars() {
      this.loading = true;
      axios
        .get("https://qa-api.illuminateapp.com/beam/V1.0.0/cars", {
          params: {
            returnJson: true,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            ...this.filters,
          },
          headers: {
            companyid: "SUH",
            illuminateapikey: "90c9a67e-79d5-4b49-906b-1f67bccbc935",
          },
          auth: {
            username: "testuser",
            password: "password",
          },
        })
        .then((resp) => {
          this.cars = resp.data.data.cars;
          this.total = resp.data.data.total;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.fetchCars();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
