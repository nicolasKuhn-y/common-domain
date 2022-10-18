import { isDeepStrictEqual } from 'node:util'

export abstract class ValueObject<T> {
  protected innerValue: T

  constructor (value: T) {
    this.checkValueIsNotNull(value)

    this.innerValue = value
  }

  public isEqualTo (other: ValueObject<T>): boolean {
    return isDeepStrictEqual(this.innerValue, other.value)
  }

  public get value (): T {
    return this.innerValue
  }

  private checkValueIsNotNull (value: T): void {
    const isNull = value === null || value === undefined

    if (isNull) {
      throw new Error('Value object cannot have a null as a value')
    }
  }
}
