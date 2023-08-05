<template>
  <div class="container">
    <div class="row">
      <form class="profile">
        <div class="col-12 top">
          <div class="add">
              <div class="overlay" v-if="invit || show" @click="invit= false;show=false"></div>
              <form  class="invitations" v-if="invit">
                <div class="head">
                  <h4 v-if="put != false">{{ $t("Edit") }}</h4>
                  <h4 v-else>{{ $t("review") }}</h4>
                  <i class="fa-solid fa-circle-xmark fa-lg" @click="invit = false"></i>
                </div>
                <div class="body">
                  <div class="row">
                     <!-- <div class="col-12 title">
                       <h4>{{ $t("data") }}</h4>
                    </div> -->
                    <div class="col-12">
                      <div>{{ $t("Chair_symbol") }}</div>
                      <div>{{ formData.class}}</div>
                    </div>
                    <div class="col-12 mt-2 mb-2">
                      <p>{{ $t("invited") }}</p>
                     <multiselect
                          v-model="name_invited"
                          :options="invitations"
                          :close-on-select="true"
                          :clear-on-select="false"
                          :preserve-search="true"
                          placeholder="الرجاء الاختيار"
                          label="full_name"
                          track-by="full_name"
                          :preselect-first="true"
                          @select="onSelect2"
                        ></multiselect>
                    </div>
                    <div class="col-12">
                      <div>{{ $t("chair_category") }}</div>
                      <select name="filter_internal" id="" v-model="formData.grade">
                          <option :value="`Vip`" >Vip</option>
                          <option :value="$t('normal')" >{{ $t("normal") }}</option>
                      </select>
                    </div>
                    <div class="col-md-12 mt-3">
                      <hr>
                      <button v-if="load != false" class="btn btn-send" >
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </button>
                      <div v-else>
                      <button class="btn btn-send" @click.prevent="edit">{{ $t("Edit") }}</button>
                      </div>
                   </div>
                  </div>
                </div>
            </form>
            
          </div>
          <!-- <div class="Excel">
            <span>
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
              {{ $t("Excel") }}
              </span>
          </div> -->
        </div>
        <div class="col-12 control">
          <div class="row">
            <div class="col-md-6">
              <h5>{{ $t("Search") }}</h5>
            </div>
             <div class="col-md-6 refresh">
              <i class="fa-sharp fa-solid fa-rotate-right"></i>
              <button @click.prevent="clearing">{{$t("Empty_filter_fields")}}</button>
            </div>
            <div class="col-lg-4 col-md-6 mt-2">
              <label for="searchName">{{ $t("invited") }}</label>
              <div class="mt-2"><input type="text" name="searchName" v-model="searchName" class="form-control"></div>
            </div>
              <div class="col-lg-4 col-md-6 mt-2">
              <label for="selectTypeChair">{{ $t("chair_category") }}</label>
              <div class="mt-2">
                <select name="selectTypeChair" v-model="selectTypeChair">
                  <option value="">{{ $t("All") }}</option>
                  <option value="VIP">VIP</option>
                  <option :value="$t('normal')">{{ $t("normal") }}</option>
                </select>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mt-2">
              <label for="selectStatusChair">{{ $t("chair_status") }}</label>
              <div class="mt-2">
                <select name="selectStatusChair" v-model="selectStatusChair">
                  <option value="">{{ $t("All") }}</option>
                  <option value="1">{{ $t("booked") }}</option>
                  <option value="0">{{ $t("finished") }}</option>
                </select>
                </div>
            </div>
            <!-- <div class="col-12">
              <button class="go">{{ $t("go") }}</button>
            </div> -->
          </div>
        </div>
        <div class="col-12 list">
           <table>
              <tr>
                <th>{{ $t("m") }}</th>
                <th>{{ $t("Chair_symbol") }}</th>
                <th>{{ $t("invited") }}</th>
                <th>{{ $t("chair_category") }}</th>
                <th>{{ $t("chair_status") }}</th>
                <th><input type="checkbox" disabled></th>
                <th>{{ $t("Actions") }}</th>
              </tr>
              <tr v-for="(item,index) in filterByName" :key="item.id">
                <td>{{index+1}}</td>
                <td>{{item.class}}</td>
                <td>{{item.invitation['full_name']}}</td>
                <td>{{item.grade}}</td>
                <td>{{item.status == 1 ? `${$t("booked")}`:`${$t("finished")}`}}</td>
                <td>
                  <input type="checkbox" :name="item.id">
                </td>
                <td class="action">
                  <i class="fa-solid fa-pen-to-square fa-lg" title="تحرير" @click="invit=true;showPut(item)"></i>
                  <div v-if="load2 == item.id" class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <i v-else class="fa-solid fa-xmark fa-lg" title="حذف" @click="delet(item.id)"></i>
                  <!-- <i class="fa-solid fa-magnifying-glass fa-lg" title="استعراض" @click="showItem(item)"></i> -->

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
  name: "seats",
  data() {
    return {
      current:1, 
      page: window.localStorage.getItem("page") || Number(1),
      name_invited:'',
      searchName:'',
      selectTypeChair:'',
      selectStatusChair:'',
      searchName:'',
      load: false,
      load2: false,
      put: false,
      show: false,
      invit: false,
      invaild:false,
      options: [
        { name: "الرجاء الاختيار", language: "PHP", $isDisabled: true },
        { name: "الأستاذ", language: "JavaScript" },
        { name: "الأستاذة", language: "Ruby" },
        { name: "dr", language: "Ruby" },
      ],
      formData: {
          "id": "",
          "class": "",
          "grade": "Vip",
          "status": "",
          "invitation_id": null,
          "created_at": null,
          "updated_at": "2023-04-28T21:15:40.000000Z"
      }
    };
  },
     head() {
    return {
      title:
        this.$i18n.locale === "ar"
          ? "الكراسي"
          : "Chairs",
           meta: [
        {
          hid:this.$i18n.locale === "ar"
          ? "الكراسي"
          : "Chairs",
          name: this.$i18n.locale === "ar"
          ? "الكراسي"
          : "Chairs",
          content: this.$i18n.locale === "ar"
          ? "الكراسي"
          : "Chairs",
        },
      ],
     
    };
  },
  head() {
    return {
      title: "الكراسي",
      meta: [
        {
          hid: "الكراسي",
          name: "الكراسي",
          content: "الكراسي",
        },
      ],
    };
  },
  components: {
    // Invitations,
  },
   computed: {
   ...mapGetters({
      invitations: "invitations",
      chairs: "chairs",
      categoriesInvit: "categoriesInvit",
      total_page: "total_page",
    }),
     filterByName() {   
          if (this.searchName != '') { 
            return this.chairs.filter((item) => {
            return this.searchName
                       .toLowerCase()
                       .split(" ")
                       .every((v) => item.invitation.full_name.toLowerCase().includes(v));
                })   
      }
      if (this.selectTypeChair != '') {
        return this.chairs.filter((item) => {
          return this.selectTypeChair
                       .toLowerCase()
                       .split(" ")
                       .every((v) => item.grade == v);
                }) 
      }
      if (this.selectStatusChair != '') {
        return this.chairs.filter((item) => {
          return this.selectStatusChair
                       .toLowerCase()
                       .split(" ")
                       .every((v) => item.status == v);
                }) 
      }
      return this.chairs;
        },
  },
   methods: {
      getPage(i) {
          this.page = i;
            localStorage.setItem("page", i);
            this.fetchChairs(i);
    },
      Next(){
         if(localStorage.getItem("page") < this.total_page){
            this.page++;
            localStorage.setItem("page", this.page);
            this.fetchChairs(this.page);
           }
           
        },
       Previous(){
           if(localStorage.getItem("page") > 1){
            this.page--;
            localStorage.setItem("page",this.page);
            this.fetchChairs(this.page);
           }

        },
     clearing(){
        this.searchName = '' ;
        this.selectTypeChair = '';
        this.selectStatusChair = '';
     },
    onSelect2( option) {
      this.formData.invitation_id = option.id;
    },
    ...mapActions(["fetchinvitations","fetchChairs","fetchCategoriesInvit"]),
    showItem(item){
      var self = this;
      self.show = true;
      self.formData.id = item.id;
      self.formData.class = item.class;
      self.formData.grade = item.grade;
      self.formData.status = item.status;
      self.formData.invitation_id = item.invitation_id;
      self.formData.created_at = new Date();
      self.formData.updated_at = new Date();
    },
    showPut(item){
      var self = this;
      self.put = true;
      self.name_invited = item.invitation.full_name;
      self.formData.id = item.id;
      self.formData.class = item.class;
      self.formData.grade = item.grade;
      self.formData.status = item.status;
      self.formData.invitation_id = item.invitation_id;
      self.formData.created_at = new Date();
      self.formData.updated_at = new Date();
    },
    edit(){
      var self = this;
      self.load = true;
        self.$axios
            .put(`chairs/${self.formData.id}`, self.formData, {
            })
            .then(function(res) {
              
              if (res.status == 201 || res.status == 200) { 
                self.invit = false;
                self.load = false;
                self.fetchChairs();
              } else {
              self.invit = true;
              self.load = false;
              }
            })
            .catch(function(error) {
              if (error.response) {
                self.load = false;
                alert(error.response);
                console.log(error.response);
              }
            });
      
    },
    delet(id){
      var self = this;
      self.load2 = id;
       self.$axios
        .delete(`chairs/${id}`)
        .then(function() {
            self.fetchChairs();
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
    this.fetchinvitations(this.page);
    this.fetchChairs(this.page);
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
