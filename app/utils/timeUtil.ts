import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------
const errorMessage = 'Invalid Date';
export function fDate(date: Date) {
  return dateIsValid(date)
    ? format(new Date(date), 'dd MMMM yyyy')
    : errorMessage;
}

export function fDateDashes(date: Date) {
  return dateIsValid(date)
    ? format(new Date(date), 'yyyy-MM-dd')
    : errorMessage;
}

export function fDateTime(date: Date) {
  return dateIsValid(date)
    ? format(new Date(date), 'dd MMM yyyy HH:mm')
    : errorMessage;
}

export function fTime(date: Date) {
  return dateIsValid(date) ? format(new Date(date), 'HH:mm') : errorMessage;
}

export function fTimestamp(date: Date) {
  return dateIsValid(date) ? getTime(new Date(date)) : errorMessage;
}

export function fDateTimeSuffix(date: Date) {
  return dateIsValid(date)
    ? format(new Date(date), 'dd/MM/yyyy hh:mm p')
    : errorMessage;
}

export function fToNow(date: Date) {
  return dateIsValid(date)
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : errorMessage;
}

export function fToYearsAgo({ date = new Date(), years }: any) {
  return dateIsValid(date)
    ? date.setFullYear(date.getFullYear() - years)
    : errorMessage;
}

export function fToYearsLater({ date = new Date(), years }: any) {
  return dateIsValid(date)
    ? date.setFullYear(date.getFullYear() + years)
    : errorMessage;
}

function dateIsValid(date: Date) {
  return !Number.isNaN(new Date(date).getTime());
}
