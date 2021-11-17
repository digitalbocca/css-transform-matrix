export default {
  hoverField ({ commit }, field) {
    commit('HOVERED', field)
  },

  cleanHovered ({ commit }) {
    commit('HOVERED', {})
  },

  selectField ({ commit }, field) {
    commit('SELECTED', field)
  },

  setupFields ({ commit }, fields) {
    commit('SETUP_FIELDS', fields)
  }
}
