<template>
  <div class="container">
    <div class="row">
      <form class="profile">
        <div class="col-12 top">
          <div class="add">
            <span class="add-but" @click="invit = true;put= false">
              <i class="fa-sharp fa-solid fa-circle-plus"></i>
              {{ $t("Add") }}
              </span>
              <div class="overlay" v-if="invit" @click="invit= false;show=false"></div>
            <form id="invitations" class="invitations " v-if="invit">
                <div class="head">
                  <h4 v-if="put != false">{{ $t("Edit") }}</h4>
                  <h4 v-else>{{ $t("Add") }}</h4>
                  <i class="fa-solid fa-circle-xmark fa-lg" @click="invit = false"></i>
                </div>
                <div class="body">
                  <div class="row">
                    <div class="col-12">
                      <div class="alert alert-danger" role="alert" v-if="invaild">
                        {{ $t("alert_name") }}
                      </div>
                    </div>
                  
                    <div class="col-md-12 mt-3">
                            <label for="full_name" class="mb-1">
                              <i class="fa-regular fa-square-check"></i>
                            {{ $t("category") }}
                            </label>
                            <input type="text" class="form-control" :class="invaild ? 'invaild':''"
                            name="full_name" v-model="formData.name" @input="invaild = false" required>
                   </div>
                   <div class="col-md-12 mt-3">
                      <div class="row">
                          <label for="full_name" class="mb-1">{{ $t("Color") }}</label>
                        <div class="col-md-6">
                          <chrome-picker style="width:150px" :value="colors" v-model="colors" @input="updateValue"></chrome-picker>
                        </div>
                      </div>
                   </div>
                   <div class="col-md-12 mt-3">
                      <hr>
                      <button v-if="load != false" class="btn btn-send" >
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </button>
                      <div v-else>
                      <button v-if="put != false" class="btn btn-send" @click.prevent="edit">{{ $t("Save") }}</button>
                      <button v-else class="btn btn-send" @click.prevent="add">{{ $t("Save") }}</button>
                      </div>
                   </div>
                  </div>
                </div>
            </form>
          </div>
        </div>
        <div class="col-12 list mt-3">
           <table>
              <tr>
                <th>{{ $t("m") }}</th>
                <th>{{ $t("Color") }}</th>
                <th>{{ $t("category") }}</th>
                <th><input type="checkbox" disabled></th>
                <th>{{ $t("Actions") }}</th>
              </tr>
              <tr v-for="(item,index) in categoriesInvit" :key="item.id">
                <td>{{index+1}}</td>
                <td><div style="width:25px;height:25px;margin: auto;" 
                :style="{ 'background-color': item.color }" ></div></td>
                <td>{{item.name}}</td>
                <td>
                  <input type="checkbox" :name="item.id">
                </td>
                <td class="action">
                  <i class="fa-solid fa-pen-to-square fa-lg" title="تحرير" @click="invit=true;showPut(item)"></i>
                  <div v-if="load2 == item.id" class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <i v-else class="fa-solid fa-xmark fa-lg" title="حذف" @click="delet(item.id)"></i>
                </td>
              </tr>
                
            </table> 
        </div>
      </form>
      <ul class="pagination" style="justify-content: center;margin-top: 30px;">
    <li class="page-item" :class="{ disabled : page == 1}" @click="Previous">
      <span class="page-link">{{ $t("Previous") }}</span>
    </li>
    
    <li class="page-item" v-for="item in total_page" :key="item" :class="[item == page ? 'active' : '']"
    >
        <span class="page-link" @click="getPage(item)"> {{item}}</span>
    </li>
    <li class="page-item" @click="Next" :class="{ disabled : page == total_page}">
      <span class="page-link">{{ $t("Next") }}</span>
    </li>
  </ul>
    </div>
  </div>
</template>

<script>
// import Invitations from "../../components/invitations/invitations.vue";
import { mapActions, mapGetters} from "vuex";
export default {
  layout: "app",
  name: "categories",
  data() {
    return {
      current:1, 
      page: window.localStorage.getItem("page") || Number(1),
      load: false,
      load2: false,
      put: false,
      invit: false,
      invaild:false,
      formData:{
        "id": 1,
        "name": "",
        "color": null
    },
    colors : {
  hex: '#194d33',
}
    };
  },
    head() {
    return {
      title:
        this.$i18n.locale === "ar"
          ? "الفئات"
          : "Categories",
           meta: [
        {
          hid:this.$i18n.locale === "ar"
          ? "الفئات"
          : "Categories",
          name: this.$i18n.locale === "ar"
          ? "الفئات"
          : "Categories",
          content: this.$i18n.locale === "ar"
          ? "الفئات"
          : "Categories",
        },
      ],
     
    };
  },
  components: {
  },
   computed: {
   ...mapGetters({
      categoriesInvit: "categoriesInvit",
      total_page: "total_page",
    }),
  },
   methods: {
      getPage(i) {
          this.page = i;
            localStorage.setItem("page", i);
            this.fetchCategoriesInvit(i);
    },
      Next(){
         if(localStorage.getItem("page") < this.total_page){
            this.page++;
            localStorage.setItem("page", this.page);
            this.fetchCategoriesInvit(this.page);
           }
           
        },
       Previous(){
           if(localStorage.getItem("page") > 1){
            this.page--;
            localStorage.setItem("page",this.page);
            this.fetchCategoriesInvit(this.page);
           }

        },
     updateValue(){
      this.formData.color = this.colors.hex;
      console.log(this.formData.color);
     },
    ...mapActions(["fetchCategoriesInvit"]),
   add(){
      var self = this;
      self.load = true;

    if (document.getElementById('invitations').checkValidity()) {
        self.$axios
            .post(`categories`, self.formData, {
            })
            .then(function(res) {
              
              if (res.status == 201 || res.status == 200) { 
                self.invit = false;
                self.load = false;
                self.fetchCategoriesInvit();
              } else {
              self.invit = true;
              self.load = false;

              }
            })
            .catch(function(error) {
              if (error.response) {
                self.load = false;
                console.log(error.response);
              }
            });
      } else {
        self.invaild = true;
        self.load = false;
      }
      
    },
    showPut(item){
      var self = this;
      self.put = true;
      self.formData.id = item.id;
      self.formData.name = item.name;
      self.formData.lang = item.lang;
    },
    edit(){
      var self = this;
      self.load = true;
    if (document.getElementById('invitations').checkValidity()) {
        self.$axios
            .put(`categories/${self.formData.id}`, self.formData, {
            })
            .then(function(res) {
              
              if (res.status == 201 || res.status == 200) { 
                self.invit = false;
                self.load = false;
                self.fetchCategoriesInvit();
              } else {
              self.invit = true;
              self.load = false;
              }
            })
            .catch(function(error) {
              if (error.response) {
                self.load = false;
                console.log(error.response);
              }
            });
      } else {
        self.invaild = true;
      }
    },
    delet(id){
      var self = this;
      self.load2 = id;
       self.$axios
        .delete(`categories/${id}`)
        .then(function() {
            self.fetchCategoriesInvit();
            self.load2 = false;
        })
        .catch(function(error) {
          if (error.response) {
            self.load2 = false;
            console.log(error.response);
          }
        });
    }
  },

  created() {
    this.fetchCategoriesInvit(this.page);
  },
};
</script>
<style lang="scss" scoped>
.invaild{
  border-color: red;
}
.pagination{
  li{
    cursor: pointer;
  }
}
.disabled{
   cursor: auto !important;
}
.page-item.active .page-link{
  background-color: #6666cc;
border-color: #6666cc;
}
</style>
