<!---纯静态页面 面包屑文件--->
<template>
  <div class="nav-breadcrumb-wrap">
    <div class="container">
      <nav class="nav-breadcrumb">
        <a href="/">Home</a>
        <!-----做成通用形式，需要一个插槽---->
        <!---<span>Goods</span>---->
        <slot ></slot><!---name="bread"--->
        <!---多个插槽-->
        <!---slot name="B"></slot>--->
      </nav>
    </div>
  </div>
</template>
