import { DomainEvent } from '../events/event'

export abstract class AggregateRoot {
  private events: DomainEvent[]

  constructor () {
    this.events = []
  }

  public pullEvents (): DomainEvent[] {
    const events = [...this.events]

    this.events = []

    return events
  }

  protected saveEvent (event: DomainEvent): void {
    this.events.push(event)
  }
}
