<template>
  <div class="home">
            <div class="box">
              <input type="text" v-model="name" placeholder="请输入用户名" class="name">
              <input type="password" v-model="pass" placeholder="请输入密码" class="pass">
              <button @click="login" class="btn">登录</button>
            </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'top',
        name: '',
        pass: '',
    };
  },
  methods:{
    login(){
        this.$axios.post('http://ceshi5.dishait.cn/admin/login',{username:this.name,password:this.pass}).then(res=>{ 
          localStorage.token=JSON.stringify(res.data.data.token)
            this.$router.push({path:'/About'})
        })
        .catch(() => {
          alert("登录失败");
        });
    }
  }
}
</script>
<style>
.box{
  width: 500px;
  height: 300px;
  border: 1px solid gray;
  margin: 50px auto;
}
.name{
    margin-top: 30px;
  width: 80%;
  height: 40px;
  margin-left: 50px;
  outline: none;
}
.pass{
  margin-top: 30px;
  width: 80%;
  height: 40px;
  margin-left: 50px;
  outline: none;
}
.btn{
  width: 80px;
  height: 40px;
  margin-left: 200px;
  margin-top: 30px;
}
</style>
