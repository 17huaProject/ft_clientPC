<template>
  <div id="indexLogoArea">
    <!-- <img v-if="PageFrom=='list'" src="http://image.17hua.me/upload/image/201709/1505371271267195.png">
    <img v-else src="http://image.17hua.me/upload/image/201709/1505371270698932.png"> -->
    <img  src="//image.17hua.me/upload/image/201711/1511776526681625.png">
    <img  src="//image.17hua.me/upload/image/201711/1511776526696568.png">
  </div>
</template>

<script>
export default {
  props: ['PageFrom']
}
</script>

<style>
#indexLogoArea {
  display: flex;
}

#indexLogoArea img {
  align-self: center;
  height: 30px;
}
#indexLogoArea img:last-child{
  align-self: center;
  height: 20px;
  margin-left: 5px;
}
</style>
