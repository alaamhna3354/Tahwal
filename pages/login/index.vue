<template>
  <div>
    <Login />
     <!-- <div style="opacity: 0;
position: absolute;
z-index: -1;">
        <select v-model="postsData.status" >
          <option @click="postsAction" :value="true">true</option>
          <option @click="postsAction" :value="false">false</option>
        </select>
      </div> -->
  </div>
</template>

<script>
import Login from "../../components/auth/login";
// import { mapActions, mapGetters} from "vuex";
export default {
  layout: "app",
  name: "login",
    head(){
    return{
      title: this.$t("Login"),
      meta:[
        {
          hid: this.$t("Login"),
          name: this.$t("Login"),
          content: this.$t("Login")
        }
      ]
    }
  },
   data() {
    return {
      // postsData:{
      //   status:Boolean
      // },
    }
   },
  components: {
    Login
  },
   computed: {
  //  ...mapGetters({
  //     posts: "posts",
  //   }),
   },
  methods: {
    // ...mapActions(["fetchPosts"]),
      // async postsAction() {
      //       await this.$axios
      //           .post(`http://localhost:3001/posts`,this.postsData)
      //           .then((res) => {
      //              this.$store.commit("setPosts", res.data);
      //               // console.log(this.posts);

      //           })
      //           .catch(function (error) {
      //               console.error('Error fetchPosts ', error);
      //           }); 
      //   },
     },
  created() {
    // this.fetchPosts();
    // console.log(this.posts);
  },
};
</script>
<style scoped></style>
