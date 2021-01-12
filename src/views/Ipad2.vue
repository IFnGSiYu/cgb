<template>
  <div id="ipad2">
    <img class="logo" src="@/assets/ipad/logo.png" alt="" />
    <div class="title">
      <img src="@/assets/ipad/ipadtitle.png" alt="" />
    </div>
    <div class="content">
      <p class="text">
        附加分（5分）：展示趣味性。每位行领导和集团工会领导有5分的额外加分权
        利，根据团队现场展示效果，可选择一组或者几组分配这五分。
      </p>
      <div class="teams">
        <div v-for="(item, index) in teams" :key="index">
          <div
            class="team"
            :style="{
              backgroundColor: index == teamIndex ? '#f1533a' : '#cf0607',
            }"
            @click="onChooseTeam(index)"
          >
            <p>第{{ (index + 1) | numberfilter }}组</p>
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
      <div class="scores">
        <div
          v-for="(item, index) in 6"
          :key="item"
          class="score"
          :style="{
            backgroundColor: index == scoreIndex ? '#f1533a' : '#ffffff',
          }"
          @click="onChooseScore(index)"
        >
          <p>{{ item }}分</p>
        </div>
      </div>
      <p class="btext">
        *每位领导有五分的分配权，五分分配完之后便不能再继续分配分数
      </p>
      <div class="sumbitbox">
        <el-button type="danger" class="sumbit" @click="onSumbit">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  filters: {
    numberfilter: function (num: number) {
      const changeNum = [
        '零',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '七',
        '八',
        '九',
        '十',
        '十一',
        '十二',
        '十三',
        '十四',
        '十五',
      ]
      const text = changeNum[num]
      return text
    },
  },
})
export default class Ipad2 extends Vue {
  private teams = [
    '第一战队第一战队第一战队第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
    '第一战队',
  ]
  private teamIndex = 0
  private onChooseTeam(index: number) {
    this.teamIndex = index
  }
  private scoreIndex = 0
  private onChooseScore(index: number) {
    this.scoreIndex = index
  }
  private onSumbit() {
    console.log(this.teamIndex, this.scoreIndex)
  }
}
</script>
<style lang='less' scoped>
#ipad2 {
  background-image: url(../assets/ipad/ipadbg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  //   left: 0;
  //   top: 0;
  //   height: 100%;
    width: 100%;
  .logo {
    margin: 10px;
    width: 25%;
    height: auto;
  }
  .title {
    width: 60%;
    height: auto;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .content {
    width: 90%;
    height: 84%;
    background-color: #ffffff;
    margin: 10px auto 5% auto;
    padding: 0 10px;
    .text {
      font-size: 16px;
      margin: 10px auto;
      padding: 10px 0;
    }
    .btext {
      font-size: 12px;
      margin: 10px auto;
      padding: 10px 0;
      font-weight: bold;
      text-align: center;
      margin-bottom: 32px;
    }
    .teams {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: wrap;
      flex-direction: row;
      .team {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        background-color: #cf0607;
        border-radius: 10px;
        width: 200px;
        height: 130px;
        margin: 10px 0;
        p:nth-child(1) {
          font-size: 25px;
          color: #ffffff;
          padding: 0;
          margin: 20px 0 0 0;
        }
        p:nth-child(2) {
          font-size: 25px;
          color: #ffffff;
          padding: 0;
          margin: 0px 0 20px 0;
        }
      }
    }
    .scores {
      margin: 40px 0;
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
      flex-wrap: nowrap;
      flex-direction: row;
      background-color: #cf0607;
      border-radius: 10px;
      .score {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 80px;
        width: 80px;
        height: 80px;
        margin: 10px 0;
        p {
          font-size: 28px;
          color: #000000;
          padding: 0;
          line-height: 100%;
        }
      }
    }

    .sumbitbox {
      text-align: center;
      .sumbit {
        margin: 10px;
        width: 150px;
        height: 50px;
        border-radius: 18px;
        background-color: #cf0607;
        font-size: 26px;
      }
    }
  }
}
</style>