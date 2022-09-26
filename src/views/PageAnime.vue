<template>
  <div class="PageAnime">
    <h1>Anime</h1>
    <div class="saga" v-if="TheSaga === true">
      <ul v-for="items in saga.folders" :key="items.saga">
        <li>
          <router-link
            :to="{
              name: 'PageAnimeSaga',
              params: { saga: items.name, name: $route.params.name },
            }"
            >{{ items.name }}</router-link
          >
        </li>
      </ul>
    </div>

    <div class="anime" v-if="TheSaga === false">
      <ul v-for="items in saga.files" :key="items.saga2">
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
  </div>
</template>

<script>
import { http } from "../assets/services/http-common";

export default {
  name: "PageAnime",

  data() {
    return {
      saga: "",
      TheSaga: true,
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
            "&limit=100"
        )
        .then((res) => {
          this.saga = res.data.data;
          if (this.saga.folders.length !== 0) {
            this.TheSaga = true;
          } else {
            this.TheSaga = false;
            console.log(this.TheSaga);
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
</style>