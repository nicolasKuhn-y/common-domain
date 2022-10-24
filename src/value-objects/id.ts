// Node
import { randomUUID } from 'node:crypto'

// Erros
import { ERROR_TYPES } from '../errors/error-types'
import { InvalidArgumentError } from '../errors/invalid-argument'

// Abstracts
import { ValueObject } from './value-object'

export class Id extends ValueObject<string> {
  constructor (value?: string) {
    super(value || randomUUID())
    this.ensureIsValidUuid()
  }

  private ensureIsValidUuid () {
    const regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

    const isValid = regex.test(this.innerValue)

    if (!isValid) throw new InvalidArgumentError(ERROR_TYPES.INVALID_VALUE, { value: this.innerValue })
  }
}
