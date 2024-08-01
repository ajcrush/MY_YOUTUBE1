Debouncing

Typing slow = 200ms
Typing fast = 30ms

Performance

- iphone pro max = 14 letter \*1000=14000
- With Debouncing = 3 API calls \* 1000 = 3000

Debouncing with 200ms

- If diff between two key stroke is < 200ms - Decline the API Call > 200 ms make an API calls
