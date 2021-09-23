export const input = {
  title: 'OneOfWithRequired',
  type: 'object',
  properties: {
    foo: {
      oneOf: [{required: ['a']}, {required: ['b']}, {required: ['c']}],
      properties: {
        a: {type: 'string'},
        b: {type: 'string'}
      }
    }
  },
  additionalProperties: false
}
