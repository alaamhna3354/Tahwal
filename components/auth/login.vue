<template>
  <div id="login">
   <div class="container">
        <form class="row" @submit.prevent="handleSubmit">
            <div class="col-12">
                <label for=""> {{ $t("Username") }}</label>
            </div>
            <div class="col-12 mb-3">
                <input type="text" name="email"  v-model="form.email">
                 <span
                      class="alert alert-danger mb-0 mt-2 py-2"
                      v-if="authErrors.Email != ''"
                    >
                      {{ authErrors.Email }}
                    </span>
            </div>
            <div class="col-12">
                <label for=""> {{ $t("Password") }}</label>
            </div>
            <div class="col-12 mb-3">
                <input type="text" name="password" v-model="form.password">
                <span
                      class="alert alert-danger mb-0 mt-2 py-2"
                      v-if="authErrors.Password != ''"
                    >
                      {{ authErrors.Password }}
                    </span>
            </div>
            <div class="col-12 mb-3">
                <input type="checkbox">
                <label for="">{{ $t("rememberme") }}</label>
            </div>
            <div class="col-12 mb-3">
                <button>{{ $t("Login") }}</button>
            </div>
            <div class="col-12 text-center">
                <NuxtLink to="/registrationPass">{{ $t("Forgot_your_password") }}</NuxtLink>
                <NuxtLink to="/registrationUser">{{ $t("Forgot_your_username") }}</NuxtLink>
            </div>
        </form>
   </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "login",
    data() {
    return {
    form: {
        email: "",
        password: "",
    },
    };
  },
      methods: {
        //   self.$store.commit("setLoading", false);
    ...mapActions({ userLogin: "auth/userLogin" }),
    handleSubmit() {
      this.userLogin(this.form);
      this.$store.commit("setLoading", true);
      setTimeout(() => {
           this.$store.commit("setLoading", false);
      }, 2000);
    },
   
  },
   computed: {
    ...mapGetters({
      authErrors: "auth/errors",
      isUserLogged: "auth/logged",
    }),
   
  },
  watch: {
    isUserLogged(newVal) {
      if (newVal) {
        this.$router.push("/invitations");
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
