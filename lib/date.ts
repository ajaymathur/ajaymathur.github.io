// Frontmatter dates are calendar dates ("2026-06-01"), which `new Date` parses as UTC midnight.
// Formatting in UTC keeps them from shifting a day in timezones west of UTC (e.g. `next dev` in the US).
export function formatDate(date: string, month: 'short' | 'long' = 'short'): string {
  return new Date(date).toLocaleDateString('en-US', {
    month,
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
