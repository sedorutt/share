<template>
  <div>
    <HeaderAuth />
    <div class="card">
      <p>ログイン</p>
      <div class="form">
        <input type="email" placeholder="メールアドレス">
        <input type="password" placeholder="パスワード">
        <button>ログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth.vue';
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
  border-radius: 5px;
  cursor: pointer;
}
.card {
  margin: 100px auto ;
  width: 350px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}
.card p {
  color: #000;
  font-weight: bold;
  text-align: center;
}
input {
  margin-top: 15px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px #000 solid ;
  color: #000;
}
.form {
  text-align: center;
}
.form button {
  margin-top: 15px;
}

</style>
