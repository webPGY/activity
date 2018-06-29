<template>
  <div class="welcomebets">
    <p class="tips">
      请务必按以下规范向所示地址转账，否则下注无效
    </p>
    <div class="primary_box">
      <h4>转账规范:</h4>
      <p>
        <i>1.</i> 
        <span>请不要使用交易所账户或中心化钱包进行转账操作！否则系统无法返还您所下注的UBTC.</span>
      </p>
      <p>
        <i>2.</i> 
        <span>转账数量必须为单注的整数倍，单注0.1UBTC。建议使用AnyBit
   手机钱包转账，享8折，单注0.08UBTC。<br/>
   下载AnyBit: <a href="http://anybit.io" style="color:#217BDA" target="_blank">http://anybit.io</a></span>
      </p>
      <p>
        <i>3.</i> 
        <span>转账数量必须达到起投要求（最低10注），否则默认下注无效。</span>
      </p>
    </div>
    <div class="erweima_box">
      <h4>请向如下地址转账：</h4>
       <img :src="require('../assets/welcomebets/erweima/'+remarks+'.png')" alt="">
       <p id="address">{{address[Number(remarks)-1]["add"]}}</p>
       <div class="content">
         <p class="flex_between">
           <b>队名:{{address[Number(remarks)-1]["country"]}}</b>
           <b>注数:{{num}}注</b>
         </p>
         <p>
           金额：{{ubnum}}UB (AnyBit: {{anynum}}UB)
         </p>
       </div>
       <div>
         <span class="copy btn tag-read"  data-clipboard-action="copy" data-clipboard-target="#address" @click="copyLink">点击复制地址</span>
         <span class="jumpnav btn" @click="jumpnav">返回主页</span>
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
.welcomebets {
  max-width: 7.5rem;
  margin: auto;
  background: #181829;
  min-height: 100vh;
  text-align: center;
  padding-top: .56rem;
  padding-bottom:.71rem;
  font-size: 0.14rem;
  & .tips {
    font-size: 0.3rem;
    font-family: HiraginoSansGB-W6;
    color: rgba(255, 255, 255, 1);
  }
  & .primary_box{
    padding:0 .38rem 0 .46rem;
    margin:auto;
    margin-top:.41rem;
    font-family:HiraginoSansGB-W3;
    text-align:left;
    h4{
      font-size:.26rem;
      font-family:HiraginoSansGB-W6;
      color:rgba(255,255,255,1);
      line-height:1.4;
      margin:.41rem 0 .24rem 0;
    }
    p{
      display: flex;
      font-size:.22rem;
     
      font-family:HiraginoSansGB-W3;
      color:rgba(255,255,255,1);
      i{
        line-height:1.4;
      }
      span{
        flex:1;
         line-height:1.4;
      }
    }
    p+p{
      margin-top:.2rem;
    }
  }
  & .erweima_box{
    margin-top:.98rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    h4{
      font-size:.26rem;
      font-family:HiraginoSansGB-W6;
      align-self:flex-start;
      text-indent:.46rem;
      margin-bottom:.63rem;
      color:rgba(255,255,255,1);
    }
    img{
      width:2.81rem;
      height: 2.81rem;
      margin-bottom:.38rem;
    }
    p#address{
      font-size:.2rem;
      font-family:HiraginoSansGB-W3;
      color:rgba(255,255,255,1);
      margin-bottom:.6rem;
    }
    div.content{
      // width:3.98rem;
      font-size:.26rem;
      font-family:HiraginoSansGB-W3;
      color:rgba(255,255,255,1);
      line-height:.46rem;
      margin-bottom:1.22rem;
    }
    span{
      display: inline-block;
      text-align:ceter;
      height:.65rem;
      width:1.74rem;
      line-height:.65rem;
      font-size:.22rem;
      font-family:HiraginoSansGB-W6;
      color:rgba(255,255,255,1);
    }
    span.copy{   
      background:url("../assets/welcomebets/copy.png") no-repeat center /cover;
    }
    span.jumpnav{
      margin-left:.59rem;
      background:url("../assets/welcomebets/nav.png") no-repeat center /cover;
      
    }
  }
}
.tipsmodal {
  & .tips_info {
    padding: 0.38rem 0 0.16rem 0;
    font-size: 0.22rem;
    font-family: HiraginoSansGB-W3;
    color: rgba(255, 255, 255, 1);
    line-height: 0.36rem;
  }
}

@media screen and (max-width: 767px) {
  .tipsmodal .tips_info {
    font-size: 0.18rem;
  }
}
</style>


<script>
export default {
  name: "Welcomebets",
  data() {
    return {
      copyBtn: null, //存储初始化复制按钮事件
      num:'',
      ubnum:'',
      anynum:'',
      normal: {
        position: "top",
        color: "success",
        message: "复制成功",
        open: false,
        timeout: 2000
      },
      address:[
        {add:"18QQJNannotKo2Q9CkiqBJcf4qZWANZvGM",country:'俄罗斯'},
        {add:"16JUBxCKb5LsQP7pZANc2yWpqvv4Xxqpw5",country:'沙特'},
        {add:"17ThubQK723mnUAhJyQ5g3y7WGExMu5X1d",country:'埃及'},
        {add:"1EvSWArvHhg2LxDBBSqDmyabqKpJXh2dVW",country:'乌拉圭'},
        {add:"1Kn4scG7XnyHkWS8JXBEnHv1rHZuatKK1r",country:'葡萄牙'},
        {add:"141fdMZPSXyx1Ym73Tf7f5PgLrw4sTaRcG",country:'西班牙'},
        {add:"13QXEiy8nfSiZa5co2bMCcKXbbDTCUaqPd",country:'摩洛哥'},
        {add:"1EiiEpwmueb5gnPaf83QMfpZZa6NHa5xyu",country:'伊朗'},
        {add:"1Q82uttbmSsiTSb3xkk16u5bY3Vd8NJi1k",country:'法国'},
        {add:"1NCbHsPT7ET1W5M1eUxfdRnecUHKWifLey",country:'澳大利亚'},
        {add:"12fZL8ujSoDyf1JGG5bwTZveMfpBnKNbjK",country:'秘鲁埃及'},
        {add:"1DvETyyKTNbTVi8YFeqJcQGMz6PAbsgSc2",country:'丹麦'},
        {add:"1N91rYn2vcuZH9twrx9sZEbMD1Va4oxb8M",country:'阿根廷'},
        {add:"16K7C5qHL7mRY31Wu4dGXx6DgHrHvrPMEm",country:'冰岛'},
        {add:"16VCNicr93VhLQuFgJaXu8JmbJubA68fnS",country:'克罗地亚'},
        {add:"17gEQUDzoBucaDb5yNVf7h9RwzR8h8ndWc",country:'尼日利亚'},
        {add:"19JrzBCwat2yEy2Y7LZpkKozgffCNoc5mz",country:'巴西'},
        {add:"1Axnf6NNABo8VnDyFYk7FEajuNtSFjRYZw",country:'瑞士'},
        {add:"13BauCmfa5JNoHxtQaeWoWT1Xqwree6HZx",country:'哥斯达黎加'},
        {add:"1BYunn44TecdU1tRWtSnxpPhYbAA99rGm1",country:'塞尔维亚'},
        {add:"18L1zzKrNwL2Huov1iUdCuUr1HE1e7tFLk",country:'德国'},
        {add:"18hsZYuXmD2oBHdxnWLTqVAaX9Ge7t8KxB",country:'墨西哥'},
        {add:"1FNNeq9Wpq1TQ2C1iLYQL3zn3BHAkh12dp",country:'瑞典'},
        {add:"15hoi9mLw53ATgMdtwdMgtJUUin6cTwxYc",country:'韩国'},
        {add:"19Eb7zndhKVVozm4AD9e3KtxbESBvZZqLa",country:'比利时'},
        {add:"1KdK3LMNjrPaRhn7i3evGX5uxBhhP2nTsw",country:'巴拿马'},
        {add:"1HpTt76LdQG21QFttRtNGPqTcF6Tjbh2hY",country:'突尼斯'},
        {add:"1NK6KkGo1uYCq1Xv4GZ9gL3217UbqbFygP",country:'英格兰'},
        {add:"15amvgyWfrCyFtr1r1NXX3GLoAzUX6pE2w",country:'波兰'},
        {add:"1BaTnykKitJ5mG8RJXfR1YNbcnDF8ZDHcF",country:'塞内加尔'},
        {add:"12LGWm2ovNiKVafAm9GbEmDbQdz7ezGeto",country:'哥伦比亚'},
        {add:"1FbQBr2fg9aQyJp1HhsENFGo6tdcNjpguc",country:'日本'}
      ],
      remarks:'',
      openSimple: false
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
    },
    jumpnav(){
      this.$router.push({name:"Home"})
    }
  },
  created() {
    console.log(this.$route.params.id.split("-"))
    // this.remarks=this.$route.params.id;
    // this.$route.params.id.split("-")
    this.remarks=this.$route.params.id.split("-")[0];
    this.num=this.$route.params.id.split("-")[1];
    this.ubnum=this.$route.params.id.split("-")[2];
    this.anynum=this.$route.params.id.split("-")[3];
  }
};
</script>


