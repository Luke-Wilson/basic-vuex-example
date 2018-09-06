<!-- VUEX version -->

<template lang="html">
  <div class="component-b">
    Component B:
    Count is : {{ count }}
    <button @click='increment'> + </button>
    <button @click='decrement'> - </button>
  </div>
</template>

<script>


export default {
  name: 'ComponentB',
  computed: {
    count() {
      return this.$store.state.count
    },
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT_COUNT')
    },
    decrement() {
      this.$store.commit('DECREMENT_COUNT')
    },
  },
}
</script>
