import { BaseService } from './base-service';

export class EventsService extends BaseService {
  protected url = '/events';

  async getEvents() {
    return this.get(this.url);
  }
}

export const eventsService = new EventsService();
