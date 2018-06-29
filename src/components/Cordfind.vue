<template>
  <div class="hello">
     <div class="top">
       <img src="../assets/home/top@2x.png" alt="">
     </div>
     <div class="bottom"> 

     </div>
   
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../public/style/_common.scss";
</style>

<style lang="scss" scoped>

.hello {
  width: 7.5rem;
  margin:auto;
  .top{
    width:7.5rem;
    height:5.55rem;
    &>img{
       width:100%;
       height: auto;
    }
  }
  .bottom{
    width:7.5rem;
    height:9.99rem;
    background:url("../assets/home/bottom@2x.png") no-repeat center / cover;
  }
}
</style>


<script>
export default {
  name: "Cordfind",
  data() {
    return {
    };
  },
  mounted() {

  }
};
</script>


