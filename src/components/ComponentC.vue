<!-- VUEX version -->

<template lang="html">
  <div class="component-c">
    <div>
      <button class='puppy-btn' @click='getRandomImage'>Get a puppy</button>
    </div>
    <div>
      <loader v-if='requestInProgress'/>
      <img v-else class='puppy-img' :src='"../assets/"+imageNumber+".jpg"' />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'


export default {
  computed: {
    ...mapState(['imageNumber', 'requestInProgress'])
  },
  methods: {
    ...mapActions(['getRandomImage']),
  },
}
</script>
