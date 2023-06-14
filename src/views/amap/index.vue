<template>
  <div id="container"></div>
</template>

<script lang='ts' setup>
import * as AMapLoader from "@amap/amap-jsapi-loader";
import { onMounted } from 'vue';
onMounted(() => {
  AMapLoader.load({
    key: '6e7438ab334a6fa5bcdb5caf3bf67dd8',
    version: "2.0",
  })
    .then((AMap: any) => {
      if (AMap) {
        let map = new AMap.Map("container", {
          zoom:10,           //初始化地图级别
          center:[116.397428, 39.90923], //初始化地图中心点位置
          Loca:{                // 是否加载 Loca， 缺省不加载
            version: '2.0.0'  // Loca 版本，缺省 1.3.2
          },
        });

        const marker = new AMap.Marker({
          position:[116.39, 39.9] //位置
        })
        map.add(marker); //添加到地图

        const lineArr = [
          [116.368904, 39.913423],
          [116.382122, 39.901176],
          [116.387271, 39.912501],
          [116.398258, 39.904600]
        ];
        const polyline = new AMap.Polyline({
          path: lineArr,          // 设置线覆盖物路径
          strokeColor: "#3366FF", // 线颜色
          strokeWeight: 5,        // 线宽
          strokeStyle: "solid",   // 线样式
        });
        map.add(polyline);

        map.on('click', (e: any) => {
          console.log(`output->e`,e)
        })

      }
    })
});
</script>

<style scoped lang='scss'>
#container{
  height: 500px;
}
</style>