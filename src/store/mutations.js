export default {
  HOVERED (state, field) {
    state.hovered = field
  },

  SELECTED (state, field) {
    state.selected = field
  },

  SETUP_FIELDS (state, fields) {
    state.fields = fields
  }
}
