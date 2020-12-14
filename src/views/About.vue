<template>
  <div class="about">
        <el-container>
          <el-header>

            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                     router
            >
              <el-menu-item index="homepage">首页</el-menu-item>
              <el-menu-item index="commoditys" >商品</el-menu-item>
              <el-menu-item index="order" >订单</el-menu-item>
              <el-menu-item index="member" >会员</el-menu-item>

              <el-menu-item>
                <el-popover
                    placement="top-start"
                    width="80"
                    trigger="hover">
                  <button @click="go">退出登录</button>
                  <el-button slot="reference">设置</el-button>
                </el-popover>
              </el-menu-item>

            </el-menu>

          </el-header>

          <el-main>
            
            <router-view>
            
            </router-view>
            
            </el-main>
        </el-container>
  </div>
</template>
<script>
export  default {
  data(){
    return{
      activeIndex:'index',
    }
  },
  methods:{
      go(){
        localStorage.clear('token')
        this.$router.push({path:'/'})
      }
  },
 
  

}
</script>
<style scoped>
.el-header, .el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 800px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;

}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>