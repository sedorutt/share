<template>
  <div>
    <HeaderAuth />
    <div class="card">
      <p>新規登録</p>
      <div class="form">
        <input type="text" placeholder="ユーザーネーム">
        <input type="text" placeholder="プロフィール">
        <input type="email" placeholder="メールアドレス">
        <input type="password" placeholder="パスワード">
        <button @click="auth">新規登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth.vue'
export default {
  data(){
    return {

    };
  },
  components:{
    HeaderAuth,
  }
}
</script>

<style scoped>
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  cursor: pointer;
}
.card {
  margin: 100px auto;
  width: 350px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}
input {
  width: 80%;
  margin-top: 15px;
  border-radius: 15px;
  padding: 10px;
  border: 1px #000 solid;
  color: #000;
}
.form {
  text-align: center;
}
.form button {
  margin-top: 15px;
}
</style>