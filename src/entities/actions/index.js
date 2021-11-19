const clean = {
  type: 'CLEAN',
  text: 'Limpar',
  executionTime: 60,
  startTask (field) {
    return {
      ...field,
      production: {
        status: true,
        complete: ''
      }
    }
  },
  completeTask (field) {
    return {
      ...field,
      production: {
        status: false,
        complete: ''
      }
    }
  }
}

const actions = {
  clean
}

export default actions
