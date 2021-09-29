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
  definitions: {
    foo: {
      properties: {
        a: {type: 'string'},
        b: {type: 'integer'}
      },
      additionalProperties: false,
      required: ['a']
    },
    bar: {
      properties: {
        a: {enum: ['a', 'b', 'c']},
        bam: {
          type: 'array',
          items: {
            anyOf: [
              {
                enum: ['wam']
              }
            ]
          }
        }
      }
    },
    baz: {
      properties: {
        baz: {$ref: '#/definitions/bar'}
      }
    }
  },
  additionalProperties: false
}
