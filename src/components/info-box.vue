<template lang="pug">

.info-box(v-if="Object.keys(hovered).length")
  .info-box-title
    | {{ hovered.text }}
  .info-box-content
    .info-box-resource(v-for="resource in hovered.resources")
      img.miniaturized-resource(
        :src="imageUrl(resource.img)"
      )
      | {{ resource.amount }}

</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

import imageUrl from '../functions/image-url'

const store = useStore()

const hovered = computed(() => store.getters.hovered)

</script>

<style lang="sass">

.info-box
  position: fixed
  top: 0
  left: 0
  width: 300px
  height: 150px
  border-radius: 0 0 10px 0
  
  background-color: rgba(0, 0, 0, .7)

.info-box-title
  color: #fff
  font-size: 1.5em
  text-align: center
  padding: 10px
  font-family: 'Yuji Boku', serif


.info-box-content
  display: flex
  flex-wrap: wrap

.info-box-resource
  margin: 5px
  padding: 5px
  border: 1px solid #fff
  border-radius: 9999px
  min-width: 20px
  min-height: 20px
  background-color: #fff
  text-align: center
  font-family: sans-serif
  font-size: 1.2rem
  font-weight: bold

</style>