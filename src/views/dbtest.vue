<template>
  <div>
    <h1>Names</h1>
    <el-input style="width:250px" id="name" v-model="namegp" placeholder="Press enter key to add name" @keyup.enter.native="addname()"></el-input>
    <ul>
      <li v-for="(username,key) in names" :key="key">
        <h3>{{username.name}}</h3>
        <!--<template slot-scope="scope">
          <el-button type="primary" v-if="VisibleEdit" @click="edit(scope.$index, names)">Edit</el-button>
        
        </template> -->
        <el-button type="primary" v-if="VisibleEdit" @click="edit()">Edit</el-button>
        <el-button type="primary" v-if="VisibleSave" @click="save(key)">Save</el-button>
        <el-button type="danger" @click="deletename(key)">Delete</el-button>
        <br />
        <br />

        <el-input style="width:250px" v-if="VisibleInput" v-model="editForm[key]" ></el-input>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      namegp: "",
      names: [],
      editForm: [],
      VisibleSave: false,
      VisibleEdit:true,
      VisibleInput: false
    };
  },
  methods: {
    addname() {
      firebase
        .database()
        .ref("names")
        .push({ name: this.namegp })
        .then(data => {
          console.log(data);
        })
        .catch(e => {
          console.log(e);
        });
        this.namegp =''
    },
    edit() {
      this.VisibleSave= true;
      this.VisibleEdit= false;
      this.VisibleInput = true;
      //this.editedRow = row[index];
      //this.editForm = this.editedRow.editForm
    },
    save(key){
      this.VisibleSave = false;
      this.VisibleEdit =true;
      this.VisibleInput = false;
      this.namegp='';
      firebase
        .database()
        .ref("names/" + key)
        .set({
          name: this.editForm[key]
        });
    },
    deletename(key) {
      firebase
        .database()
        .ref("names/" + key)
        .remove();
    }
  },
  created() {
    firebase
      .database()
      .ref("names")
      .on("value", snapshot => {
        this.names = snapshot.val();
      });
  }
};
</script>

<style scoped>
li{
  list-style-type: none;
}
</style>