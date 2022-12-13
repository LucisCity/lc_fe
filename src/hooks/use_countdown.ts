import { Duration } from "date-fns";
import { useEffect, useState } from "react";
import { durationFrom } from "../utils/date.util";

export function useCountdownTime(endAt: Date | string | undefined) {
  const [duration, setDuration] = useState<Duration>({});
  const [timer, setTimer] = useState<any>(null);

  useEffect(() => {
    console.log("_end: ", endAt);
    countdown();
    const _timer = setInterval(() => {
      countdown();
    }, 1000);
    setTimer(_timer);

    return () => {
      if (timer != null) {
        clearInterval(timer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endAt]);

  function countdown() {
    const _end = new Date(endAt ?? new Date());
    const _start = new Date();
    if (_start > _end) {
      if (timer != null) {
        clearInterval(timer);
      }
      return;
    }

    const _duration = durationFrom(_start, _end);
    setDuration(_duration);
  }

  return duration;
}
