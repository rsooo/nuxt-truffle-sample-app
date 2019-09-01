<template>
  <section class="section">
    <div class="columns">

      <div class="column">
        <H2> Hello Dapps!</H2>
      </div>

    </div>
    <button class="button is-primary" @click="callDemoContract">Contract 実行</button>
  </section>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import Card from '~/components/Card'
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Index',

  components: {
    Card
  },
  methods: {
    ...mapActions('contract', ['callDemoContract']),
  }
}
</script>
