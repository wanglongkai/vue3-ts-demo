<script setup lang='ts'>
import SvgIcon from '@/components/SvgIcon/index.vue';
import { Edit, Loading } from '@element-plus/icons-vue';
import { useNamespace } from 'element-plus';
const ns = useNamespace('w-icons');

</script>

<template>
  <h1>SVGIcon图标引入</h1>
  <div class="svgbox">
    <SvgIcon icon-name="crmico-xiangmuguanli" />
    <Edit class="icons" />
    <el-icon class="is-loading">
      <Loading />
    </el-icon>
    <p :class="[ns.b()]">test</p>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:map';
$font: (color: red, size: 25px);
$m_color: map.merge($font, ('color': blue));
.svgbox{
  color: map-get($m_color, 'color');
}
.icons {
  width: 30px;
  height: 30px;
}
@include b(w-icons){
  font-size: 25px;
}
</style>