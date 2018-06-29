<template>
    <div class="searchwallets">
      <div class="searchbox">
        <input type="text" v-model="searchval" placeholder="请输入钱包地址" @keydown="entersearch">
        <span class="search btn" @click="search(searchval)">查询</span>
      </div>
      <p v-if="hasresult=='0'" class="donotget">当前没有竞猜信息哦~</p>

      <mu-dialog title="" class='wardmodal'  :open.sync="openSimple">
        <div class="btn ward" @click="gotodetails">
        </div>
      </mu-dialog>

      <!-- 查看详情 -->
      <mu-dialog title="未中奖" class='tipsmodal tipsmodalfind'  :open.sync="openSimple2">
          <div class="flex_row_between">
            <p class="awardtips">很遗憾未中奖，感谢您的参与！</p>
          </div>
          <mu-button class="surebtn"  color="primary" @click="gotodetails">查看详情</mu-button>
      </mu-dialog>

    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../public/style/_common.scss";

</style>
<style lang="scss" scoped>
.awardtips{
    width:3.27rem;
    height:.58rem;
    font-size:.22rem;
    font-family:HiraginoSansGB-W3;
    color:rgba(255,255,255,1);
    line-height:.36rem;
    margin: .33rem 0;
    text-align: center;
  }

.searchwallets{
  width:7.5rem;
  min-height:100vh;
  margin:auto;
  background:#181829;
  display: flex;
  align-items: center;
  flex-direction:column;
  .searchbox{
    position: relative;
    width:6.93rem;
    height: .8rem;//.52rem;
    margin-top:.54rem;
    
    input{
      width:6.93rem;
      height: .8rem;//.52rem;
    
      background:url("../assets/search_wallets/searchbg.png") no-repeat center /100% 100%;
      color:#8E8E93;
      font-size:.28rem;
      font-family:HiraginoSansGB-W3;
       position: absolute;
       z-index: 1;
       left: 0;
       top:0;
       padding-left:.31rem;
       padding-right:1.44rem;
       border:none;
       line-height:normal;
       border-radius:none!important;
      

    }

    span{
      line-height:.8rem;//.52rem;
      text-align:center;
      font-size:.26rem;
      font-family:HiraginoSansGB-W6;
      color:rgba(255,255,255,1);
      position: absolute;
      right: 0;
      top:0;
      z-index: 2;
      width:1.34rem;
      height: .8rem;//.52rem;
      display: inline-block;
      background:url("../assets/search_wallets/search.png") no-repeat center /cover;

    }

  }

// 没有中奖
  .donotget{
    font-size:.3rem;
    font-family:HiraginoSansGB-W3;
    color:#74747F;
    margin-top:3.74rem;
  }

}

</style>





<script>
export default {
  name: "Searchwallets",
  data() {
    return {
      searchval:'',
      openSimple:false,
      openSimple2:false,
      hasresult:''//是否有中奖信息
    };
  },
  methods: {
    entersearch(e){
      if(e.keyCode==13){
      this.searchisaward(this.searchval,(res)=>{
         if(res&&res.allawards>0)
         {
            this.hasresult=1
            this.openSimple=true
         }
         else{
           this.hasresult=0
         }
      })
      }

    },
    searchisaward(add,callback){
          var url = "http://121.201.40.227:5000/api";
          var params={
                "address": add,
              }
              $.ajax({
                type: "POST",
                headers: {
                    Accept: "application/json; charset=utf-8",
                    "Content-Type":"application/json"
                },
                url: url,
                data: JSON.stringify({
                  jsonrpc: "2.0",
                  method: "App.queryStakeHistory",
                  params: params,
                  id: "1"
                }),
                dataType: "json",
                success: function(res){
                  callback&&callback(res.result)
                },
                error:function(err){
                  console.log(err)
                }
              });    
    },
    search(val){
      console.log("val",val)
      this.searchisaward(val,(res)=>{
         console.log(res)
         if(res&&res.allawards>0&&res.details.length>0)
         {
           
            this.hasresult=1
            this.openSimple=true
         }
         else if(res&&res.allawards==0&&res.details.length>0)
         {
           this.hasresult=2
           this.openSimple2=true;
         }
         else{
           this.hasresult=0
         }

         

      })

    },
    closeSimpleDialog() {
      this.openSimple2 = false;
    },
    openSimpleDialog() {
      this.openSimple = true;
    },
    gotodetails(){
      this.openSimple=false
      this.openSimple2=false
      this.$router.push({name:'Awardinfo',params:{id:this.searchval}})
    }
  },
  mounted() {

  }
};
</script>


