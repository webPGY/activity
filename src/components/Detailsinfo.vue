<template>
<div class="box">
    <div class="detailsinfo">
    <div class="flexbox">
      <span class="primary">钱包地址：</span>
      <div class="address">{{detailsinfo[0]}}</div>
    </div>
    <div class="flexbox">
      <span class="primary">共需返还：</span>
      <div class="money">{{detailsinfo[2]}}UB</div>
    </div>
    <div class="flexbox">
      <span class="primary">交易ID：</span>
      <div class="copy" v-cloak>
        <p id="add" class="btn" v-if="detailsinfo[1]&&detailsinfo[1]!=='willback'" @click="gotoexplorer(detailsinfo[1])">
          {{detailsinfo[1]}}
        </p>
        <p id="add"  v-if="detailsinfo[1]&&detailsinfo[1]==='willback'">将于世界杯结束后一个工作日返还</p>
         <span v-if="detailsinfo[1]&&detailsinfo[1]!=='willback'" class="clickcopy btn tag-read"   data-clipboard-action="copy" data-clipboard-target="#add" @click="copyLink">复制</span>
      </div>
    </div>


  </div>
   <mu-snackbar :color="normal.color" :position="normal.position" :open.sync="normal.open">
         <mu-icon left :value="icon"></mu-icon> 
        {{normal.message}}
    </mu-snackbar>
</div>


</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../public/style/_common.scss";
</style>

<style lang="scss" scoped>
.box{
    width: 7.5rem;
  min-height: 100vh;
  margin: auto;
    background: #181829;
  // padding-top: 0.3rem;
  .detailsinfo {
   padding: 0.3rem .26rem 0 .26rem;

  .flexbox {
    display: flex;
    padding:.24rem 0;
    position: relative;
    font-family: HiraginoSansGB-W3;
    &::after{
          display: block;
          position: absolute;
          content:'';
          height: .02rem;
          width: 100%;
          left: 0;
          bottom: 0;
          background: url("../assets/xiazhu/td_bd.png") no-repeat center/cover;
    }
    & > span.primary {
      display: inline-block;
      width: 1.5rem;
      font-size: 0.3rem;
      color: rgba(255, 255, 255, 1);
    }
    & > div {
      flex: 1;
      font-size: 0.24rem;
      color: #fff;
      #add {
        color: #4babff;
        line-height: 1.3;
        word-break:break-all;
      }
      .clickcopy {
        width: 1.44rem;
        height: 0.56rem;
        display: inline-block;
        background: url("../assets/welcomebets/copy.png") no-repeat center /
          cover;
        text-align: center;
        line-height: 0.56rem;
        margin-top: 0.36rem;
      }
    }
  }
}
}
</style>


<script>
export default {
  name: "Detailsinfo",
  data() {
    return {
      copyBtn: null, //存储初始化复制按钮事件
      normal: {
        position: "top",
        color: "success",
        message: "复制成功",
        open: false,
        timeout: 2000
      },
      openSimple: false,
      detailsinfo:''
    };
  },
  computed: {
    icon() {
      return {
        success: "check_circle",
        info: "info",
        warning: "priority_high",
        error: "warning"
      }[this.normal.color];
    }
  },
  methods: {
    gotoexplorer(url){
      url="https://block.bitbank.com/tx/ubtc/"+url
      window.open(url,"_blank")
    },
    successbox() {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
    },
    copyLink() {
      /*这是点击按钮触发的点击事件，关于clipboard的使用就不再赘述了，上面介绍时已经讲述过，并且使用方法在官方文档上有*/
      let _this = this;
      let clipboard = new this.clipboard(".btn");
      clipboard.on("success", function() {
        _this.successbox();
      });
      clipboard.on("error", function() {});
    },
    openSimpleDialog() {
      this.openSimple = true;
    },
    closeSimpleDialog() {
      this.openSimple = false;
    }
  },
  created(){
    let urlinfo=this.$route.params.id
    let arr=urlinfo.split('_')
    this.detailsinfo=arr
    this.$forceUpdate();
  },
  mounted() {}
};
</script>


