<template>
  <div>
    <div class="left-padding">
        <img src="../assets/logo.png" class="logo">
        <div class="flex icon-field">
          <img src="../assets/home.png" class="icon">
          <p>ホーム</p>
        </div>
        <div class="flex icon-field">
          <img src="../assets/profile.png" class="icon">
          <p>プロフィール</p>
        </div>
        <div class="flex icon-field">
          <img src="../assets/logout.png" class="icon">
          <p>ログアウト</p>
        </div>
      </div>
      <ShareMessage />
  </div>  
</template>

<script>
import ShareMessage from '../components/ShareMessage.vue'
export default {
  data(){
    return {

    };
  },
  components:{
    ShareMessage,
  }
  
}
</script>

<style scoped>
.flex {
  display: flex;
}
.left-padding {
  margin: 20px;
}
.logo {
  width: 100px;
}
.icon-field {
  margin-top: 15px;
  cursor: pointer;
}
.icon-field p {
  font-size: 16px;
  padding-left: 15px;
}
.icon {
  width: 25px;
  height: 25px;
}
</style>