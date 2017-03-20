<template lang="html">
  <div class="app">

  <div class="page">
    <div class="section">
      <div class="container">
        <p class="control has-icon">
          <input class="input is-large" type="text" placeholder="Search">
          <span class="icon is-small fa fa-search" aria-hidden="true"></span>
        </p>
        <div class="panel">
          <p class="panel-heading">Glass Animals</p>
          <div class="results">
            <song-item v-for="item in tracks" v-bind:track="item"></song-item>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import SongItem from './song-item.vue';

export default {
  components: {
    SongItem,
  },

  created() {
    fetch('https://api.spotify.com/v1/search?query=glass+animals&type=track&offset=0&limit=20')
    .then(r => r.json())
    .then((data) => {
      this.tracks = data.tracks.items;
    });
  },

  data() {
    return {
      tracks: [],
    };
  },

  methods: {

  },
};
</script>
