import { CustomDate } from '../../value-objects'

describe('Test suite for the Date value object', () => {
  it('should create a new date value object', () => {
    const rawDate = new Date('9/12/2018')

    const date = new CustomDate(rawDate)

    expect(date.value).toStrictEqual(new Date('9/12/2018'))
  })

  it('should compare two dates and say if they are equal to each other', () => {
    const date = new CustomDate(new Date('9/12/2018'))
    const otherDate = new CustomDate(date.value)

    const areEqual = date.isEqualTo(otherDate)

    expect(areEqual).toBeTruthy()
  })
})
