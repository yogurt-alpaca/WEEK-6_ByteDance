<template>
  <div class="all">
    <div class="over"><overlay></overlay></div>
    <div class="productBlock"><byte-product></byte-product></div>
    <div class="positionBlock">
      <h2 data-aos="fade-up">{{ positionTittle }}</h2>
      <div class="positionBox1">
        <position :imgPath="YanfaPath" :positionName="Yanfa"></position>
        <position :imgPath="ProductPath" :positionName="Product"></position>
        <position :imgPath="OperationPath" :positionName="Operation"></position>
        <position :imgPath="DesignPath" :positionName="Design"></position>
      </div>
      <div class="positionBox2">
        <position :imgPath="MarketPath" :positionName="Market"></position>
        <position :imgPath="SellPath" :positionName="Sell"></position>
        <position :imgPath="FunctionPath" :positionName="Function"></position>
        <allposition
          :imgPath="AllPositionPath"
          :positionName="AllPosition"
        ></allposition>
      </div>
    </div>
    <div class="bytestyle">
      <Byte-style></Byte-style>
    </div>
    <div class="ByteLifeBlock">
      <h1 data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      >{{ ByteLife }}</h1>
      <div class="ByteLifeBox">
        <byte-life-text
          :tittle="ByteLife_1_Tittle"
          :subtittle1="ByteLife_1_Subtittle_1"
          :text1="ByteLife_1_Text_1"
          :subtittle2="ByteLife_1_Subtittle_2"
          :text2="ByteLife_1_Text_2"
          :subtittle3="ByteLife_1_Subtittle_3"
          :text3="ByteLife_1_Text_3"
        ></byte-life-text>
        <byte-life-img :ByteLifePath="ByteLife_1_Path"></byte-life-img>
      </div>
      <div class="ByteLifeBox">
        <byte-life-img :ByteLifePath="ByteLife_2_Path"></byte-life-img>
        <byte-life-text
          :tittle="ByteLife_2_Tittle"
          :subtittle1="ByteLife_2_Subtittle_1"
          :text1="ByteLife_2_Text_1"
          :subtittle2="ByteLife_2_Subtittle_2"
          :text2="ByteLife_2_Text_2"
          :subtittle3="ByteLife_2_Subtittle_3"
          :text3="ByteLife_2_Text_3"
        ></byte-life-text>
      </div>
      <div class="ByteLifeBox">
        <byte-life-text
          :tittle="ByteLife_3_Tittle"
          :subtittle1="ByteLife_3_Subtittle_1"
          :text1="ByteLife_3_Text_1"
          :subtittle2="ByteLife_3_Subtittle_2"
          :text2="ByteLife_3_Text_2"
          :subtittle3="ByteLife_3_Subtittle_3"
          :text3="ByteLife_3_Text_3"
        ></byte-life-text>
        <byte-life-img :ByteLifePath="ByteLife_3_Path"></byte-life-img>
      </div>
      <div class="ByteLifeBox">
        <byte-life-img :ByteLifePath="ByteLife_4_Path"></byte-life-img>
        <byte-life-text
          :tittle="ByteLife_4_Tittle"
          :subtittle1="ByteLife_4_Subtittle_1"
          :text1="ByteLife_4_Text_1"
          :subtittle2="ByteLife_4_Subtittle_2"
          :text2="ByteLife_4_Text_2"
          :subtittle3="ByteLife_4_Subtittle_3"
          :text3="ByteLife_4_Text_3"
        ></byte-life-text>
      </div>
      <div class="ByteLifeBox">
        <byte-life-text
          :tittle="ByteLife_5_Tittle"
          :subtittle1="ByteLife_5_Subtittle_1"
          :text1="ByteLife_5_Text_1"
          :subtittle2="ByteLife_5_Subtittle_2"
          :text2="ByteLife_5_Text_2"
          :subtittle3="ByteLife_5_Subtittle_3"
          :text3="ByteLife_5_Text_3"
        ></byte-life-text>
        <byte-life-img :ByteLifePath="ByteLife_5_Path"></byte-life-img>
      </div>
      <div class="ByteLifeFooterBox">
        <byte-life-footer
          :Tittle="ByteLifeFooterTittle"
          :Text="ByteLifeFooterText"
          :ImgPath_1="ByteLifeFooterImgPath_1"
          :ImgPath_2="ByteLifeFooterImgPath_2"
        ></byte-life-footer>
      </div>
    </div>
    <div class="StaffStoryBlock">
      <h2 data-aos="fade-up">{{ StaffStoryHeader }}</h2>
      <div class="StaffStoryBox">
        <staff
          :PortraitPath="Staff_1_portrait_path"
          :Tittle="Staff_1_tittle"
          :Subtittle="Staff_1_subtittle"
          :Text="Staff_1_text"
          :arrow_rightPath="Staff_arrow_path"
        ></staff>
        <staff
          :PortraitPath="Staff_2_portrait_path"
          :Tittle="Staff_2_tittle"
          :Subtittle="Staff_2_subtittle"
          :Text="Staff_2_text"
          :arrow_rightPath="Staff_arrow_path"
        ></staff>
        <staff
          :PortraitPath="Staff_3_portrait_path"
          :Tittle="Staff_3_tittle"
          :Subtittle="Staff_3_subtittle"
          :Text="Staff_3_text"
          :arrow_rightPath="Staff_arrow_path"
        ></staff>
        <a href="####" class="arrow_box" @click="back_top">
          <img src="./assets/arrow_up.png" title="回到顶部" class="arrow_up" />
        </a>
      </div>
    </div>
    <div class="FooterBox">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import overlay from "./components/overlay.vue";
import ByteProduct from "./components/ByteProduct.vue";
import position from "./components/position.vue";
import allposition from "./components/allposition.vue";
import ByteStyle from "./components/ByteStyle.vue";
import ByteLifeText from "./components/ByteLifeText.vue";
import ByteLifeImg from "./components/ByteLifeImg.vue";
import ByteLifeFooter from "./components/ByteLifeFooter.vue";
import Staff from "./components/Staff.vue";
import Footer from "./components/Footer.vue";
import AOS from "aos";
AOS.init({
    duration:800,
  once:true,
});
export default {
  name: "APP",
  components: {
    overlay,
    ByteProduct,
    position,
    allposition,
    ByteStyle,
    ByteLifeText,
    ByteLifeImg,
    ByteLifeFooter,
    Staff,
    Footer,
  },
  data() {
    return {
      fade:true,
      positionTittle: "探索你感兴趣的职位",
      Yanfa: "研发",
      YanfaPath: require("./assets/R&D.png"),
      Product: "产品",
      ProductPath: require("./assets/Product.png"),
      Operation: "运营",
      OperationPath: require("./assets/Operation.png"),
      Design: "设计",
      DesignPath: require("./assets/Design.png"),
      Market: "市场",
      MarketPath: require("./assets/Market.png"),
      Sell: "销售",
      SellPath: require("./assets/Sell.png"),
      Function: "职能/支持",
      FunctionPath: require("./assets/Function.png"),
      AllPosition: "",
      AllPositionPath: require("./assets/AllPosition.png"),
      ByteLife: "字节生活",
      ByteLife_1_Tittle: "在平等开放的氛围里工作",
      ByteLife_1_Subtittle_1: "务实平等的工作氛围",
      ByteLife_1_Text_1:
        "不讲 title 和层级，敢于授权新人，专注完成业务目标，没有领地意识",
      ByteLife_1_Subtittle_2: "弹性灵活的工作时间",
      ByteLife_1_Text_2:
        "上下班无需打卡，效率为先，你的工作节奏，由你自己来掌控",
      ByteLife_1_Subtittle_3: "高效开放的办公环境",
      ByteLife_1_Text_3: "开放式工位，即时讨论，让灵感碰撞不受空间约束",
      ByteLife_1_Path: require("./assets/ByteDanceLife.png"),
      ByteLife_2_Path: require("./assets/ByteDancerGrow.png"),
      ByteLife_2_Tittle: "关注每一位ByteDancer的成长",
      ByteLife_2_Subtittle_1: " ",
      ByteLife_2_Text_1:
        "字节跳动拥有较为完善的职业发展体系，充分贴近年轻员工追求自我发展的定位，为员工提供具有针对性和差异化的培训项目",
      ByteLife_2_Subtittle_2: " ",
      ByteLife_2_Text_2:
        "设立专门的“人才发展”部门，与各业务部门协同推出领导力培养项目跃计划（Jump Program）、研发新员工培训项目 Bootcamp、海外员工培训计划 NBO（New Bytedancer Orientation）、校招生培训项目舞计划（Dance Program）等",
      ByteLife_2_Subtittle_3: " ",
      ByteLife_2_Text_3: " ",
      ByteLife_3_Tittle: "全方位贴心关爱你的生活",
      ByteLife_3_Subtittle_1: "免费三餐和就近住房补贴",
      ByteLife_3_Text_1:
        "提供营养均衡的三餐及下午茶，零食饮料水果无限供应。住房补贴分担你的生活成本，有效节省通勤时间，把精力投资在更有意义的事情上",
      ByteLife_3_Subtittle_2: "完善的商业保险",
      ByteLife_3_Text_2: "五险一金及补充商业保险，公司是你前进路上的坚实后盾",
      ByteLife_3_Subtittle_3: "多样的健康关怀",
      ByteLife_3_Text_3:
        "年度体检，免费健身房和康体娱乐中心，“字节心晴”心理关怀福利，帮助大家健康快乐地工作和生活",
      ByteLife_3_Path: require("./assets/AllDirection.png"),
      ByteLife_4_Path: require("./assets/Family.png"),
      ByteLife_4_Tittle: "感恩家人的支持与陪伴",
      ByteLife_4_Subtittle_1: "温暖的家庭礼物",
      ByteLife_4_Text_1:
        "儿童节亲子礼物，春节家书礼盒，你和家人在一起的每个珍贵瞬间，也牵挂在我们的心上",
      ByteLife_4_Subtittle_2: "欢乐有趣的家庭活动日",
      ByteLife_4_Text_2: "请家人来看看 ByteDancer 们每天创造成绩的地方",
      ByteLife_4_Subtittle_3: " ",
      ByteLife_4_Text_3: " ",
      ByteLife_5_Tittle: "信息助力公益创造社会价值",
      ByteLife_5_Subtittle_1: "头条寻人 科技向善",
      ByteLife_5_Text_1:
        "“头条寻人”是一个面向全国的公益寻人项目。基于庞大的用户量，“头条寻人”根据走失人员的走失位置，回溯其有可能出现的地点，精确地将走失信息推送给该位置附近的用户。每一位打开定位和弹窗功能的用户，都有可能参与到寻人的公益活动中，帮助失散家庭团圆。截至 2020 年 4 月 27 日，已经帮助 13000 个家庭团圆，最快找到走失者仅用时 60 秒",
      ByteLife_5_Subtittle_2: " ",
      ByteLife_5_Text_2: " ",
      ByteLife_5_Subtittle_3: " ",
      ByteLife_5_Text_3: " ",
      ByteLife_5_Path: require("./assets/Commonweal.png"),
      ByteLifeFooterTittle: "抖音助力文旅扶贫",
      ByteLifeFooterText:
        "通过字节跳动在流量倾斜、人才培训、产品扶持和抖音认证的四个方面投入及运营，帮助国家级贫困县的特色文旅资源打造品牌，提升拉动当地文旅品牌影响力并持续带动相关产业的经营发展。截至目前，“山里 DOU 是好风光”已落地实施河南栾川、山西永和、四川甘孜稻城亚丁等项目",
      ByteLifeFooterImgPath_1: require("./assets/PovertyRelif_1.jpg"),
      ByteLifeFooterImgPath_2: require("./assets/PovertyRelif_2.jpg"),
      StaffStoryHeader: "员工故事",
      Staff_1_portrait_path: require("./assets/ShenChi.png"),
      Staff_1_tittle: "从大学老师到算法工程师",
      Staff_1_subtittle: "沈池|AI-Lab图像算法",
      Staff_1_text:
        "怀着一颗想出来闯荡的心，从学术界跳到了工作界；公司有着丰富的应用场景和海量数据资源，技术落地非常有保证。",
      Staff_arrow_path: require("./assets/arrow_right.png"),
      Staff_2_portrait_path: require("./assets/Gill.png"),
      Staff_2_tittle: "在多元兼容的环境里持续成长",
      Staff_2_subtittle: "Gill | 国际化产品经理",
      Staff_2_text:
        "不同文化背景下的沟通是一种挑战，公司鼓励多元兼容，提倡集思广益，让我看到了广大可能性和成长空间。",
      Staff_3_portrait_path: require("./assets/ZuoRuzhe.jpg"),
      Staff_3_tittle: "在这里，看见更大的世界",
      Staff_3_subtittle: "左儒哲 | 飞书-客户端",
      Staff_3_text:
        "比起其他公司，字节跳动可能更浪漫，或者说，有更大的梦想。这里不设边界只要连接人与信息的事情，我们都会尝试…",
    };
  },
  methods: {
    back_top() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  list-style: none;
  color: #000;
}
li {
  list-style: none;
}
.h {
  width: 1254px;
  margin: 0 auto;
}
.positionBlock h2 {
  text-align: center;
  color: #1f2329;
  font-size: 32px;
  margin-top: 50px;
}
.positionBlock .positionBox1 {
  display: flex;
  justify-content: space-evenly;
  margin-top: 113px;
}
.positionBlock .positionBox2 {
  display: flex;
  justify-content: space-evenly;
}
.ByteLifeBlock {
  padding-left: 96px;
}
.ByteLifeBlock h1 {
  margin-top: 30px;
}
.ByteLifeBox {
  display: flex;
  justify-content: space-between;
  padding-top: 90px;
  padding-bottom: 140px;
}
.StaffStoryBlock {
  position: relative;
  padding-bottom: 60px;
}
.StaffStoryBlock h2 {
  text-align: center;
  color: #1f2329;
  font-size: 32px;
  padding-bottom: 60px;
}
.StaffStoryBox {
  display: flex;
  justify-content: center;
}
.FooterBox {
  height: 100px;
  padding: 70px 0 60px 0;
  background: #1f2329;
}
.arrow_box {
  position: absolute;
  right: 40px;
  bottom: 70px;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 10px 30px 0 rgb(136 150 171 / 25%);
}
.arrow_up {
  width: 16px;
  height: 16px;
  padding-top: 12px;
}
</style>

