import { parseUnixTimeString, toUnixTimeString } from './unixTime';

describe('unixTime', () => {
  it('Test old dates', async () => {
    const iso = '1968-04-19T11:00:00+00:00';
    const time = toUnixTimeString(iso);
    expect(time).toEqual('0000000000');
    expect(Number(time)).toEqual(0);

    const date = new Date(Number(time));
    expect(date.getTime()).toEqual(0);
    expect(date.toISOString()).toEqual('1970-01-01T00:00:00.000Z');
  }, 60000);

  it('Test parse unix time values', async () => {
    expect(parseUnixTimeString('0-5655')).toEqual(0);
    expect(parseUnixTimeString('000015646')).toEqual(15646);
  }, 60000);
});
