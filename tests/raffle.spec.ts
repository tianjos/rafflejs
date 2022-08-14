import test from 'ava';
import { Creator } from '../src/creator';
import { Raffle } from '../src/raffle';

test('raffle creation', (t) => {
  const raffle = new Raffle(new Creator('foo'), 10, 100, 30);
  t.true(raffle instanceof Raffle);
});
