export const input = {
  title: 'AnyOfWithProperties',
  type: 'object',
  properties: {
    foo: {
      type: 'object',
      anyOf: [{$ref: '#/definitions/foo'}]
    }
  },
  definitions: {
    foo: {
      anyOf: [
        {
          properties: {
            d: {type: 'string'}
          }
        },
        {
          anyOf: [
            {
              properties: {
                f: {type: 'string'}
              }
            }
          ],
          properties: {
            e: {type: 'string'}
          }
        }
      ],
      properties: {
        a: {
          type: 'string'
        },
        b: {
          type: 'string'
        },
        c: {
          anyOf: [{$ref: '#'}, {$ref: '#/definitions/foo'}],
          default: {}
        }
      }
    }
  },
  required: ['foo'],
  additionalProperties: false
}
