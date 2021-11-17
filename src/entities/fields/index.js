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
      {
        name: 'extract',
        text: 'Extrair um tipo de recurso',
        action: 'extract-resource',
        target: 'resource',
        conditions: [
          {
            name: 'production',
            value: false
          }
        ]
      },
      {
        name: 'clean',
        text: 'Limpar o terreno',
        action: 'change-field-type',
        target: 'cleared',
        conditions: [
          {
            name: 'production',
            value: false
          }
        ]
      }
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
    options: [
      {
        name: 'extract',
      }
    ]
  },
  {
    type: 'farming',
    text: 'Plantação',
    production: {
      status: false,
      complete: ''
    }
  },
  {
    type: 'equipment',
    text: 'Equipamento',
    production: {
      status: false,
      complete: ''
    }
  },
  {
    type: 'mining',
    text: 'Mineração',
    production: {
      status: false,
      complete: ''
    },
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
    }
  }
]

export default fieldTypes
