import {format, fromUnixTime} from 'date-fns';

export const getHoursFromUnix = (value = 0) =>
  format(fromUnixTime(value), 'HH:mm');
