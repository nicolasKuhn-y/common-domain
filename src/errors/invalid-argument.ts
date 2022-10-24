import { BaseError } from './base-error'
import { ERROR_MESSAGES } from './messages'

export class InvalidArgumentError extends BaseError {
  constructor (codeKey: string, param: {[ key: string ]: any}) {
    const errors: {[key: string]: any} = {
      INVALID_VALUE: { message: `${ERROR_MESSAGES.INVALID_VALUE} Value => ${param.value}.` },
      INVALID_TYPE: { message: `${ERROR_MESSAGES.INVALID_TYPE} Value => ${param.value}.` },
      EMPTY: { message: `${ERROR_MESSAGES.EMPTY} Value => ${param.value}.` }
    }

    const err = errors[codeKey]

    super(err.message)
  }
}
