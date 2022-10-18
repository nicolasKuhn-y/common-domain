import { ValueObject } from '../abstracts'

export class NumberValueObject extends ValueObject<number> {
  constructor (value: number) {
    super(value)
  }

  public increase (value: number): void {
    this.innerValue = this.innerValue + value
  }

  public decrease (value: number): void {
    this.innerValue = this.innerValue - value
  }

  public reset (): void {
    this.innerValue = 0
  }
}
