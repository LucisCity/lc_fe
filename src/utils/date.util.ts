import { format, intervalToDuration } from "date-fns";

export function formatDate(date: any, _format?: string) {
  if (date == null) {
    return "--";
  }
  if (!_format) {
    _format = "yyyy-MM-dd";
  }
  if (typeof date === "string") {
    date = new Date(date);
  }
  return format(date, _format);
}

export function durationFrom(date: string | Date, toDate: string | Date) {
  const start = typeof date === "string" ? new Date(date) : date;
  const end = typeof toDate === "string" ? new Date(toDate) : toDate;
  return intervalToDuration({
    start,
    end,
  });
}
