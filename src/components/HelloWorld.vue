<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/lists' }"
        >后台首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name,
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.name = val.meta.name;
      },
    },
  },
};
</script>

<style>
</style>