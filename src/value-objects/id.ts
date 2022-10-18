// Node
import { randomUUID } from 'node:crypto'

// Abstracts
import { ValueObject } from '../abstracts/value-object'

export class Id extends ValueObject<string> {
  constructor (value?: string) {
    super(value || randomUUID()) // TODO: Revisar si es necesario pasarle un valor
    this.checkIsValidUuid()
  }

  private checkIsValidUuid () {
    const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

    const isValid = regex.test(this.innerValue)

    if (!isValid) throw new Error(`Value is not a valid uuid. Value => ${this.innerValue}`)
  }
}
