<template>
  <div>
    <el-container>
      <el-container>
        <el-aside width="200px">

          <el-menu
              default-active="lists"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              style="height: 860px"
              router
          >

            <el-menu-item index="lists">
              <i class="el-icon-menu"></i>
              <span slot="title">后台首页</span>
            </el-menu-item>
            <el-menu-item index="album" >
              <i class="el-icon-document"></i>
              <span slot="title">相册管理</span>
            </el-menu-item>
            <el-menu-item index="commodity">
              <i class="el-icon-setting"></i>
              <span slot="title">商品列表</span>
            </el-menu-item>
          </el-menu>


        </el-aside>
      
        <el-main>
            <list></list>
      <router-view/></el-main>
      </el-container>
    </el-container>




  </div>
</template>

<script>
import list from '../components/HelloWorld'
export default {
  components:{
        list
    },
     mounted(){
    setTimeout(()=>{
      localStorage.clear('token')
      this.$router.push({path:'/'})
    },10000)
  }
}
</script>

<style scoped>

</style>