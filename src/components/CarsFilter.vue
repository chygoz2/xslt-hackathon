<template>
  <Card>
    <template #content>
      <div class="d-flex flex-column">
        <div class="d-flex mb-3 justify-content-between">
          <div>
            <InputText
              placeholder="Make"
              class="w-100"
              v-model="filters.make"
            />
          </div>
          <div>
            <InputText
              placeholder="Model"
              class="w-100"
              v-model="filters.model"
            />
          </div>
          <div>
            <InputText
              placeholder="State"
              class="w-100"
              v-model="filters.state"
            />
          </div>
          <div>
            <InputText
              placeholder="Color"
              class="w-100"
              v-model="filters.color"
            />
          </div>
          <div>
            <InputText
              placeholder="Engine"
              class="w-100"
              v-model="filters.engine"
            />
          </div>
          <div>
            <InputText placeholder="VIN" class="w-100" v-model="filters.vin" />
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <div class="w-24">
            <div class="mb-2">
              <InputText
                placeholder="Year"
                class="w-100"
                type="number"
                v-model="filters.year"
              />
            </div>
            <span class="">
              <InputText
                placeholder="From Year"
                type="number"
                v-model="filters.yearFrom"
                class="w-50"
              />
              <InputText
                placeholder="To Year"
                type="number"
                v-model="filters.yearTo"
                class="w-50"
              />
            </span>
          </div>
          <div class="w-24">
            <div class="mb-2">
              <InputText
                placeholder="Price"
                class="w-100"
                v-model="filters.price"
              />
            </div>
            <span class="">
              <InputText
                placeholder="From Price"
                type="number"
                v-model="filters.priceFrom"
                class="w-50"
              />
              <InputText
                placeholder="To Price"
                type="number"
                v-model="filters.priceTo"
                class="w-50"
              />
            </span>
          </div>
          <div class="w-24">
            <div class="mb-2">
              <InputText
                placeholder="MPG"
                class="w-100"
                type="number"
                v-model="filters.mpg"
              />
            </div>
            <span class="">
              <InputText
                placeholder="From MPG"
                type="number"
                v-model="filters.mpgFrom"
                class="w-50"
              />
              <InputText
                placeholder="To MPG"
                type="number"
                v-model="filters.mpgTo"
                class="w-50"
              />
            </span>
          </div>
          <div class="w-24">
            <div class="mb-2">
              <InputText
                placeholder="Mileage"
                class="w-100"
                type="number"
                v-model="filters.mileage"
              />
            </div>
            <span class="">
              <InputText
                placeholder="From Mileage"
                type="number"
                v-model="filters.mileageFrom"
                class="w-50"
              />
              <InputText
                placeholder="To Mileage"
                type="number"
                v-model="filters.mileageTo"
                class="w-50"
              />
            </span>
          </div>
        </div>
        <div class="d-flex mt-3 justify-content-end">
          <Button class="btn" @click="search">Search</Button>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        make: "",
        model: "",
        state: "",
        color: "",
        engine: "",
        vin: "",
        year: "",
        yearFrom: "",
        yearTo: "",
        price: "",
        priceFrom: "",
        priceTo: "",
        mpg: "",
        mpgFrom: "",
        mpgTo: "",
        mileage: "",
        mileageFrom: "",
        mileageTo: "",
      },
    };
  },
  methods: {
    search() {
      this.$emit("applyFilters", this.filters);
    },
  },
};
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
.btn {
  color: white;
  background-color: rgb(41, 172, 215);
}
.w-24 {
  width: 24%;
}
.w-50 {
  width: 50%;
}
</style>