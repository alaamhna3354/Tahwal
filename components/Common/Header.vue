<template>
  <div class="Header">
    <div class="top-header" v-if="isUserLogged">
      <div class="hello">
        {{ $t("Hello") }}
        {{fullName}}
      </div>
      <div>
        <NuxtLink to="/login"
          ><button class="logout" @click="logout">{{ $t("logout") }}</button></NuxtLink
        >
      </div>
    </div>
    <div class="bottom-header">
      <div class="content">
         <NuxtLink to="/invitations/external"
          >
          <img
            v-if="$i18n.locale === 'ar'"
            src="https://hstp-events.com/templates/jl_balder_pro/custom/images/logo.png"
            style="max-height: 90px"
            alt="Gantry 5"
          />
          <img
            v-else
            src="https://hstp-events.com/templates/jl_balder_pro/custom/images/logo-en.png"
            style="max-height: 90px"
            alt="Gantry 5"
          />
        </NuxtLink>
        <div class="nav" :class="active ? 'active' : ''" v-if="isUserLogged">
          <div class="dropdown">
            <button class="dropbtn">
              <NuxtLink to="">
                <i class="fa-regular fa-address-card fa-lg"></i>
                {{$t('Dashboard')}}
                <i class="fa-solid fa-chevron-down first"></i>
                <i class="fa-solid fa-xmark seconde"></i>
              </NuxtLink>
            </button>
            <div class="dropdown-content">
              <NuxtLink @click="getINvtaions" to="/invitations">{{$t('Send_invitations')}}</NuxtLink>
              <NuxtLink @click="getINvtaions" to="/invitations/general">{{$t('Genral_Invitations')}}</NuxtLink>
              <NuxtLink @click="getINvtaions" to="/surename">{{$t('Nicknames')}}</NuxtLink>
              <NuxtLink @click="getINvtaions" to="/categories">{{$t('categories')}}</NuxtLink>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <NuxtLink to="">
                {{$t('Concert_day')}}
                <i class="fa-solid fa-chevron-down first"></i>
                <i class="fa-solid fa-xmark seconde"></i>
              </NuxtLink>
            </button>
            <div class="dropdown-content">
              <NuxtLink @click="getINvtaions" to="/invitations/all">{{$t('All_invitations')}}</NuxtLink>
              <NuxtLink to="/chairs">{{$t('seats')}}</NuxtLink>
            </div>
          </div>
          <NuxtLink to="/qrcode" class="link">qrcode</NuxtLink>
          <div class="logsm">
            <div class="hello mb-2 mt-3">
              {{ $t("Hello") }}
            </div>
            <div>
              <NuxtLink to="/login"
                ><button class="logout" @click="logout">{{ $t("logout") }}</button></NuxtLink
              >
            </div>
          </div>
        </div>
        <button class="lang-btn" @click="changeLanuage()">
          <i class="fa fa-globe"></i>
          {{ $i18n.locale === "ar" ? "عربي" : "English" }}
        </button>
        <i class="fa fa-fw fa-bars fa-lg" @click="active = !active"></i>
        <div
          class="overlay"
          :class="active ? 'active' : ''"
          @click="HideSide()"
        ></div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters ,mapMutations,mapActions} from "vuex";
import VPlaceload from "../Loader/VPlaceload";
export default {
  name: "Header",
  data() {
    return {
      page: window.localStorage.getItem("page") || Number(1),
      active: false,
      fullName: localStorage.getItem("name")
    };
  },
   components: {
    VPlaceload,
  },
  computed: {
    hasSlash() {
      // console.log("route", this.$route.path.split("/"));
      return this.$route.path.split("/")[1].length > 1;
    },
    ...mapState({
      locale: "locale",
      locales: "locales",
    }),
    ...mapGetters({ isUserLogged: "auth/logged" }),
  },
  methods: {
    ...mapActions(["fetchinvitations","fetchCategoriesInvit"]),
    getINvtaions(){
    this.fetchinvitations(this.page);
    this.fetchCategoriesInvit(this.page);
    },
    sideBar() {
      this.active = true;
    },
    HideSide() {
      this.active = false;
    },
    async changeLanuage() {
      await new Promise((resolve) => setTimeout(resolve, 500));
      let lang =
        this.locale.lang == "ar"
          ? this.locales[1].value
          : this.locales[0].value;
      this.$store.commit("SET_LANG", { lang });
      this.$i18n.locale = lang;
    },
    ...mapMutations({
      logout: "auth/logoutUser",
    }),
  },
  mounted() {
    //   $( ".dropdown" )
    // .mouseover(function() {
    //   $( this ).attr('open', '');
    // })
    // .mouseout(function() {
    //   $( this ).removeAttr('open');
    // });
  },
  created() {},
};
</script>

<style lang="scss"></style>
