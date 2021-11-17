<template lang="pug">

router-view

</template>

<script setup>

import { onMounted } from 'vue'
import { useStore } from 'vuex'

import fieldTypes from './entities/fields'
import resourceTypes from './entities/resources'

const store = useStore()

const setupFields = fields => store.dispatch('setupFields', fields)

const initialWildFields = () => {
  const resources = () => {
    return new Array(Math.floor(Math.random() * 10)).fill(0).map(() => {
      return {
        ...resourceTypes[Math.floor(Math.random() * resourceTypes.length)],
        amount: Math.floor(Math.random() * 10)
      }
    })
  }

  return {
    ...fieldTypes[fieldTypes.findIndex(type => type.type === 'wild')],
    resources: resources(),
  }
}


onMounted(() => {
  setupFields(new Array(10).fill(0).map(() => new Array(10).fill(initialWildFields())))
})

</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Yuji+Boku&display=swap')

*
  padding: 0
  margin: 0

html, body
  min-height: 100vh

</style>