<template>
  <div class="hello">
    <div class="left">
      <h1>{{ tipoUsuario }}</h1>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState([
      'tipoUsuario'
    ]),
    // otras propiedades
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
