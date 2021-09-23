export const input = {
  title: 'AnyOfWithRequired',
  type: 'object',
  properties: {
    foo: {
      anyOf: [{required: ['a']}, {required: ['b']}, {required: ['c']}],
      properties: {
        a: {type: 'string'},
        b: {type: 'string'}
      }
    }
  },
  additionalProperties: false
}
