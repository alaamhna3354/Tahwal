<template>
  <div class="conatin mt-3">
    <div class="alert alert-success" role="alert" v-if="success">
      {{ $t("successfully_registered") }}
    </div>
    <div class="alert alert-danger" role="alert" v-if="danger">
      {{ $t("All_fields_must_be_entered") }}
    </div>
    <div class="row">
      <div class="col-12">
        <h5 class="title">{{ $t("TheHealthSector") }}</h5>
      </div>
      <div class="col-12">
        <p>{{ $t("helloAll") }}</p>
      </div>
      <hr>
      <div class="col-12 mb-3">
        <div class="">
          <span>{{ $t("date") }}</span>
          <span style="margin-inline-start: 70px;">{{ $t("dateinfo") }}</span>
        </div>
          <div class="mt-3">
          <span>{{ $t("time") }}</span>
          <span style="margin-inline-start: 70px;">{{ $t("timeinfo") }}</span>
        </div>
      </div>
      <hr>
      <div class="col-12 mb-3">
        <div class="">
          <span>{{ $t("Location") }}</span>
          <span style="margin-inline-start: 70px;">{{ $t("Locationinfo") }}</span>
        </div>
         <form id="invitations">
           <h3 class="mb-5">{{ $t("Register_now") }}</h3>
            <div class="col-12 mb-3">
               <i class="fa-regular fa-square-check"></i>
              <label for="">{{ $t("Title") }}</label>
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
            <div class="col-12 mb-3">
               <i class="fa-regular fa-square-check"></i>
                <label for="">{{ $t("Full_Name") }}</label>
               <div>
                  <input required v-model="formData.full_name" type="text" name="Full_Name" :placeholder="$t('Full_Name')">
               </div>
            </div>
            <div class="col-12 mb-3">
               <i class="fa-regular fa-square-check"></i>
                <label for="">{{ $t("phone_Number") }}</label>
               <div>
                  <input required v-model="formData.whatsapp_num" type="text" name="whatsapp_num" :placeholder="$t('phone_Number')">
               </div>
            </div>
             <div class="col-12 mb-3">
               <i class="fa-regular fa-square-check"></i>
                <label for="">{{ $t("email") }}</label>
               <div>
                  <input required v-model="formData.email" type="text" name="whatsaemailpp_num" :placeholder="$t('email')">
               </div>
            </div>
            <div class="col-12 mb-3">
               <i class="fa-regular fa-square-check"></i>
                <label for="">{{ $t("entity") }}</label>
               <div>
                  <input required v-model="formData.authority" type="text" name="entity" :placeholder="$t('entity')">
               </div>
            </div>
            <div class="col-12 mb-3">
               <i class="fa-regular fa-square-check"></i>
                <label for="">{{ $t("position") }}</label>
               <div>
                  <input required v-model="formData.position" type="text" name="entity" :placeholder="$t('position')">
               </div>
            </div>
            <hr class="mt-5 mb-5">
             <div class="col-md-12 mt-3">
                      <button v-if="load != false" class="btn" >
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </button>
                      <div v-else>
                      <button class="btn" @click.prevent="add">{{ $t("send") }}</button>
                      </div>
              </div>
         </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
export default {
  layout: "app",
  name: "profile",
  data() {
    return {   
      load:false, 
      success:false, 
      danger:false, 
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
        "is_internal": 0,
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
      title:
        this.$i18n.locale === "ar"
          ? "الجلسة الحوارية لتدشين برنامج تحول القطاع الصحي"
          : "The Health Sector Transformation Program Session",
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "ar" ? "rtl" : "ltr",
      },
    };
  },
  components: {
  },
   computed: {
  ...mapGetters({
      categoriesInvit: "categoriesInvit",
    }),
       
    
  },
   methods: {
     ...mapActions(["fetchCategoriesInvit"]),
    onSelect2(option, id) {
      this.formData.category.id = id;
      this.formData.category.name = option;
      console.log(this.formData);
    },
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
                self.load = false;
                self.success = true;
                setTimeout(() => {
                self.success = false;
                }, 3000);
              } else {
              self.load = false;
              self.danger = true;
                setTimeout(() => {
                self.danger = false;
                }, 3000);
              }
            })
            .catch(function(error) {
              if (error.response) {
                self.load = false;
                self.danger = true;
                setTimeout(() => {
                self.danger = false;
                }, 3000);
                console.log(error.response);
              }
            });
      } else {
        self.invaild = true;
        self.load = false;
      }
      
    },
 
  },

  created() {
    this.fetchCategoriesInvit(1);
 
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
// ************************************************
.conatin{
  width: 60%;
    @media (max-width: 776px) {
          width: 95%;
    }
  margin: auto;
}
.title{
  text-align: center;
  background-color: #6666cc;
  color: #fff;
  padding: 15px;
  text-transform: uppercase;
}
form{
  margin-top: 20px;
  padding: 70px 20px;
  box-shadow: 0px 1px 4px 3px rgba(0, 0, 0, 0.071);
  background-color: #fff;
  h3{
    color: #6666cc;
    text-align: center;
  }
  input{
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 5px;
    &:focus{
      outline: none;
    }
    &::placeholder{
      color: #ccc;
    }
  }
  .btn{
    background-color: #6666cc;
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 10px;
    transition: .5s ease-in-out;
    &:hover{
      margin-inline-start: 20px;
    }
  }
}
.alert{
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
