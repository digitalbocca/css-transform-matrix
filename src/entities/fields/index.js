const fieldTypes = [
  {
    type: 'wild',
    text: 'Terreno Selvagem',
    img: 'forest',
    production: {
      status: false,
      complete: ''
    },
    options: [
      'clean'
    ]
  },
  {
    type: 'cleared',
    text: 'Terreno Limpo',
    img: 'cleared',
    production: {
      status: false,
      complete: ''
    },
    options: []
  },
  {
    type: 'farming',
    text: 'Plantação',
    production: {
      status: false,
      complete: ''
    },
    options: []
  },
  {
    type: 'equipment',
    text: 'Equipamento',
    production: {
      status: false,
      complete: ''
    },
    options: []
  },
  {
    type: 'mining',
    text: 'Mineração',
    production: {
      status: false,
      complete: ''
    },
    options: [],
    floor: {
      max: 120,
      current: 0
    }
  },
  {
    type: 'storage',
    text: 'Armazenamento',
    floor: {
      max: 60,
      current: 1
    },
    options: []
  }
]

export default fieldTypes
