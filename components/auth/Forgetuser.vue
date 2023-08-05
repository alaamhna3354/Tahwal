<template>
  <div id="login">
   <div class="container">
          <form action="" class="row">
             <div class="col-12">
               <p>{{ $t("forgetuser") }}</p>
            </div>
            <div class="col-12">
                <label for=""> {{ $t("emailAdress") }}</label>
            </div>
            <div class="col-12 mb-3">
                <input type="text">
            </div>
            <div class="col-12 mb-3">
                <button>{{ $t("send") }}</button>
            </div>
           
        </form>
   </div>
  </div>
</template>

<script>
export default {
    name: "Forgetuser",
};
</script>

<style lang="scss" scoped>

</style>
