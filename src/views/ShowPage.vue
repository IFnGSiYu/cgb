<template>
  <div id="showpage" ref="showpage">
    <img class="bg" ref="bg" src="@/assets/show/showbg.jpg" alt="" />
    <img class="logo" src="@/assets/show/slogo.png" alt="" />
    <div class="bigtitle">
      <img src="@/assets/show/showtitle.png" alt="" />
    </div>
    <div class="content" v-if="showIndex == 1">
      <div class="neirong">
        <!-- <img class="bg1" ref="bg" src="@/assets/show/showbg1.png" alt="" /> -->
        <p class="title">{{ titleArr[showIndex - 1] }}</p>
        <div class="rank">
          <div v-for="(item, index) in teams" :key="index" class="team">
            <!-- <div class="team"> -->
            <div class="teamname">第{{ index + 1 }}组{{ item.team }}战队</div>
            <div class="teamscore">{{ item.score }}</div>
            <!-- </div> -->
          </div>
        </div>
        <p class="text1">注：</p>
        <p class="text2">
          1.决赛最终得分=初赛得分*40％+决赛得分*60+附加分。2.评分方法去掉“最高分”、“最低分”后加权平均。3.评分最后一项：展示趣味性（附加分5分）为给予每位在场行领导和集团工会领导的权利,可选择一个或多个现场参赛团队分配这5分,为额外加在团队总分里面。
        </p>
      </div>
    </div>

    <div class="content" v-if="showIndex == 2">
      <div class="neirong">
        <!-- <img class="bg1" ref="bg" src="@/assets/show/showbg1.png" alt="" /> -->
        <p class="title">{{ titleArr[showIndex - 1] }}</p>
        <div class="rank">
          <div v-for="(item, index) in teams" :key="index" class="team">
            <!-- <div class="team"> -->
            <div class="teamname">第{{ index + 1 }}组{{ item.team }}战队</div>
            <div class="teamscore">{{ item.score }}</div>
            <!-- </div> -->
          </div>
        </div>
        <p class="text1">注：</p>
        <p class="text2">
          1.决赛最终得分=初赛得分*40％+决赛得分*60+附加分。2.评分方法去掉“最高分”、“最低分”后加权平均。3.评分最后一项：展示趣味性（附加分5分）为给予每位在场行领导和集团工会领导的权利,可选择一个或多个现场参赛团队分配这5分,为额外加在团队总分里面。
        </p>
      </div>
    </div>

    <div class="content" v-if="showIndex == 3">
      <div class="neirong">
        <!-- <img class="bg1" ref="bg" src="@/assets/show/showbg1.png" alt="" /> -->
        <p class="title">{{ titleArr[showIndex - 1] }}</p>
        <div class="rank">
          <div v-for="(item, index) in teams" :key="index" class="team">
            <!-- <div class="team"> -->
            <div class="teamname">第{{ index + 1 }}组{{ item.team }}战队</div>
            <div class="teamscore">{{ item.score }}</div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="content" v-if="showIndex == 4">
      <div class="neirong">
        <!-- <img class="bg1" ref="bg" src="@/assets/show/showbg1.png" alt="" /> -->
        <p class="title">{{ titleArr[showIndex - 1] }}</p>
        <div class="rank">
          <div v-for="(item, index) in teams" :key="index" class="team1">
            <div class="left">NO.{{ index + 1 }}</div>
            <div class="right">
              <div class="teamtext">第{{ index + 1 }}组{{ item.team }}战队</div>
              <!-- <div class="teamline">{{ item.score }}</div> -->
              <el-progress
                class="progress"
                :show-text="false"
                :stroke-width="60"
                :percentage="item.score"
              ></el-progress>
            </div>
          </div>
        </div>
        <div>
          <div class="line" style="float: left"></div>
          <p class="linetext" style="float: left">现场效果分数</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Ref, Vue } from 'vue-property-decorator'

@Component
export default class ShowPage extends Vue {
  private showIndex = 3
  private titleArr = [
    '团队赛分数',
    '广发风险控制建模大赛团队赛排名',
    '个人赛分数',
    '广发风险控制建模大赛个人赛排名',
  ]
  private teams = [
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
    { team: '广发风险控制建模大赛团队1', score: 30 },
  ]
}
</script>
<style lang='less' scoped>
#showpage {
  //   background-image: url(../assets/show/showbg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  //   height: 100%;
  .bg {
    position: absolute;
    width: 100%;
    height: auto;
    z-index: -1;
  }
  .logo {
    width: 20%;
    height: auto;
    margin: 1.5vh 0 0 1.5vh;
  }
  .bigtitle {
    width: 65%;
    height: auto;
    margin: 10px auto;
    img {
      width: 100%;
    }
  }
  .content {
    width: 96%;
    height: 90%;
    margin: auto;
    box-sizing: border-box;
    padding: 0 2vw;
    background-color: #ffffff;
    margin-top: 60px;
    .neirong {
      overflow: hidden;
      height: 0;
      padding-bottom: 28%;
      display: flex;
      //   height: 100%;
      //   align-items: flex-start;
      justify-content: space-between;
      //   flex-wrap: clu;
      flex-direction: column;
      .title {
        text-align: center;
        color: #dd180a;
        font-size: 6vh;
        font-weight: bold;
        margin:10px auto;
      }
      .text1 {
        color: #dd180a;
        font-size: 3vh;
        margin: 2vh 0 0 0;
      }
      .text2 {
        color: #dd180a;
        font-size: 3vh;
        padding-bottom: 40px;
        margin: 0;
      }

      .rank {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
        //   position: absolute;
        //  height: 500%;
        .team {
          width: 50%;
          //   flex: 1;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          align-content: center;
          // flex-wrap: wrap;
          // flex-direction: row;
          .teamname {
            border-style: solid;
            border-color: #dd180a;
            //   width: 50%;
            flex: 5;
            border-width: 2px;
            margin: -1px;
            color: #dd180a;
            font-weight: bold;
            font-size: 3.3vh;
            text-align: center;
            padding: 5px;
          }
          .teamscore {
            flex: 3;
            //   width: 50%;
            border-style: solid;
            border-color: #dd180a;
            border-width: 2px;
            margin: -1px;
            color: #dd180a;
            font-weight: bold;
            font-size: 3.3vh;
            text-align: center;
            padding: 5px;
          }
        }
        .team1 {
          width: 33%;
          //   flex: 1;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          align-content: center;
          // flex-wrap: wrap;
          // flex-direction: row;
          margin: 20px 0;
          .left {
            float: left;
            font-size: 4vh;
            color: #f16a10;
            font-weight: bold;
            width: 4.8vw;
            width: 15%;
          }
          .right {
            float: left;
            margin-left: 70px;
            width: 85%;
            .teamtext {
              font-size: 2.6vh;
              color: #dd180a;
              margin-bottom: 5px;
              width: 100%;
            }
            .progress {
              width: 90%;
            }
          }
          /deep/ .el-progress-bar__inner {
            background-color: #dd180a;
          }
        }
      }

      .line {
        background-color: #dd180a;
        width: 100px;
        display: block;
        padding-top: 50px;
        border-radius: 30px;
        margin: 50px 0 0 20%;
      }
      .linetext {
        color: #dd180a;
        font-size: 45px;
        // margin-left: 20%;
        margin: 50px 0 0 10px;
        line-height: 50px;
      }
    }
  }
}
</style>