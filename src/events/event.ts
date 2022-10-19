import { Id } from '../value-objects'

type EventInput = {
  id: Id;
  type: string;
  attributes: { [key: string]: any };
  meta?: { [key: string]: any };
};

export abstract class DomainEvent {
  private readonly id: string
  private readonly type: string
  private readonly timestamp: Date
  private readonly attributes: { [key: string]: any }
  private readonly meta:{ [key: string]: any }

  constructor (props: EventInput) {
    this.id = props.id.value
    this.type = props.type
    this.timestamp = new Date()
    this.attributes = props.attributes
    this.meta = props.meta || {}
  }

  public get value () {
    return {
      data: {
        id: this.id,
        type: this.type,
        timestamp: this.timestamp,
        attributes: this.attributes
      },
      meta: this.meta
    }
  }
}
