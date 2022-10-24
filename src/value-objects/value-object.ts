import { isDeepStrictEqual } from 'node:util'

import { InvalidArgumentError } from '../errors/invalid-argument'

export abstract class ValueObject<T> {
  protected innerValue: T

  constructor (value: T) {
    this.ensureValueIsNotNull(value)

    this.innerValue = value
  }

  public isEqualTo (other: ValueObject<T>): boolean {
    return isDeepStrictEqual(this.innerValue, other.value)
  }

  public get value (): T {
    return this.innerValue
  }

  private ensureValueIsNotNull (value: T): void {
    const isNull = value === null || value === undefined

    if (isNull) {
      throw new InvalidArgumentError('Value object cannot have a null as a value')
    }
  }
}
