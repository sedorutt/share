<template>
  <div class="flex">
    <div class="left">
      <SideNavi />
    </div>
    <div class="right">
      <div class="title">
        <p>ホーム</p>
      </div>
      <Message />
    </div>
  </div>
</template>

<script>
import SideNavi from '../components/SideNavi.vue'
import Message from '../components/Message.vue'

export default {
  data(){
    return{
      shares: [{
        name:'太郎',
        like:[],
        share:'初めまして',
      }],
    };
  },
  components:{
    SideNavi,
    Message,
  }
  
  
}
</script>

<style scoped>
.left {
  width: 22%;
  height: 100vh;
}
.right {
  width: 78%;
  height: 100vh;
}
.flex {
  display: flex;
}
.title {
  border-bottom: 1px #fff solid;
  border-left: 1px #fff solid;
  padding: 15px;
}
.title p {
  font-size: 20px;
  font-weight: bold;
}
.icon {
  width: 25px;
  height: 25px;
}
.detail {
  margin-left: 50px;
}
.message {
  padding: 20px;
  border-bottom: 1px #fff solid ;
  border-left: 1px #fff solid ;
}
.name {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}
.text {
  margin-top: 10px;
}
.number {
  margin-left: 10px;
  margin-right: 10px;
}

</style>
