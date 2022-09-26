<template>
  <div class="PageAnime">
    <h1>Anime</h1>

    <ul v-for="items in saga.files" :key="items.saga">
      <li>
        <router-link
          :to="{
            name: 'Video',
            params: { name: items.file_name, link: items.file_code },
          }"
          >{{ items.file_name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
  
  <script>
import { http } from "../assets/services/http-common";

export default {
  name: "PageAnime",

  data() {
    return {
      saga: "",
    };
  },

  mounted() {
    this.callAnime();
  },

  methods: {
    callAnime() {
      http
        .get(
          "files?token=5296b917ac756c54806f9d44d020083c2bqnj&orderBy=file_name&dir=asc&offset=0&path=%2F%2FAnime%2F" +
            this.$route.params.name +
            "%2F" +
            this.$route.params.saga +
            "&limit=100"
        )
        .then((res) => {
          this.saga = res.data.data;
          console.log(this.saga);
        });
    },
  },
};
</script>
  
  <style scoped lang="scss">
</style>