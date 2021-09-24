export const input = {
  type: 'object',
  properties: {
    obj: {
      type: ['null', 'object']
    },
    arr: {
      type: ['null', 'array']
    },
    string: {
      type: ['null', 'string']
    },
    number: {
      type: ['null', 'number']
    },
    boolean: {
      type: ['null', 'boolean']
    }
  }
}
