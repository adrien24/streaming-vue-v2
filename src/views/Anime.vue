<template>
  <div class="anime">
    <h1>Animes</h1>

    <ul v-for="items in arr" :key="items.arr">
      <li>
        <router-link :to="{ name: 'PageAnime', params: { name: items.name } }">
          <img :src="'https://image.tmdb.org/t/p/w300' + items.poster_path" />
          <h2>{{ items.name }}</h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { http, tmdb } from "../assets/services/http-common";

export default {
  name: "AnimeView",

  data() {
    return {
      cat: "",
      tmdb: [],
      arr: [],
      res: [],
      element: "",
    };
  },

  mounted() {
    this.callAnime();
  },

  methods: {
    async callAnime() {
      await http
        .get(
          "files?token=5296b917ac756c54806f9d44d020083c2bqnj&orderBy=file_name&dir=asc&offset=0&path=%2F%2FAnime&limit=100"
        )
        .then((cat) => {
          this.cat = cat.data.data;

          for (let i = 0; i < this.cat.folders.length; i++) {
            let name = this.cat.folders[i].name;
            tmdb
              .get(
                "tv?api_key=a769aba61ba3f4584d34a56d5f6ece11&query=" +
                  name +
                  "&language=fr"
              )
              .then((res) => {
                this.res = res.data.results;

                this.arr.push({
                  poster_path: this.res[0].poster_path,
                  name: this.cat.folders[i].name,
                });

                console.log(this.arr);
              });
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
</style>