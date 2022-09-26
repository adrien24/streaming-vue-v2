<template>
  <div class="video">
    <iframe
      :src="'https://uptostream.com/iframe/' + fileCode"
      width="640"
      height="360"
      scrolling="no"
      frameborder="0"
      allowfullscreen
      webkitallowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoView",

  data() {
    return {
      fileCode: "",
    };
  },

  mounted() {
    if (this.$route.params.link !== undefined) {
      localStorage.setItem("fileCode", this.$route.params.link);
    }
    this.fileCode = localStorage.getItem("fileCode");
    console.log(this.fileCode);
  },
};
</script>

<style scoped lang="scss">
body {
  display: none !important;
}
</style>