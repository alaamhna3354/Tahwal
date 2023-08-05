import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.component( "aos ", AOS );
AOS.init({
  duration: 2000,
  once: false,
  offset: 200,
});