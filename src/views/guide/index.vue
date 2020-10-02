<template>
   <div class="mainLayout">
     <!-- <span>Welcome!</span> -->
     <Card class="guideList">
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
           SVG.js--Demo实例
        </p>
          <List>
            <ListItem>
               <Button type="text" to="/basicShape">实例1: 绘制SVG基础图形</Button>
            </ListItem>
            <ListItem>
               <Button type="text" to="/basicShape">实例2: 实战SVG动画</Button>
            </ListItem>
        </List>
        
     </Card>
   </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.mainLayout {
  background: url('../../assets/bg.jpeg');
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.guideList {
  width: 50%;
  height: 50%;
}

</style>