import { CustomDate, Id, ValueObjectFactory } from '../../value-objects'

describe('Test suite for the value object factory', () => {
  it('should create a new value object', () => {
    const valueObjectMap = { id: Id }
    const factory = new ValueObjectFactory(valueObjectMap)

    const idCreated = factory.create('id', '')

    expect(idCreated).toBeInstanceOf(Id)
  })

  it('should create a new object with all the indicates value objects', () => {
    const valueObjectMap = { id: Id, date: CustomDate }
    const factory = new ValueObjectFactory(valueObjectMap)

    const createdObject = factory.mapToCreate({
      id: '3515a60e-6066-49d0-ad76-3415e9b8fff7',
      date: new Date('2018-12-09')
    })

    expect(createdObject).toStrictEqual({
      id: new Id('3515a60e-6066-49d0-ad76-3415e9b8fff7'),
      date: new CustomDate(new Date('2018-12-09'))
    })
  })
})
