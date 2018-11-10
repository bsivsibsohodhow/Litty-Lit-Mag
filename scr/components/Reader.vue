<template>
  <div>
    <h1>flowers</h1>
    <div class="content" v-for="flower in flowers">
      <div class="title">{{ flower.title }}</div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['flowers']
};
</script>

<style scoped>
h1 {
  font-family: 'Futura';
  font-size: 32px;
  color: #474747;
}
p {
  font-family: 'Futura';
  font-size: 16px;
  color: #474747;
}
</style>

