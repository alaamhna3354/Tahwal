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
              <div class="overlay" v-if="invit || show" @click="invit= false;show=false"></div>
              <form  class="invitations" v-if="show" style="height:460px;overflow: hidden;">
                <div class="head">
                  <h4>{{ $t("review") }}</h4>
                  <i class="fa-solid fa-circle-xmark fa-lg" @click="show = false"></i>
                </div>
                <div class="body">
                  <div class="row">
                     <div class="col-12 title">
                       <h4>{{ $t("data") }}</h4>
                    </div>
                    <table>
                      <tr>
                        <th>{{ $t("Name") }}</th>
                        <td>{{formData.full_name}}</td>
                      </tr>
                      <tr>
                        <th>{{ $t("Whatsapp_Number") }}</th>
                        <td>{{formData.whatsapp_num}}</td>
                      </tr>
                       <tr>
                        <th>{{ $t("email") }}</th>
                        <td>{{formData.email}}</td>
                      </tr>
                      <tr>
                        <th>{{ $t("entity") }}</th>
                        <td>{{formData.authority}}</td>
                      </tr>
                      <tr>
                        <th>{{ $t("position") }}</th>
                        <td>{{formData.position}}</td>
                      </tr>
                    </table>
                  </div>
                </div>
            </form>
            <form id="invitations" class="invitations" v-if="invit">
                <div class="head">
                  <h4 v-if="put != false">{{ $t("Edit") }}</h4>
                  <h4 v-else>{{ $t("Add") }}</h4>
                  <i class="fa-solid fa-circle-xmark fa-lg" @click="invit = false"></i>
                </div>
                <div class="body">
                  <div class="row">
                    <div class="col-12">
                      <div class="alert alert-danger" role="alert" v-if="invaild">
                        {{ invaild }}
                      </div>
                    </div>
                    <div class="col-12 title">
                       <h4>{{ $t("InviteeInformation") }}</h4>
                    </div>
                   <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-6">
                      <label for="" class="mb-1">{{ $t("Title") }}</label>
                      <div>
                        <input type="radio" class="btn-check" value="معالي" v-model="formData.title.name"
                        name="options" id="option1" autocomplete="off">
                        <label class="btn btn-radio" for="option1">معالي</label>

                        <input type="radio" class="btn-check" value="سعادة" v-model="formData.title.name"
                         name="options" id="option2" autocomplete="off">
                        <label class="btn btn-radio" for="option2">سعادة</label>

                        <input type="radio" class="btn-check" value="Mr" v-model="formData.title.name"
                         name="options" id="option3" autocomplete="off">
                        <label class="btn btn-radio" for="option3">Mr</label>

                        <input type="radio" class="btn-check" value="Your Excellency" v-model="formData.title.name"
                         name="options" id="option4" autocomplete="off">
                        <label class="btn btn-radio" for="option4">Your Excellency</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                       <label for="" class="mb-1">{{ $t("Title") }} 2</label>
                        <multiselect
                          :options="options"
                          :close-on-select="true"
                          :clear-on-select="false"
                          :preserve-search="true"
                          placeholder="الرجاء الاختيار"
                          label="name"
                          track-by="name"
                          :preselect-first="true"
                          id="example"
                          @select="onSelect"
                        ></multiselect>
                    </div>
                      </div>
                   </div>
                    <div class="col-md-12 mt-3">
                      <div class="row">
                        <div class="col-md-6">
                          <label for="full_name" class="mb-1">
                            <i class="fa-regular fa-square-check"></i>
                            {{ $t("Full_Name") }}
                            </label>
                            <input type="text" class="form-control" :class="invaild != false ? 'invaild':''"
                            name="full_name" v-model="formData.full_name" @input="invaild = false" required>
                     
                        </div>
                        <div class="col-md-6">
                          <label for="email" class="mb-1">{{ $t("email") }}</label>
                          <input type="text" class="form-control"
                          name="email" v-model="formData.email" >
                        </div>
                      </div>
                   </div>
                   <div class="col-md-12 mt-3">
                      <div class="row">
                        <div class="col-md-6">
                          <label for="sec_email" class="mb-1">
                            {{ $t("emailPlus") }}
                            </label>
                            <input type="text" class="form-control"
                             name="sec_email" v-model="formData.sec_email">
                     
                        </div>
                        <div class="col-md-6">
                          <label for="authority" class="mb-1">{{ $t("entity") }}</label>
                          <input type="text" class="form-control" name="authority" v-model="formData.authority" >
                        </div>
                      </div>
                   </div>
                   <div class="col-md-12 mt-3">
                      <div class="row">
                        <div class="col-md-6">
                          <label for="phone" class="mb-1">
                            {{ $t("Whatsapp_Number") }}
                            </label>
                           <input class="form-control" type="text" id="phone" 
                           name="phone" v-model="formData.whatsapp_num" 
                            placeholder="+966 _ _ _ _ _ _ _ _ _"  />
                            <!-- pattern="[0-9]{3}-[0-9]{9}" -->
                        </div>
                        <div class="col-md-6">
                          <label for="position" class="mb-1">{{ $t("position") }}</label>
                          <input type="text" class="form-control" name="position" v-model="formData.position" >
                        </div>
                      </div>
                   </div>
                   <div class="col-md-12 mt-3">
                      <div class="row">
                        <div class="col-md-6">
                          <label for="" class="mb-1">
                            {{ $t("Class") }}
                            </label>
                           <multiselect
                          v-model="formData.category.name"
                          :options="categoriesInvit"
                          :close-on-select="true"
                          :clear-on-select="false"
                          :preserve-search="false"
                          placeholder="الرجاء الاختيار"
                          label="name"
                          track-by="name"
                          :preselect-first="true"
                          id="example"
                          @select="onSelect2"
                        ></multiselect>
                     
                        </div>
                        <div class="col-md-6">
                          <label for="lang" class="mb-1">{{ $t("Invitation_Language") }}</label>
                          <div>
                            <input type="radio" class="btn-check" value="Ar" v-model="formData.lang"
                            name="lang" id="option5" autocomplete="off" checked>
                            <label class="btn btn-radio" for="option5">{{ $t("Arabic") }}</label>

                            <input type="radio" class="btn-check" value="En" v-model="formData.lang" 
                            name="lang" id="option6" autocomplete="off">
                            <label class="btn btn-radio" for="option6">{{ $t("English") }}</label>
                          </div>
                        </div>
                      </div>
                   </div>
                    <div class="col-md-12 mt-3">
                      <div class="row">
                        <div class="col-md-6">
                          <label for="" class="mb-1">
                            {{ $t("Send_Email") }}
                            </label>
                           <div>
                            <input type="radio" class="btn-check" name="options3" id="option7" autocomplete="off" :checked="formData.is_whatsapp == 0"
                            value="0" v-model="formData.is_whatsapp">
                            <label class="btn btn-radio yes" for="option7">{{ $t("yes") }}</label>

                            <input type="radio" class="btn-check" name="options3" id="option8" autocomplete="off" :checked="formData.is_whatsapp == 1"
                            value="1" v-model="formData.is_whatsapp">
                            <label class="btn btn-radio no" for="option8">{{ $t("No") }}</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label for="" class="mb-1">{{ $t("Send_Whatsapp") }}</label>
                          <div>
                            <input type="radio" class="btn-check" name="options4" id="option9" autocomplete="off" :checked="formData.is_whatsapp == 1"
                            value="1" v-model="formData.is_whatsapp">
                            <label class="btn btn-radio yes" for="option9">{{ $t("yes") }}</label>

                            <input type="radio" class="btn-check" name="options4" id="option10" autocomplete="off" :checked="formData.is_whatsapp == 0"
                            value="0" v-model="formData.is_whatsapp">
                            <label class="btn btn-radio no" for="option10">{{ $t("No") }}</label>
                          </div>
                        </div>
                      </div>
                   </div>
                   <div class="col-md-12 mt-3">
                      <div class="row">
                        <div class="col-md-6">
                          <label for="is_attendant" class="mb-1">{{ $t("Attendance_confirmation") }}</label>
                          <div>
                            <input type="radio" class="btn-check" value="1" v-model="formData.is_attendant"
                            name="is_attendant" id="option11" autocomplete="off" :checked="formData.is_attendant == 1">
                            <label class="btn btn-radio yes" for="option11">{{ $t("yes") }}</label>

                            <input type="radio" class="btn-check" value="0" v-model="formData.is_attendant"
                            name="is_attendant" id="option12" autocomplete="off" :checked="formData.is_attendant == 0">
                            <label class="btn btn-radio no" for="option12">{{ $t("No") }}</label>
                          </div>
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
                      <button v-if="put != false" class="btn btn-send" @click.prevent="edit">{{ $t("Edit") }}</button>
                      <button v-else class="btn btn-send" @click.prevent="add">{{ $t("send") }}</button>
                      </div>
                   </div>
                  </div>
                </div>
            </form>
          </div>
          <div class="Excel">
            <span>
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
              {{ $t("Excel") }}
              </span>
          </div>
        </div>
        <div class="col-12 control">
          <div class="row">
            <div class="col-md-6">
              <h5>{{ $t("Search") }}</h5>
            </div>
             <div class="col-md-6 refresh">
              <i class="fa-sharp fa-solid fa-rotate-right"></i>
              <button @click.prevent="clearing">{{$t("Empty_filter_fields")}} </button>
            </div>
            <div class="col-lg-3 col-md-6 mt-2">
              <label for="filter_name">{{ $t("Name") }}</label>
              <div class="mt-2"><input type="text" v-model="filter_name" name="filter_name" class="form-control"></div>
            </div>
            <div class="col-lg-3 col-md-6 mt-2">
              <label for="filter_email">{{ $t("email") }}</label>
              <div class="mt-2"><input type="text" v-model="filter_email" name="filter_email" class="form-control"></div>
            </div>
              <div class="col-lg-3 col-md-6 mt-2">
              <label for="filter_Whatsapp">{{ $t("Whatsapp_Number") }}</label>
              <div class="mt-2"><input type="text" v-model="filter_Whatsapp" name="filter_Whatsapp" class="form-control"></div>
            </div>
            <div class="col-lg-3 col-md-6 mt-2">
              <label for="filter_Attendance">{{ $t("Attendance_confirmation") }}</label>
              <div class="mt-2">
                <select name="filter_Attendance" id="" v-model="filter_Attendance">
                  <option :value="``" >{{ $t("All") }}</option>
                  <option :value="`1`">{{ $t("yes") }}</option>
                  <option :value="`0`">{{ $t("No") }}</option>
                </select>
                </div>
            </div>
            <!-- <div class="col-12">
              <button class="go" @click.prevent="filtering">{{ $t("go") }}</button>
            </div> -->
          </div>
        </div>
        <div class="col-12 list">
           <table>
              <tr>
                <th>{{ $t("m") }}</th>
                <th>{{ $t("Send_Date") }}</th>
                <th>{{ $t("Name") }}</th>
                <th>{{ $t("Whatsapp_Number") }}</th>
                <th>{{ $t("email") }}</th>
                <th>{{ $t("Attendance_confirmation") }}</th>
                <th><input type="checkbox" disabled></th>
                <th>{{ $t("Actions") }}</th>
              </tr>
              <tr v-for="(item,index) in filterByName" :key="item.id">
                <td>{{index+1}}</td>
                <td>{{item.date}}</td>
                <td>{{item.full_name}}</td>
                <td>{{item.whatsapp_num}}</td>
                <td>{{item.email}}</td>
                <td>
                  <i class="fa-solid fa-check fa-lg" v-if="item.is_attendant == 1"></i>
                  <i class="fa-solid fa-xmark fa-lg" v-else></i>
                </td>
                <td>
                  <input type="checkbox" :name="item.id">
                </td>
                <td class="action">
                  <i class="fa-solid fa-pen-to-square fa-lg" title="تحرير" @click="invit=true;showPut(item)"></i>
                  <i class="fa-solid fa-magnifying-glass fa-lg" title="استعراض" @click="showItem(item)"></i>
                  <div v-if="load2 == item.id" class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <i v-else class="fa-solid fa-xmark fa-lg" title="حذف" @click="delet(item.id)"></i>
                  <i class="fa-solid fa-print fa-lg" title="طباعة"></i>
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
  name: "profile",
  data() {
    return {   
      current:1, 
      page: window.localStorage.getItem("page") || Number(1),
      filter_name: '',
      filter_email: '',
      filter_Whatsapp: '',
      filter_Attendance: '',
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
      formData:{
        "id": null,
        "full_name": "",
        "whatsapp_num": null,
        "is_whatsapp": 1 ,
        "email": "",
        "sec_email": "",
        "authority": "",
        "position": "",
        "is_attendant": 1,
        "req_status": "1",
        "is_internal": 1,
        "is_confirmed": '0',
        "lang": "Ar",
        "date": "",
        "title_id": 2,
        "category_id": 2,
        "chair_id": 2,
        "created_at": "",
        "updated_at":"",
        "chair": {
            "id": 2,
            "class": "",
            "status": 1,
            "created_at": null,
            "updated_at": null
        },
        "category": {
            "id": 2,
            "name": "",
            "color": "",
            "created_at": "",
            "updated_at": ""
        },
        "title": {
            "id": null,
            "name": "",
            "lang": "Ar",
            "created_at": null,
            "updated_at": null
        }
    }
    };
  },
  head() {
    return {
      title: "ارسال الدعوات",
      meta: [
        {
          hid: "ارسال الدعوات",
          name: "ارسال الدعوات",
          content: "ارسال الدعوات",
        },
      ],
    };
  },
  components: {
    // Invitations,
  },
   computed: {
   ...mapGetters({
      total_page: "total_page",
      invitations: "invitations",
      categoriesInvit: "categoriesInvit",
    }),
         filterByName() {   
          if (this.filter_name != '') { 
            return this.invitations.filter((item) => {
            return this.filter_name
                       .toLowerCase()
                       .split(" ")
                       .every((v) => item.full_name.toLowerCase().includes(v));
                })   
      }
      if (this.filter_email != '') {
          return this.invitations.filter((item) => {
          return this.filter_email
                       .toLowerCase()
                       .split(" ")
                       .every((v) => item.email.toLowerCase().includes(v));
                })   
      }
      if (this.filter_Whatsapp != '') {
        return this.invitations.filter((item) => {
          return this.filter_Whatsapp
                       .toLowerCase()
                       .split(" ")
                       .every((v) => item.whatsapp_num == v);
                }) 
      }
      if (this.filter_Attendance != '') {
        return this.invitations.filter((item) => {
          return this.filter_Attendance
                       .toLowerCase()
                       .split(" ")
                       .every((v) => item.is_attendant == v);
                }) 

      }
      return this.invitations;
        },
    //     filteredData() {
    //   let this = this;
    // let res = this.invitations
    //   if (this.searchName != '') { 
    //    this.invitations.filter(item => item.full_name.toLowerCase().includes(this.searchName.toLowerCase()));
    //   }
    //   if (this.searchEmail != '') {
    //      this.invitations.filter(item => item.email.toLowerCase().includes(this.searchEmail.toLowerCase()));
    //   }
    //   if (this.searchPhone != '') {
    //     this.invitations.filter(item => item.whatsapp_num == this.searchPhone);
    //   }
    //   if (this.searchSelect != '') {
    //      this.invitations.filter(item => item.is_attendant === this.searchSelect);
    //   }
    //  return res 
    // },
  },
   methods: {
        getPage(i) {
          this.page = i;
            localStorage.setItem("page", i);
            this.fetchinvitations(i);
    },
      Next(){
         if(localStorage.getItem("page") < this.total_page){
            this.page++;
            localStorage.setItem("page", this.page);
            this.fetchinvitations(this.page);
           }
           
        },
       Previous(){
           if(localStorage.getItem("page") > 1){
            this.page--;
            localStorage.setItem("page",this.page);
            this.fetchinvitations(this.page);
           }

        },
     clearing(){
        this.filter_name = '' ;
        this.filter_email = '';
        this.filter_Whatsapp = '';
        this.filter_Attendance = '';
     },
    onSelect(option, id) {
      console.log(option, id);
    },
    onSelect2(option, id) {
      this.formData.category.id = id;
      this.formData.category.name = option;
      console.log(this.formData);
    },
    ...mapActions(["fetchinvitations","fetchCategoriesInvit"]),
     convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth()+1).toString();
  var dd  = date.getDate().toString();

  var mmChars = mm.split('');
  var ddChars = dd.split('');

  return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  
},
   add(){
      var self = this;
      self.load = true;
      self.formData.date = self.convertDate(new Date());
      self.formData.created_at = new Date();
      self.formData.updated_at = new Date();
      self.formData.category.created_at = new Date();
      self.formData.category.updated_at = new Date();

    if (document.getElementById('invitations').checkValidity()) {
        self.$axios
            .post(`invitations`, self.formData, {
            })
            .then(function(res) {
              
              if (res.status == 201 || res.status == 200) { 
                self.invit = false;
                self.load = false;
                self.fetchinvitations();
              } else {
              self.invit = true;
              self.load = false;

              }
            })
            .catch(function(error) {
              if (error.response) {
                self.load = false;
                self.invaild = error.response.data.message;
                 setTimeout(() => {
                  self.invaild = false;
                }, 5000);
                console.log(error.response);
              }
            });
      } else {
        self.invaild = "الرجاء تعبئة جميع الحقول المطلوبة";
        setTimeout(() => {
          self.invaild = false;
        }, 5000);
        self.load = false;
      }
      
    },
    showItem(item){
      var self = this;
      self.show = true;
      self.formData.id = item.id;
      self.formData.full_name = item.full_name;
      self.formData.whatsapp_num = item.whatsapp_num;
      self.formData.email = item.email;
      self.formData.sec_email = item.sec_email;
      self.formData.authority = item.authority;
      self.formData.position = item.position;
      self.formData.is_whatsapp = item.is_whatsapp;
      self.formData.is_attendant = item.is_attendant;
      self.formData.lang = item.lang;
      self.formData.title.name = item.title.name;
    },
    showPut(item){
      var self = this;
      self.put = true;
      self.formData.id = item.id;
      self.formData.full_name = item.full_name;
      self.formData.whatsapp_num = item.whatsapp_num;
      self.formData.email = item.email;
      self.formData.sec_email = item.sec_email;
      self.formData.authority = item.authority;
      self.formData.position = item.position;
      self.formData.is_whatsapp = item.is_whatsapp;
      self.formData.is_attendant = item.is_attendant;
      self.formData.lang = item.lang;
      self.formData.title.name = item.title.name;
    },
    edit(){
      var self = this;
      self.load = true;
      self.formData.date = self.convertDate(new Date());
      self.formData.created_at = new Date();
      self.formData.updated_at = new Date();
      self.formData.category.created_at = new Date();
      self.formData.category.updated_at = new Date();
     
      
    if (document.getElementById('invitations').checkValidity()) {
        self.$axios
            .put(`invitations/${self.formData.id}`, self.formData, {
            })
            .then(function(res) {
              
              if (res.status == 201 || res.status == 200) { 
                self.invit = false;
                self.load = false;
                self.fetchinvitations();
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
        .delete(`invitations/${id}`)
        .then(function() {
            self.fetchinvitations();
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
    this.fetchCategoriesInvit(this.page)
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
.alert{
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
}
</style>
