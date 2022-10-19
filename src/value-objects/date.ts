import { ValueObject } from './value-object'

export class CustomDate extends ValueObject<Date> {
  constructor (value: Date) {
    super(value)
  }
}
