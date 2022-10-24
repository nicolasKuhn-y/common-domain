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
    const regex = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/

    const isValid = regex.test(this.innerValue)

    if (!isValid) throw new InvalidArgumentError(ERROR_TYPES.INVALID_VALUE, { value: this.innerValue })
  }
}
