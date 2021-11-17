<template lang="pug">

.home-container
  info-box
  selected-box
  .fields(@mouseleave="cleanHovered()")
    .row-field(v-for="row in fields")
      .col-field(v-for="col in row")
        .field-container(
          @mouseover="hoverField(col)"
          @click="selectField(col)"
        )

</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

import imageUrl from '../functions/image-url'

import InfoBox from '../components/info-box.vue'
import SelectedBox from '../components/selected-box.vue'

const store = useStore()

const fields = computed(() => store.getters.fields)

const cleanHovered = () => store.dispatch('cleanHovered')
const hoverField = field => store.dispatch('hoverField', field)
const selectField = field => store.dispatch('selectField', field)

</script>

<style lang="sass">


.home-container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  min-height: 100vh

.fields
  background-color: #eee
  transform: translate(0, 0) rotateX(60deg) rotateY(0) rotateZ(45deg)

.row-field
  width: 100%
  display: flex
  transform-style: preserve-3d

.col-field
  width: 76px
  height: 76px
  background-color: #ccc
  border: 2px solid #999
  transform-style: preserve-3d

.field-container
  position: relative
  width: 100%
  height: 100%
  transform-style: preserve-3d

  &:hover
    background-color: #ddd

.miniaturized-resource
  width: 20px
  height: 20px
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  border-radius: 50%
  margin-right: 5px

</style>