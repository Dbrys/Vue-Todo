<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="container" fluid>
        <v-row justify="center">
          <v-col cols="12" lg="8" sm="8" md="8">
            <v-card class="elevation-12">
              <v-toolbar color="#689F38" dark flat>
                <v-toolbar-title>
                  <h3>Todos</h3>
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text color="#689F38">
                <v-form>
                  <v-text-field
                    label="Todo"
                    name="Todo"
                    color="#689F38"
                    prepend-icon="mdi-pencil"
                    type="text"
                    v-model="todoInput"
                  ></v-text-field>
                  <v-row align="center" justify="center">
                    <v-card-actions>
                      <v-btn color="#558B2F" @click="addItem">Add</v-btn>
                    </v-card-actions>
                  </v-row>
                  <todo
                    @updateItem="updateItem"
                    @saveItem="saveItem"
                    @deleteItem="deleteItem"
                    :items="todoItems"
                  ></todo>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import todo from "./components/Todo";
import getTodo from "./services/addItem-service";
export default {
  data() {
    return {
      todoInput: "",
      todoItems: [],
      count: 0,
    };
  },
  components: {
    todo,
  },

  methods: {
    addItem() {
      if (this.todoInput.trim()) {
        this.todoItems.push({
          id: this.count++,
          name: this.todoInput,
          showItem: false,
        });
        this.todoInput = "";
      }
    },
    deleteItem(item) {
      this.todoItems = this.todoItems.filter((cur) => cur.id !== item.id);
    },
    updateItem(item) {
      this.todoItems = this.todoItems.map((cur) => {
        if (cur.id === item.id) {
          cur.showItem = !cur.showItem;
        }
        return cur;
      });
    },
    saveItem(updtdName, item) {
      this.todoItems = this.todoItems.map((cur) => {
        if (cur.id === item.id) {
          if (updtdName.trim()) {
            cur.name = updtdName;
            cur.showItem = !cur.showItem;
          } else {
            cur.showItem = !cur.showItem;
          }
        }
        return cur;
      });
    },
  },
  computed: {
    getTodoItems: function () {
      return this.todoItems;
    },
  },
  mounted() {
    getTodo()
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>