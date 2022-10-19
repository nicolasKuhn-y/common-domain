import { Id } from '../value-objects'

type EventInput = {
  id: Id
  type: string
}

export abstract class DomainEvent {
  public readonly id: string
  public readonly type: string
  public readonly timestamp: Date

  constructor (props: EventInput) {
    this.id = props.id.value
    this.type = props.type
    this.timestamp = new Date()
  }
}
