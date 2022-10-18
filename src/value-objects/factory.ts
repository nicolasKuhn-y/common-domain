import { ObjectInstanceTypes, ValueObjectMap, ValueType } from '../interfaces/factory'

export class ValueObjectFactory<Map extends ValueObjectMap, Keys extends keyof Map> {
  private readonly valueObjectMap: Map

  constructor (valueObjectMap: Map) {
    this.valueObjectMap = valueObjectMap
  }

  public create<T extends Keys> (type: T, value: ValueType<Map[T]>): InstanceType<Map[T]> {
    const ValueObject = this.valueObjectMap[type]

    if (!ValueObject) throw new Error(`Cannot create value object from type ${type.toString()}`)

    return new ValueObject(value)
  }

  public mapToCreate<T extends Keys> (attributes: { [key in T]?: ValueType<Map[key]> }): ObjectInstanceTypes<Map, T> {
    this.deleteEmptyAttributes(attributes)

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
