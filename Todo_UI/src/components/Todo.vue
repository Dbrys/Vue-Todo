<template>
  <v-row justify="center">
    <v-card v-for="item in items" :key="item.id" outline="false" style="width:100%">
      <v-card-title style="display:flex; justify-content:space-between">
        <v-text-field v-model="updatedName" v-show="item.showItem" :label="item.name"></v-text-field>
        <div v-show="!item.showItem ">{{item.name}}</div>
        <div style="display:flex">
          <div v-if="changeToText">
            <v-btn class="btns" @click="saveItem(updatedName,item)">Save</v-btn>
          </div>
          <div v-if="!changeToText">
            <v-btn class="btns" @click="updateItem(item)">Update</v-btn>
          </div>
          <v-btn class="btns" @click="deleteItem(item)">Remove</v-btn>
        </div>
      </v-card-title>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "todo",
  props: {
    items: Array,
  },
  data() {
    return {
      updatedName: "",
      changeToText: false,
    };
  },
  methods: {
    deleteItem(item) {
      this.$emit("deleteItem", item);
    },
    updateItem(item) {
      this.changeToText = !this.changeToText;
      this.$emit("updateItem", item);
    },
    saveItem(updtdName, itm) {
      if (updtdName.trim()) {
        this.changeToText = !this.changeToText;
        this.$emit("saveItem", updtdName, itm);
        this.updatedName = "";
      } else {
        this.changeToText = !this.changeToText;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btns {
  margin: 4px;
}
</style>
