import {useCallback, useRef} from 'react';

/**
 * Trigger `callback`
 *  after `ms` milliseconds
 *  since `onStartLongPress`
 *  if no `onEndLongPress` was fire
 */
export default function useLongPress(
  // callback that is invoked at the specified duration or `onEndLongPress`
  callback : () => any,
  // long press duration in milliseconds
  ms = 300
) {
  // used to persist the timer state
  // non-zero values means the value has never been fired before
  const timerRef = useRef<number>(0);

  // clear timed callback
  const endTimer = () => {
    clearTimeout(timerRef.current || 0);
    timerRef.current = 0;
  };

  // init timer
  const onStartLongPress = useCallback((e: any) => {
    // stop any previously set timers
    endTimer();

    // set new timeout
    timerRef.current = window.setTimeout(() => {
      callback();
      endTimer();
    }, ms);
  }, [callback, ms]);

  // determine to end timer early and invoke the callback or do nothing
  const onEndLongPress = useCallback(() => {
    // run the callback fn the timer hasn't gone off yet (non zero)
    if (timerRef.current) {
      endTimer();
      callback();
    }
  }, [callback]);

  return [onStartLongPress, onEndLongPress, endTimer];
}

/**
 * Trigger callback if the time between onPressStart & onPressRelease over ms milliseconds
 */
export function useReleaseOver(ms = 1000, callback: () => any) {
  const since = useRef<number>(Date.now());
  const onPressStart = useCallback((e: any) => {
    since.current = Date.now();
    // console.log('{useReleaseOver.onPressStart} since.current: ', since.current);
  }, []);
  const onPressRelease = useCallback((e: any) => {
    // console.log('{useReleaseOver.onPressRelease} duration: ', Date.now() - since.current);
    if (Date.now() - since.current > ms) {
      callback();
    }
    since.current = Date.now();
  }, [callback, ms]);
  return [onPressStart, onPressRelease];
}
