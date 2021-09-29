export const input = {
  title: 'AnyOfWithSiblings',
  type: 'object',
  properties: {
    foo: {
      type: 'object',
      anyOf: [
        {type: 'object', properties: {a: {type: 'string'}}},
        {type: 'object', properties: {a: {type: 'number'}}}
      ],
      properties: {
        b: {type: 'string'}
      }
    },
    bar: {
      type: 'object',
      anyOf: [
        {type: 'object', properties: {a: {type: 'string'}, b: {type: 'string'}}},
        {type: 'object', properties: {b: {type: 'number'}}}
      ],
      required: ['a']
    },
    bax: {
      type: 'object',
      anyOf: [{required: ['a']}, {required: ['b']}],
      properties: {
        a: {type: 'string'},
        b: {type: 'number'}
      }
    }
  },
  additionalProperties: false
}
