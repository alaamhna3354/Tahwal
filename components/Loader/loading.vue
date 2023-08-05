<template>
   <div id="preloader" v-if="loading">
   <div class='center'>
  <div class='circle'><div></div></div>
  <div class='circle'><div></div></div>
  <div class='circle'><div></div></div>
  <div class='circle'><div></div></div>
  <div class='circle'><div></div></div>
  <div class='circle'><div></div></div>
  <div class='circle'><div></div></div>
</div>
<img src="https://hstp-events.com/images/favi.png" alt="">
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  data: () => ({
  }),
  
  methods: {
      stopLoading() {
        const self = this;
        $( document ).ready(function() {
        self.$store.commit("setLoading", false);
    });
    },
  },
  computed: {
    ...mapState(["loading"]),
  },
  created() {
     this.stopLoading();
  },
};
</script>
<style lang="scss" scoped>

#preloader {
  position: fixed;
  z-index: 99999;
  width: 100%;
  display: grid;
  place-items: center;
  margin:0;
  padding:0;
  min-height: 100vh;
  overflow: hidden;
  background: #f0f0f0;
}
#preloader .center {
  position: relative;
/*   background-color: white; */
  animation:spin 7s infinite linear;
  margin-bottom: -160px;
}

#preloader .circle > div {
  --size: 8px;
  --radius: 40px;
  position: absolute;
  top: calc(var(--size)/2);
  left: calc(var(--size)/2);
  width: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #6666cc;
  transform: translate(0px,var(--radius));
}


#preloader .circle {
  opacity: 0;
  animation: fade-spin 2.6s ease-in-out infinite;
  animation-delay: 0.5s;
}

@keyframes spin {
   to {
      transform: rotate(360deg);
  }
}
@keyframes fade-spin {
  0% {
    
  }
  25% {
    opacity: 0;
    transform: rotate(0deg);
  }
  50% {
    opacity: 1;
  }
  75% { 
    opacity: 1;
    // transform: rotate(180deg);
  }
  90% {
    opacity: 0;
  }
  100% { 
    transform: rotate(360deg); 
  }
}

@for $i from 1 through 7 {
  #preloader .circle:nth-child(#{$i}) {
   animation-delay: calc(0.12 * #{$i}s);
  }
}

</style>
