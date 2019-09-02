<template>
  <section class="section">
    <div class="columns">

      <div class="column">
        <H2> Hello Dapps!</H2>
      </div>

    </div>
    <b-field label="Input for Contract">
      <b-input v-model="text"></b-input>
    </b-field>

    <button class="button is-primary" @click="callDemoContract(text)">Execute Contract</button>
  </section>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import Card from '~/components/Card'
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Index',
  data:  () => ({
    text: "input"
  }),
  mounted(){
    console.log('mounted')
    this.getContractData()
  },
  components: {
    Card,
  },
  computed: { },
  methods: {
    ...mapActions('contract', ['callDemoContract', 'getContractData']),
  }
}
</script>
