<template>
  <div v-if="blog == 1">
    <Loading/>
    <Header />
    <Nuxt />
    <Footer />
  </div>
  <div v-else class="not-active" id="blocked">
    <h1 class="text-center mt-5">This site is blocked by the developer</h1>
    <div class="d-flex justify-content-center">
      <img src="../public/assets/images/blocked.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Loading from "~/components/Loader/loading.vue";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import {mapGetters,mapState} from "vuex";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    Loading
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
   data() {
    return {
     
    }
   },
computed: {
 ...mapState({
      blog: "blog",
    }),
    ...mapGetters({ 
      isUserLogged: "auth/logged",
      }),

  },
  methods: {
    async  fetch() {
           await this.$axios
                .get(`/boolean`)
                .then((response) => {
                   this.$store.commit("setblog", response.data.value);
                    // console.log("blog:",this.blog);
                    
                })
                .catch(function (error) {
                    console.warn('------ Error ------: ', error);
                });
        },
  },
  mounted(){
    setTimeout(() => {
      $('#blocked').removeClass('not-active');
    }, 2500);
     if(localStorage.getItem("User") != null){
     this.$store.commit("auth/SET_isLogged", true);
    //  console.log(this.isUserLogged);
    //  console.log(localStorage.getItem("User"));
     }
     else{
       if(this.$route.path == '/invitations/external'){
        this.$store.commit("auth/SET_isLogged", false);
       }
       else{
        this.$store.commit("auth/SET_isLogged", false);
        //  console.log(this.isUserLogged);
        this.$router.push("/login");
       }
    

     }
  },
  created(){
    this.fetch();
    this.$axios.setHeader('Authorization', `Bearer ${localStorage.getItem('UserToken')}`);
  }
};
</script>
<style scoped>
.not-active{
  display: none;
}
</style>
