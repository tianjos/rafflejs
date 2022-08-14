import currency from 'currency.js';
import { DateTime } from 'luxon';
import Creator from './creator';
import Donor from './donor';
import Holder from './holder';
import { guardAgainstRange } from './_utils';

export default class Raffle {
  public readonly id: string;

  public readonly creator: Creator;

  public readonly holders: Holder[];

  public readonly donors: Donor[];

  public readonly ticketValue: currency;

  public readonly totalOfTickets: number;

  public readonly launchDate: DateTime;

  public readonly drawingDate: DateTime;

  constructor(
    creator: Creator,
    ticketValue: number,
    totalOfTickets: number,
    daysOpen: number,
  ) {
    if (!guardAgainstRange(daysOpen, { greaterThan: 0, lessThan: 60 })) {
      throw new Error('Days open must be greater than 1 and less than 60');
    }
    if (!guardAgainstRange(totalOfTickets, { greaterThan: 10, lessThan: 1000 })) {
      throw new Error('Total of tickets must be greater than: 10 and less than 1000');
    }
    if (!guardAgainstRange(ticketValue, { greaterThan: 0, lessThan: 100 })) {
      throw new Error('Ticket Value must be greater than 0 and less than 100');
    }
    this.id = '123';
    this.creator = creator;
    this.holders = [];
    this.donors = [];
    this.ticketValue = currency(ticketValue);
    this.totalOfTickets = totalOfTickets;
    this.launchDate = DateTime.now();
    this.drawingDate = this.launchDate.plus({ days: daysOpen });
  }
}
