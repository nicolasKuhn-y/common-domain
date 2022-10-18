import { DomainEvent } from './event'

export abstract class AggregateRoot<Properties extends { [key: string]: any }> {
  private events: DomainEvent[]
  private readonly _properties: Properties

  constructor (props: Properties) {
    this.events = []
    this._properties = props
  }

  public pullEvents (): DomainEvent[] {
    const events = [...this.events]

    this.events = []

    return events
  }

  protected saveEvent (event: DomainEvent): void {
    this.events.push(event)
  }

  public get properties (): Properties {
    return this._properties
  }
}
