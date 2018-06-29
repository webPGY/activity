<template>
  <div class="awardinfo">
    <div class="awardmsg">
      <p>
        <span>钱包地址:&nbsp;</span>
        <span class="awardadd">0x3ac4bdcf54b59645105fec39404686315</span>
      </p>
      <div>
        <span>押金:&nbsp;{{deposit}}UB</span>
        <span class="awardmoney">奖金:&nbsp;{{allawards}}UB</span>
        <!-- <span class="find btn" @click="find">查看</span> -->
      </div>
    </div>

     <mu-container class="table">
        <mu-paper :z-depth="1">
          <mu-data-table class="table" :columns="columns"   :data="listnew">
            <template slot-scope="scope">
              <td class="is-center ub_td" @click="getdetail(scope.row.money,scope.row.txid,scope.row.deposit)">{{scope.row.time}}</td>
              <td class="is-center ub_td" @click="getdetail(scope.row.money,scope.row.txid,scope.row.deposit)">{{scope.row.coutry}}</td>
              <td class="is-center ub_td" @click="getdetail(scope.row.money,scope.row.txid,scope.row.deposit)">{{scope.row.awards}}</td>
              <td class="is-center ub_td" @click="getdetail(scope.row.money,scope.row.txid,scope.row.deposit)">
                 <span v-if="scope.row.state==1" style="color:#0076ff">是</span>
                 <span v-if="scope.row.state!==1">否</span>
                <!-- {{scope.row.state==1?<span>是</span>:'否'}} -->
                </td>
              <td class="is-center ub_td" @click="getdetail(scope.row.money)">
                <span v-if="scope.row.money>0" style="color:#0076ff">{{scope.row.money}}UB</span>
                 <span v-if="scope.row.money<=0">未中奖</span>
                <!-- {{scope.row.money>0?scope.row.money:''}}{{scope.row.money>0?'UB':'未中奖'}} -->
              </td>
          </template>
        </mu-data-table>
      </mu-paper>

      <!-- 查看详情 -->
      <mu-dialog title="温馨提示" class='tipsmodal tipsmodalfind'  :open.sync="openSimple">
          <div class="flex_row_between">
            <p class="awardtips">奖金将于世界杯结束后一个工作日内开始返还，请稍后</p>
          </div>
          <mu-button class="surebtn"  color="primary" @click="closeSimpleDialog">关闭</mu-button>
      </mu-dialog>

    </mu-container>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../public/style/_common.scss";
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
.awardinfo {
  .mu-table tr{
    height: unset;
  }

  .tabletd {
    height: 0.51rem;//0.89rem;
    font-size: 0.26rem !important;
    // width: 33.3%;
    font-family: HiraginoSansGB-W3 !important;
    color: rgba(255, 255, 255, 1) !important;
    background: transparent;
    line-height: 0.51rem;//0.89rem;
    border: none !important;
  }
  .mu-table td,
  .mu-table th{
    padding-left: 0;
    padding-right: 0
  }

  .ub_td {
    color: rgba(255, 255, 255, 1) !important;
    line-height: normal; 
    padding:.2rem 0;
    text-align: center;
    font-size: 0.2rem !important;
    font-family: HiraginoSansGB-W3 !important;
    vertical-align: middle;
  }

  .table.container {
    padding-left: 0;
    padding-right: 0;
  }

  .mu-table-header,
  .mu-table-body {
    width: 100%;
    color: #fff;
  }
  .mu-table-header{
    background:#0076FF;
  }
}
</style>

<style lang="scss" scoped>
.table{
  margin: auto;
  width: 6.89rem;
  height: 9.58rem;
  // overflow: auto;
  background: #181829;
   border:none;
  // border-radius:.02rem;
}
.table.container{
  margin: auto;
  width: 6.93rem;
  height: 9.6rem;
  // overflow: auto;
  // background: #181829;
   background: url("../assets/awardinfo/tablebg.png") no-repeat center / cover;
   border:none;
  // border-radius:.02rem;
}
.mu-paper {
  background-color: unset;
}
tr.is-hover td {
  background: #18192c !important;
}

.awardinfo {
  width: 7.5rem;
  margin: auto;
  min-height: 100vh;
  background: #181829;
  font-family: HiraginoSansGB-W3;
  padding: 0.56rem 0.28rem 0 0.28rem;
  color: #fff;

  .awardmsg {
    margin-bottom: 0.47rem;
    & > * {
      display: flex;
      align-items: center;
    }
    p {
      margin-bottom: 0.32rem;
    }
    font-size: 0.3rem;
    .awardadd {
      font-size: 0.24rem;
    }
    .awardmoney {
      padding: 0 0.28rem 0 0.72rem;
    }
    .find {
      font-size: 0.26rem;
      display: inline-block;
      background: url("../assets/awardinfo/btn.png") no-repeat center / cover;
      width: 1.26rem;
      height: 0.48rem;
      line-height: 0.48rem;
      text-align: center;
    }
  }
}
</style>


<script>
export default {
  name: "Awardinfo",
  data() {
    return {
      openSimple:false,
      countrys:[
        {item:1,country:'俄罗斯'},
        {item:2,country:'沙特'},
        {item:3,country:'埃及'},
        {item:4,country:'乌拉圭'},
        {item:5,country:'葡萄牙'},
        {item:6,country:'西班牙'},
        {item:7,country:'摩洛哥'},
        {item:8,country:'伊朗'},
        {item:9,country:'法国'},
        {item:10,country:'澳大利亚'},
        {item:11,country:'秘鲁'},
        {item:12,country:'丹麦'},
        {item:13,country:'阿根廷'},
        {item:14,country:'冰岛'},
        {item:15,country:'克罗地亚'},
        {item:16,country:'尼日利亚'},
        {item:17,country:'巴西'},
        {item:18,country:'瑞士'},
        {item:19,country:'哥斯达黎加'},
        {item:20,country:'塞尔维亚'},
        {item:21,country:'德国'},
        {item:22,country:'墨西哥'},
        {item:23,country:'瑞典'},
        {item:24,country:'韩国'},
        {item:25,country:'比利时'},
        {item:26,country:'巴拿马'},
        {item:27,country:'突尼斯'},
        {item:28,country:'英格兰'},
        {item:29,country:'波兰'},
        {item:30,country:'塞内加尔'},
        {item:31,country:'哥伦比亚'},
        {item:32,country:'日本'},
      ],
      columns: [
        {
          title: "时间",
          width: "26%",
          name: "time",
          align: "center",
          class: "tabletd"
        },
        {
          title: "押注",
          name: "country",
          width: "20%",
          align: "center",
          class: "tabletd"
        },
        {
          title: "注数",
          name: "awards",
          width: "18%",
          align: "center",
          class: "tabletd"
        },
        {
          title: "是否中奖",
          name: "state",
          width: "18%",
          align: "center",
          class: "tabletd"
        },
        {
          title: "奖金",
          name: "money",
          width: "18%",
          align: "center",
          class: "tabletd"
        }
      ],
      listnew:[],
      allawards:'',//所有奖金
      deposit:'',//押金
    };
  },
  methods:{
    openSimpleDialog() {
      this.openSimple = true;
    },
    getdetail(money,txid,deposit){
         let m=Number(money)+Number(deposit)
         txid===""?txid="willback":""
         let obj={txid:txid,address:this.$route.params.id,money:m}
         var id=this.$route.params.id+'_'+txid+'_'+m
         this.$router.push({name:'Detailsinfo',params:{id:id}})

    },
    closeSimpleDialog() {
      this.openSimple = false;
    },
    find(){
       this.openSimple = true;
    },
    filtercountrylist(id){
      let arr=this.countrys;
      var c=''
      arr.forEach((item,key)=>{
        if(item.item==id)
        {
          c=item.country
        }
      })
      return c
    },
    getawardinfo(add,callback){
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
    }
  },
  created() {
    this.getawardinfo(this.$route.params.id,(data)=>{
       if(data){
         this.allawards=data.allawards;
         this.deposit=data.deposit;
         var arr=[];
         data.details.forEach((data1,key) => {
            data1.coutry=this.filtercountrylist(data1.item)
            arr.push(data1)
         });
         this.listnew=arr;
       }
    })
  },
  mounted() {}
};
</script>


