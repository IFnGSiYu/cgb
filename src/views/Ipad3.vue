<template>
  <div id="ipad3">
    <img class="logo" src="@/assets/ipad/logo.png" alt="" />
    <div class="title">
      <img src="@/assets/ipad/ipadtitle.png" alt="" />
    </div>
    <div class="content">
      <p class="teamname">第{{ playerid }}组：{{ players[playerid] }}</p>
      <div class="teams">
        <div v-for="(item, index) in qaData" :key="index">
          <p>{{ item.ques }}</p>
          <el-slider
            class="slider"
            v-model="valueArr[index]"
            :step="1"
            :marks="marks"
            show-stops
            show-input
            :max="item.score"
          >
          </el-slider>
        </div>
      </div>
      <div class="sumbitbox">
        <el-button type="danger" class="sumbit" @click="onSumbit"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Ipad2 extends Vue {
  private playerid = 1
  private players = [
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
    '蔡徐坤',
  ]

  private valueArr = []
  private marks = { 0: '0', 20: '20' }
  private qaData = [
    { ques: '1、风险建模独特见解（20分）', score: 20 },
    { ques: '2、风险建模专业技能（20分）', score: 20 },
    { ques: '3、建模思想可操作性（20分）', score: 20 },
    { ques: '4、演讲与表达能力（20分）', score: 20 },
    { ques: '5、仪容仪表 举止谈吐（20分）', score: 20 },
  ]
  private onSumbit() {
    console.log(this.valueArr)
  }
}
</script>
<style lang='less' scoped>
#ipad3 {
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
  /deep/ .el-slider__button {
    border: 2px solid #cf0607;
    background-color: #cf0607;
  }
  /deep/ .el-slider__bar {
    background-color: #cf0607;
  }
  .content {
    width: 90%;
    height: 84%;
    background-color: #ffffff;
    margin: 10px auto 5% auto;
    padding: 0 10px;

    .teamname {
      text-align: center;
      font-size: 28px;
      color: #940400;
      font-weight: bold;
      padding: 0;
      margin: 0;
    }
    .teams {
      padding: 0 10px;
      //   width: 100%;
      p {
        font-size: 22px;
      }
      .slider {
        // width: 100%;
        margin: auto;
        height: 50px;
      }
    }
    .sumbitbox {
      text-align: center;
      margin: 50px;
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