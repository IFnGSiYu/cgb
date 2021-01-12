<template>
  <div id="ipad1">
    <img class="logo" src="@/assets/ipad/logo.png" alt="" />
    <div class="title">
      <img src="@/assets/ipad/ipadtitle.png" alt="" />
    </div>
    <div class="content">
      <p class="teamname">第{{ teamid | numberfilter }}组：{{ team }}</p>
      <template v-for="items in qaData">
        <p class="bigtitle" :key="items.title">
          {{ items.title }}
        </p>
        <template v-for="item in items.qaArr">
          <div :key="item.id">
            <p>{{ item.ques }}</p>
            <el-slider
              class="slider"
              v-model="valueArr[item.id - 1]"
              :step="1"
              :marks="marks[item.id - 1]"
              show-stops
              show-input
              :max="item.score"
            >
            </el-slider>
          </div>
        </template>
      </template>
      <div class="sumbitbox">
        <el-button type="danger" class="sumbit" @click="onSumbit"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
// import { Dialog } from 'vant';
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    //   [Dialog.Component.name]: Dialog.Component,
  },
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
      ]
      const text = changeNum[num]
      return text
    },
  },
})
export default class Ipad1 extends Vue {
  private qaData = [
    {
      title: '一、创新度（20分）',
      qaArr: [
        {
          ques:
            '1、模型思路新性（10分），按照高中低对模型思路新性进行打分，高8-10分，中5-7分，低1-4分。',
          score: 10,
          id: 1,
        },
        {
          ques:
            '2、模型构思完整性（10分），按照高中低对模型思路完整性进行打分，高8-10分，中5-7  分，低1-4分。',
          score: 10,
          id: 2,
        },
      ],
    },
    {
      title: '二、风险揭示能力（20分）',
      qaArr: [
        {
          ques:
            '模型揭示的风险大小，以及疑点线索与风险的相关程度的得分（20分）按照高中低风（资金损失、声誉风险、监管处罚等）进行判断，落入高风险区的得分15-20分，中风险区7-14分，低风险去1-6分',
          score: 20,
          id: 3,
        },
      ],
    },
    {
      title: '三、实用性（20分）',
      qaArr: [
        {
          ques:
            '1、适用性（10分）， 模型能广泛应用于工作场景，按照高中低进行打分，多场8-10分，一般4-7分，较少场景1-3分。',
          score: 10,
          id: 4,
        },
        {
          ques:
            '2、易用性（10分），模型结果可针对不同群体进行推广的，推广性高的8-10分，一般4-7分，推广性低1-3分',
          score: 10,
          id: 5,
        },
      ],
    },
    {
      title: '四、展示效果（40分）',
      qaArr: [
        {
          ques:
            '1、展示主要内容能紧紧围绕主题，深入浅出，观点正确、鲜明、见解独到，内容充实具体（15分）',
          score: 15,
          id: 6,
        },
        {
          ques: '2、展示的形式新颖，构思巧妙，引入入胜。（15分）',
          score: 15,
          id: 7,
        },
        {
          ques:
            '3、展示者语速恰当，语气、语调、音量、节奏张弛符合思想感情的起伏变化，能熟练表达的。（10分）',
          score: 10,
          id: 8,
        },
      ],
    },
  ]
  private teamid = 1
  private team = '深圳战队'
  private valueArr = []
  private marks = [
    { 0: '0', 10: '10' },
    { 0: '0', 10: '10' },
    { 0: '0', 20: '20' },
    { 0: '0', 10: '10' },
    { 0: '0', 10: '10' },
    { 0: '0', 15: '15' },
    { 0: '0', 15: '15' },
    { 0: '0', 10: '10' },
  ]
  private onSumbit() {
    // console.log(this.valueArr)
    // console.log(this.$dialog.confirm)

    const r = confirm('确认提交')
    if (r == true) {
      console.log('111')
    } else {
      console.log('222')
    }
    Vue.axios
      .get('http://serve.jfyf.com/xrf_game/2020/dec/cgb/api.php', {
        params: {
          a: 'rank',
        },
      })
      .then((response) => {
        console.log(response.data)
        if (response.data.data.type == 0) {
          // alert("活动未开始");
          if (confirm('活动未开始,请开始后点击确定')) {
            console.log('111')
          } else {
            console.log('222')
          }
        } else {
          // this.items[0].name = "sdasdsad" + this.numner;
        }
      })
  }
}
</script>
<style  lang='less' scoped>
#ipad1 {
  background-image: url(../assets/ipad/ipadbg.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: absolute;
  //   left: 0;
  //   top: 0;
  //   height: 100%;
  //   width: 100%;
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
    margin: auto;
    height: 84%;
    background-color: #ffffff;
    margin: 10px auto 5% auto;
    padding: 0 10px;

    /deep/ .el-slider__button {
      border: 2px solid #cf0607;
      background-color: #cf0607;
    }
    /deep/ .el-slider__bar {
      background-color: #cf0607;
    }
    .teamname {
      text-align: center;
      font-size: 28px;
      color: #940400;
      font-weight: bold;
      padding: 0;
      margin: 0;
    }
    .bigtitle {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      font-size: 16px;
      font-weight: bold;
      padding: 0;
      margin: 0;
    }
    .slider {
      width: 90%;
      margin: auto;
      height: 50px;
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