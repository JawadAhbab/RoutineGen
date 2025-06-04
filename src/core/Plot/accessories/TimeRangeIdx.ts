import { TimeString, timeStringConverter } from './TimeString'

export const timeRangeIdx = (start: TimeString, end: TimeString) => {
  const startIdx = timeStringConverter(start)
  let endIdx = timeStringConverter(end)
  if (endIdx < startIdx) endIdx += 1440
  return Array.from({ length: endIdx - startIdx }).map((_, idx) => (idx + startIdx) % 1440)
}
