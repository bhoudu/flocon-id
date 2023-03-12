import parseISO from 'date-fns/parseISO';

/**
 * Converts to a unix time string of 10 chars.
 * Oldest value is 01/01/1970. If older than this date, it will returns "0000000000".
 */
export function toUnixTimeString(date: Date | string = new Date(), paddingLength = 10): string {
  if (!date) {
    return null;
  }
  let dateValue: Date;
  if (typeof date === 'string' || date instanceof String) {
    dateValue = parseISO(`${date}`);
  } else {
    dateValue = date;
  }
  const unixTime = Math.max(Math.floor(dateValue.getTime() / 1000), 0);

  // We always push a positive or null value
  return unixTime.toString().padStart(paddingLength, '0');
}

/**
 * Parse a unixTime string and convert into a numeric unix time.
 * Negative unix times return 0.
 *
 * @param unixTime as string
 * @return positive or 0 only unix time value as number
 */
export function parseUnixTimeString(unixTime: string): number {
  if (!unixTime?.includes('-')) {
    return Number(unixTime);
  }
  return 0;
}
