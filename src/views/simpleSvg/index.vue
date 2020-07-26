<template>
  <div class="container">
    <div class="mainLayout">
      <Row>
        <i-col span="8">
          <Card class="cardStyle">
            <p slot="title">基础正方形</p>
            <div id="simpleSquare"></div>
          </Card>
        </i-col>
        <i-col span="8">
          <Card class="cardStyle">
            <p slot="title">基础圆形</p>
            <div id="simpleCircle"></div>
          </Card>
        </i-col>
        <i-col span="8">
          <Card class="cardStyle">
            <p slot="title">基础多边形</p>
            <div id="simplePolygonModel"></div>
          </Card>
        </i-col>
        <i-col span="8">
          <Card class="cardStyle">
            <p slot="title">基础线条</p>
            <div id="simpleLine"></div>
          </Card>
        </i-col>
        <i-col span="8">
          <Card class="cardStyle">
            <p slot="title">自定义图片</p>
            <div id="customizeImage"></div>
          </Card>
        </i-col>
        <i-col span="8">
          <Card class="cardStyle">
            <p slot="title">自定义path路径</p>
            <div id="simplePath"></div>
          </Card>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
import { SVG } from "@svgdotjs/svg.js";
import LovelyDog from "@/assets/lovelyDog.jpg";
export default {
  data() {
    return {};
  },
  mounted() {
    // 基础正方形
    let squareModel = SVG()
      .addTo("#simpleSquare")
      .size("100%", "100%");
    squareModel.rect(100, 100).attr({ fill: "#00B1B6" });

    //基础圆形
    let circleModel = SVG()
      .addTo("#simpleCircle")
      .size("100%", "100%");
    circleModel
      .circle(100)
      .radius(50)
      .attr({ fill: "#0284A3" });

    //多边形
    let polygonModel = SVG()
      .addTo("#simplePolygonModel")
      .size(100, 100);
    polygonModel
      .polygon("0,0,100,50,50,100")
      .fill("#175369")
      .stroke({ width: 1 });

    //线条
    let lineModel = SVG()
      .addTo("#simpleLine")
      .size(100, 100);
    lineModel.line(0, 0, 100, 150).stroke({ width: 5, color: "#6488B7" });

    //自定义图片
    let imageModel = SVG()
      .addTo("#customizeImage")
      .size("100%", "100%");
    imageModel.image(LovelyDog);

    //自定义path路径
    let pathModel = SVG()
      .addTo("#simplePath")
      .size(100, 100);
    pathModel
      .path("M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z")
      .fill("#495975");
  },
  methods: {}
};
</script>

<style scoped>
::v-deep .ivu-card-bordered {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.container {
  width: 90vw;
  height: 90vh;
}
.mainLayout {
  width: 60%;
  height: 100%;
  margin: 0 auto;
}
.cardStyle {
  width: 300px;
  height: 300px;
  padding: 0 10px 20px 10px;
  margin-right: 20px;
  margin-left: 20px;
}
#simpleSquare {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  padding: 30px 0;
}
#simpleCircle {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  padding: 30px 0;
}
#simplePolygonModel {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  padding: 30px 0;
}
#simpleLine {
  width: 50%;
  height: 50%;
  margin: 0 auto;
  padding: 30px 0;
}
#customizeImage {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px 0;
}
#simplePath {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
}
</style>