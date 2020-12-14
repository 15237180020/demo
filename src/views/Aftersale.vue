<template>
<div>
    Aftersale
    售后服务
</div>
</template>

<script>
export default {
 mounted(){
    setTimeout(()=>{
      localStorage.clear('token')
      this.$router.push({path:'/'})
    },10000)
  }
}
</script>

<style>

</style>