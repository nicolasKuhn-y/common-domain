import { ERROR_TYPES } from '../errors'
import { InvalidArgumentError } from '../errors/invalid-argument'
import { ObjectInstanceTypes, ValueObjectMap, ValueType } from '../interfaces/factory'

interface IOptions {
  acceptEmptyValues?: boolean;
}

export class ValueObjectFactory<Map extends ValueObjectMap, Keys extends keyof Map> {
  constructor (private readonly valueObjectMap: Map) {}

  public create<T extends Keys> (type: T, value: ValueType<Map[T]>): InstanceType<Map[T]> {
    const ValueObject = this.valueObjectMap[type]

    if (!ValueObject) throw new InvalidArgumentError(ERROR_TYPES.INVALID_TYPE, { value: type.toString() })

    return new ValueObject(value)
  }

  public mapToCreate<T extends Keys> (attributes: { [key in T]?: ValueType<Map[key]> }, options?: IOptions) {
    if (!options?.acceptEmptyValues) {
      this.deleteEmptyAttributes(attributes)
    }

    return this.instanciateAttributes<T>(attributes) as ObjectInstanceTypes<Map, T>
  }

  private instanciateAttributes<T extends Keys> (attributes: { [key in T]?: ValueType<Map[key]> }) {
    const instantiatedAttributes: { [key: string]: any } = {}

    for (const [key, value] of Object.entries(attributes)) {
      const ValueObject = this.valueObjectMap[key]

      instantiatedAttributes[key] = new ValueObject(value)
    }

    return instantiatedAttributes
  }

  private deleteEmptyAttributes (obj: { [key: string]: any }) {
    for (const key in obj) {
      const attribute = obj[key]

      const isNull = attribute === null || attribute === undefined

      if (isNull) delete obj[key]
    }

    return obj
  }
}
