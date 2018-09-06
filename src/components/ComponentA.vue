<!-- VUEX version -->

<template>
  <div class="component-a">
    Component A:
    Count is : {{ count }}
    <button @click='INCREMENT_COUNT'> + </button>
    <button @click='DECREMENT_COUNT'> - </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ComponentA',
  computed: {
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations([
      'INCREMENT_COUNT',
      'DECREMENT_COUNT',
    ]),
  },
}
</script>
