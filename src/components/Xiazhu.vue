<template>
  <div class="guess">

    <mu-container class="table">
      <mu-paper :z-depth="1">
        <mu-data-table class="table" :columns="columns"  :data="listteam">
          <template slot-scope="scope">
            <td class="is-left ub_td">
              <img  :src="require('../assets/country/'+scope.row.name_en+'.png')" class="countrypic" alt="">
              {{scope.row.name}}
            </td>
            <td class="is-center ub_td">{{scope.row.numbers}}</td>
            <td class="is-right ub_td">
              <a @click="openSimpleDialog(scope.row.name,scope.row.id,scope.row.name_en)" class="xiazhu_btn">下注</a>
              <!-- {{scope.row.fat}} -->
            </td>
         </template>
      </mu-data-table>
    </mu-paper>

<!-- 下注弹窗 -->
  <mu-dialog title="请确认您选择的冠军队伍及下注数量" class='tipsmodal'  :open.sync="openSimple">
      <div class="flex_row_between contentbox">
        <div class="country">
            <img v-if="tips.pic!==''" :src="require('../assets/country/'+tips.pic+'.png')"  class="countrypic" alt="国旗">
            <span>{{tips.country}}</span>
        </div>
        <div class="xiazhu" id="xiazhu">
          <span>下注:</span>
          <mu-text-field type="number" v-model="cardnum"></mu-text-field>
          <span>( {{ubtc?ubtc:0}}UBTC / {{ub?ub:0}}UB )</span>
        </div>
        <div class="tips">
          每注0.1UBTC,10注起投（ 使用AnyBit享8折 ）
        </div>
      </div>
      <mu-button class="surebtn"  color="primary" @click="surebets">确定下注</mu-button>
      <mu-button class="closebtn" flat color="primary" @click="closeSimpleDialog">X</mu-button>
  </mu-dialog>
  <mu-snackbar :color="normal.color" :position="normal.position" :open.sync="normal.open">
         <mu-icon left :value="icon"></mu-icon> 
        {{normal.message}}
    </mu-snackbar>
</mu-container>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../public/style/_common.scss";
.countrypic {
  width: 0.61rem;
  height: 0.34rem;
  vertical-align: middle;
  margin-right: 0.2rem;
}
  .mu-text-field-input {
    color: #fff !important;
    height: 0.68rem !important;
    font-size: 0.28rem !important;
  }

.guess {
  .tabletd {
    height: 0.89rem;
    font-size: 0.32rem !important;
    // width: 33.3%;
    font-family: HiraginoSansGB-W3 !important;
    color: rgba(255, 255, 255, 1) !important;
    background: transparent;
    line-height: 0.89rem;
    border: none !important;
  }





  .mu-table td,
  .mu-table th {
    padding-left: 0;
    padding-right: 0;
  }

  .ub_td {
    color: rgba(255, 255, 255, 1) !important;
    // height: 0.86rem;
    padding:.2rem 0;
    vertical-align: middle;
    box-sizing: border-box;
    line-height: normal;
    text-align: center;
    word-break: break-all;
    font-size: 0.24rem !important;
    font-family: HiraginoSansGB-W3 !important;
    a {
      display: inline-block;
      width: 1.26rem;
      height: 0.46rem;
      line-height: 0.46rem;
      text-align: center;
      background: url("../assets/xiazhu/btn@2x.png") no-repeat center / cover;
    }
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


}

.xiazhu {
  font-family: HiraginoSansGB-W3 !important;
  font-size: 0.28rem;
  line-height: normal;
  .mu-input {
    width: 0.8rem !important;
    color: #fff !important;
    min-height: unset !important;
    margin-bottom: 0 !important;
    .mu-input-content {
      padding-bottom: 0 !important;
      padding-top: 0 !important;
    }
  }
  .mu-input-line,
  .mu-input-focus-line {
    background-color: #fff;
    transition: 0ms;
    transform: unset;
    height: 0.01rem;
  }
}

.small{
  font-size: 0.2rem;
 .mu-text-field-input {
    color: #fff !important;
    height: 0.68rem !important;
    font-size: 0.2rem !important;
  }
}
.litter{
  font-size: 0.16rem;
 .mu-text-field-input {
    color: #fff !important;
    height: 0.68rem !important;
    font-size: 0.16rem !important;
  }
}
</style>

<style lang="scss" scoped>
.tipsmodal {
  .contentbox {
    color: #fff;
    padding: 0.35rem 0 0;
    // border-bottom: 0.01rem solid #373737;
    font-family: HiraginoSansGB-W6 !important;
    .country {
      font-size: 0.3rem;
      line-height: normal;
    }

    .tips {
      font-size: 0.22rem;
      font-family: HiraginoSansGB-W3;
      line-height: normal;
      color: rgba(56, 149, 254, 1);
    }
  }
}

.guess {
  width: 7.5rem;
  height: 16.39rem;
  background: url("../assets/xiazhu/bg.png") no-repeat center / cover;
  margin: auto;
  padding-top: 2.69rem;
  .table {
    margin: auto;
    width: 6.95rem;
    height: 13.37rem;
    // overflow: auto;
    background: url("../assets/xiazhu/team@2x.png") no-repeat center / cover;
  }
  .mu-paper {
    background-color: unset;
  }
  tr.is-hover td {
    background: #18192c !important;
  }
}
</style>

<script>
export default {
  name: "Xiazhu",
  data() {
    return {
      normal: {
        position: "top",
        color: "warning",
        message: "注数不符合要求",
        open: false,
        timeout: 2000
      },
      openSimple: false,
      tips: {
        country: "",
        pic: "",
        id: ""
      },
      cardid: 1,
      cardnum: "", //下注数量
      columns: [
        {
          title: "球队",
          width: "40%",
          name: "name",
          align: "center",
          class: "tabletd"
        },
        {
          title: "已下注",
          name: "numbers",
          width: "37%",
          align: "center",
          class: "tabletd"
        },
        {
          title: "下注",
          name: "id",
          width: "23%",
          align: "center",
          class: "tabletd"
        }
      ],
      countrys: [
        { id: 1, name: "俄罗斯", name_en: "Russia" },
        { id: 2, name: "沙特", name_en: "Saudi Arabia" },
        { id: 3, name: "埃及", name_en: "Egypt" },
        { id: 4, name: "乌拉圭", name_en: "Uruguay" },
        { id: 5, name: "葡萄牙", name_en: "Portugal" },
        { id: 6, name: "西班牙", name_en: "Spain" },
        { id: 7, name: "摩洛哥", name_en: "Morocco" },
        { id: 8, name: "伊朗", name_en: "IR Iran" },
        { id: 9, name: "法国", name_en: "France" },
        { id: 10, name: "澳大利亚", name_en: "Australia" },
        { id: 11, name: "秘鲁", name_en: "Peru" },
        { id: 12, name: "丹麦", name_en: "Denmark" },
        { id: 13, name: "阿根廷", name_en: "Argentina" },
        { id: 14, name: "冰岛", name_en: "Iceland" },
        { id: 15, name: "克罗地亚", name_en: "Croatia" },
        { id: 16, name: "尼日利亚", name_en: "Nigeria" },
        { id: 17, name: "巴西", name_en: "Brazil" },
        { id: 18, name: "瑞士", name_en: "Switzerland" },
        { id: 19, name: "哥斯达黎加", name_en: "Costa Rica" },
        { id: 20, name: "塞尔维亚", name_en: "Serbia" },
        { id: 21, name: "德国", name_en: "Germany" },
        { id: 22, name: "墨西哥", name_en: "Mexico" },
        { id: 23, name: "瑞典", name_en: "Sweden" },
        { id: 24, name: "韩国", name_en: "Korea Republic" },
        { id: 25, name: "比利时", name_en: "Belgium" },
        { id: 26, name: "巴拿马", name_en: "Panama" },
        { id: 27, name: "突尼斯", name_en: "Tunisia" },
        { id: 28, name: "英格兰", name_en: "England" },
        { id: 29, name: "波兰", name_en: "Poland" },
        { id: 30, name: "塞内加尔", name_en: "Senegal" },
        { id: 31, name: "哥伦比亚", name_en: "Colombia" },
        { id: 32, name: "日本", name_en: "Japan" }
      ],
      listteam: []
    };
  },
  computed:{
    icon() {
      return {
        success: "check_circle",
        info: "info",
        warning: "priority_high",
        error: "warning"
      }[this.normal.color];
    },
    ubtc(){
      let res=Number(this.cardnum)*0.1
      res=String(res)
      if(res.indexOf('.')!==-1)
      {
        res=Number(res)
        res=res.toFixed(2)
      }
      return res
    },
    ub(){
      let res=Number(this.cardnum)*0.08
         res=String(res)
      if(res.indexOf('.')!==-1)
      {
         res=Number(res)
        res=res.toFixed(2)
      }
      return res
    }
  },
  watch:{
    openSimple(newvalue,oldvalue){
      newvalue?"":this.cardnum=""
    },
    cardnum(newvalue,oldvalue){
      if(newvalue.trim().length>=5&&newvalue.trim().length<=9)
      {
        $("#xiazhu").addClass("small")
      }
      else if(newvalue.trim().length>9)
      {
         $("#xiazhu").removeClass("small")
         $("#xiazhu").addClass("litter")
      }
      else
      {
         $("#xiazhu").removeClass("small")
         $("#xiazhu").removeClass("litter")
      }
    }
  },
  methods: {
    warningbox() {
      if (this.normal.timer) clearTimeout(this.normal.timer);
      this.normal.open = true;
      this.normal.timer = setTimeout(() => {
        this.normal.open = false;
      }, this.normal.timeout);
    },
    openSimpleDialog(country, id, pic) {
      this.openSimple = true;
      this.tips = {
        country: country,
        pic: pic,
        id: id
      };
    },
    closeSimpleDialog() {
      this.openSimple = false;
    },
    surebets() {
      if(this.cardnum.trim()===""||Number(this.cardnum)<10)
      {
        this.warningbox()
        return;
      }
      this.openSimple = false;
      let transforminfo=this.tips.id+'-'+this.cardnum+'-'+this.ubtc+'-'+this.ub;
      this.$router.push({ name: "Welcomebets", params: { id: transforminfo } });
    },
    getteaminfo(callback) {
      var url = "http://121.201.40.227:5000/api";
      var teaminfo=this.countrys
      var arrnew=[]
      teaminfo.forEach((item,key)=>{
        item.numbers=0
      })

      $.ajax({
        type: "POST",
        headers: {
          Accept: "application/json; charset=utf-8",
          "Content-Type": "application/json"
        },
        url: url,
        data: JSON.stringify({
          jsonrpc: "2.0",
          method: "App.queryStakeStat",
          params: {
            stat_type: 2,
            stake_type: 2
          },
          id: "1"
        }),
        dataType: "json",
        success: function(res) {

          res.result.forEach((data, key1) => {
            teaminfo.forEach((item,key)=>{
              if(data.champion == item.id){
                item.numbers = data.count;
              }
            })

          });

          callback&&callback(teaminfo)

        },
        error: function(err) {
          console.log(err);
        }
      });
    },
  },
  created() {

    this.getteaminfo(data => {
        this.listteam=data;
    });
  },
  mounted() {

  }
};
</script>


