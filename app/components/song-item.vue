<template lang="html">
  <div class="SongItem">
    <div class="panel-block">
      <div class="media-left track__media">
        <span class="track__frame image is-64x64">
          <img v-bind:src="track.album.images[0].url" alt="">
        </span>
      </div>
      <div class="media-content">
        <p class="track__artist title is-4">{{ track.artists[0].name }}</p>
        <p class="track__name subtitle">{{ track.name }}</p>
      </div>
      <div class="media-right">
        <a v-bind:href="track.external_urls.spotify"><span class="icon is-large fa fa-spotify" aria hidden="true"></span></a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['track'],

  data() {
    return {
      images: [],
    };
  },

  methods: {

  },
};
</script>
