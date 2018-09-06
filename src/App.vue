<template>
  <div id="app">
    <h1>Vuex example</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/action">Action</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.component-c {
  background-color: grey;
}
.puppy-btn {
  width: 150px;
}
.puppy-img {
  max-height: 300px;
}
.component-b {
  background-color: lightblue;
}
.component-a {
  background-color: purple;
  color: white;
}
button {
  width: 50px;
  font-size: 20px;
  margin: 0 5px;
}
</style>
