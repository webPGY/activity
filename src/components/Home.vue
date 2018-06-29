<template>
  <div class="hello">
     <div class="top">
       <img src="../assets/home/top@2x.png" alt="">
     </div>
     <div class="bottom">
       <div class="primary" v-cloak v-if="!stop">
         <span>距离</span>
         <img src="../assets/home/countstart@2x.png" class="countstatus" v-if="!start" alt="">
         <img src="../assets/home/countend@2x.png" class="countstatus" v-if="start" alt="">
         <span>还有</span>
       </div>
       <div class="primary end" v-cloak v-if="stop" style="text-align:center">
        竞猜已结束！感谢参与！
       </div>
       <div class="countdown flex_center" style="margin-left:-.02rem" v-if="!stop"  v-cloak>
           <span class="day">{{!start?time.day:timestop.day}}</span>
           <span class="text">天</span>
           <span class="hour">{{!start?time.hour:timestop.hour}}</span>
           <span class="text">小时</span>
           <span class="minutes">{{!start?time.minutes:timestop.minutes}}</span>
           <span class="text">分钟</span>
           <span class="minutes">{{!start?time.seconds:timestop.seconds}}</span>
           <span class="text" style="width:0.2rem">秒</span>
       </div>
       <div class="startwant" v-if="start&&!stop">
          <router-link class="start btn" to="xiazhu">开始竞猜</router-link>
          <router-link class="find btn" to="searchwallets">中奖查询</router-link>
       </div>
       <div class="startwant end" v-if="stop">
          <router-link class="find btn" to="searchwallets">中奖查询</router-link>
       </div>
       <div class="textinfo">
         <h3>竞 | 猜 | 规 | 则</h3>
         <div class="content">
           <p>
             <span class="index">1</span>
             <span class="txt">您需要使用UBTC下注参与竞猜。竞猜免费，不论猜中与否，您下注的
UBTC都会在世界杯结束后的7个工作日内原数返还到您的UBTC地址。</span>
           </p>
           <p>
             <span class="index">2</span>
             <span class="txt">每注需要0.1 UBTC，10注起投。请按提示将UBTC转入指定地址，
以完成投注。</span>
           </p>
           <p>
             <span class="index">3</span>
             <span class="txt">请不要使用交易所账户或中心化钱包进行转账！否则系统无法返还您所
投注的UBTC！(中心化钱包是指您没有掌控UBTC地址的私钥的钱包)</span>
           </p>
           <p>
             <span class="index">4</span>
             <span class="txt">建议您使用AnyBit手机钱包进行转账，可享8折(即：每注只需
0.08 UBTC)。下载AnyBit：<a href="http://anybit.io" style="color:#217BDA" target="_blank">http://anybit.io</a></span>
           </p>
           <p>
             <span class="index">5</span>
             <span class="txt">奖金分配规则：猜中者按照下注比例瓜分总奖金100UBTC，
获奖金额 =（本人所下注数/所有猜中者下注总数）x 100UBTC。</span>
           </p>
           <p>
             <span class="index">6</span>
             <span class="txt">比赛结果以国际足联裁定的最终结果为准。</span>
          </p>
          <p>
             <span class="index">7</span>
             <span class="txt">本次竞猜活动最终解释权归微信公众号“ub订阅号”所有。</span>
          </p>
         </div>

       </div>
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
  margin: auto;
  .top {
    width: 7.5rem;
    height: 5.54rem;
    & > img {
      width: 100%;
      height: auto;
    }
  }
  .bottom {
    width: 7.5rem;
    // height: 12.14rem;
    padding-bottom: 0.37rem;
    padding-top:1.46rem;
    background: url("../assets/home/bottom@2x.png") no-repeat center / 100% 100%;
    .primary {
      width: 2.8rem;
      height: 0.37rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: auto;
      font-size: .22rem;
      line-height:1;
      font-family: HiraginoSansGB-W3;
      color: rgba(255, 255, 255, 1);
      img{
        width:1.43rem;
        height: .37rem;
      }
    }

    .primary.end{
     width:unset;
     height: unset;
     font-size:.46rem;
     padding:.7rem 0 .6rem 0;
     font-family:HiraginoSansGB-W6;
     justify-content: center;
    }

    // startwant
    .startwant {
      padding-top: 1.03rem;
      margin: auto;
      width: 6.18rem;
      height: 0.83rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.27rem;
      font-family: HiraginoSansGB-W6;
      color: rgba(255, 255, 255, 1);
      .btn {
        display: inline-block;
        text-align: center;
        line-height: 0.83rem;
        height: 0.83rem;
      }
      .start {
        width: 2.82rem;
        background: url("../assets/home/btn@2x.png") no-repeat center / cover;
      }
      .find {
        width: 2.83rem;
        background: url("../assets/home/btn2@2x.png") no-repeat center / cover;
      }
    }

    .startwant.end{
      justify-content:center;
    }

    // count_down
    & .countdown {
      padding-top: .5rem;

      & span {
        display: inline-block;
      }
      & .day,
      & .hour,
      & .minutes,
      & .seconds {
        width: 1.04rem;
        height: 1.01rem;
        background: url("../assets/home/timer@2x.png") no-repeat center /
          contain;
        text-align: center;
        line-height: 1.01rem;
        font-size: 0.56rem;
        font-family: countdown;
        color: rgba(251, 251, 251, 1);
       
      }
      & .text {
        width: 0.46rem;
        font-size: 0.2rem;
        font-family: HiraginoSansGB-W3;
        color: rgba(255, 255, 255, 1);
        // padding-left:.05rem;
      }
    }

    // 中奖信息说明
    & .textinfo {
      width: 6.93rem;
      height: 6.15rem;

      margin: auto;
      margin-top: 1.1rem;
      padding: 0 0.2rem;
      background: url("../assets/home/texttip@2x.png") no-repeat center / cover;
      font-size: 0.22rem;
      font-family: HiraginoSansGB-W3;
      color: rgba(255, 255, 255, 1);
      line-height: 1;
      text-align: left;
      & h3 {
        padding: 0.31rem 0 0.38rem 0;
        font-size: 0.34rem;
        text-align: center;
      }
      & .content {
        margin-bottom: 0.34rem;
        p {
          margin-bottom: 0.25rem;
          line-height: 0.25rem;
          font-size: 0.18rem;
          display: flex;
        }
        .index {
          display: inline-block;
          border-radius: 50%;
          width: 0.24rem;
          height: 0.24rem;
          text-align: center;
          background: #006bcd;
          margin-right: 0.08rem;
          font-size: 0.17rem;
          font-family: PingFang-SC-Regular;
        }
        .txt{
          padding-left:.04rem;
          line-height:1.4;
          flex:1;
          word-break:normal;
        }
      }

      .tips {
        p + p {
          font-size: 0.19rem;
          line-height: 0.35rem;
          margin-top: 0.2rem;
        }
      }
    }
  }
}
</style>


<script>
export default {
  name: "Home",
  data() {
    return {
      time: {
        day: "",
        hour: "",
        minutes: "",
        seconds:""
      },
      timestop: {
        day: "",
        hour: "",
        minutes: "",
        seconds:""
      },
      // starttime:'2018/6/9,16:57:00',
      // stoptime:'2018/6/12,17:26:00',
      starttime:'2018/6/14,23:00:00',
      stoptime:'2018/7/15,22:50:00',
      countstart: 0,
      countstop: 0,
      start: false, //竞猜是否开始
      stop: false
    };
  },
  methods: {
    timer() {
      var endtime = new Date(this.starttime);
      var nowtime = new Date();
      if (parseInt((endtime.getTime() - nowtime.getTime()) / 1000 )<= 0) {
        clearInterval(this.countstart);
        this.start=true;
      } else {
        var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
        this.time.day =parseInt(lefttime / 3600 / 24) > 9? parseInt(lefttime / 3600 / 24): "0" + parseInt(lefttime / 3600 / 24);
        this.time.hour =parseInt((lefttime / 3600) % 24) > 9? parseInt((lefttime / 3600) % 24): "0" + parseInt((lefttime / 3600) % 24);
        this.time.minutes =parseInt((lefttime / 60) % 60) > 9? parseInt((lefttime / 60) % 60): "0" + parseInt((lefttime / 60) % 60);
        this.time.seconds=parseInt(lefttime%60)>9?parseInt(lefttime%60):'0'+parseInt(lefttime%60)
      }
    },
    timerend() {
      var endtime = new Date(this.stoptime);
      var nowtime = new Date();
      if (parseInt((endtime.getTime() - nowtime.getTime()) / 1000 )<= 0) {
        clearInterval(this.countstop);
        this.stop=true;
      } else {
        var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
        this.timestop.day =parseInt(lefttime / 3600 / 24) > 9? parseInt(lefttime / 3600 / 24): "0" + parseInt(lefttime / 3600 / 24);
        this.timestop.hour =parseInt((lefttime / 3600) % 24) > 9? parseInt((lefttime / 3600) % 24): "0" + parseInt((lefttime / 3600) % 24);
        this.timestop.minutes =parseInt((lefttime / 60) % 60) > 9? parseInt((lefttime / 60) % 60): "0" + parseInt((lefttime / 60) % 60);
        this.timestop.seconds=parseInt(lefttime%60)>9?parseInt(lefttime%60):'0'+parseInt(lefttime%60)
      }
    }
  },
  created() {
    this.countstart = setInterval(this.timer,1000);
    this.countstop = setInterval(this.timerend,1000);
  }
};
</script>


