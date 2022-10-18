import { Id } from '../../value-objects/id'

describe('Test suite for Id Value Object', () => {
  it('should generate a valid uuid Id', () => {
    const idCreated = new Id()

    expect(typeof idCreated.value).toBe('string')
  })

  it('should throw an error if the id argument is not valid', () => {
    const nonValidString = 'vn5'

    expect(() => new Id(nonValidString)).toThrow(`Value is not a valid uuid. Value => ${nonValidString}`)
  })
})
