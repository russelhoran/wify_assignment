# wify_assignment

so regarrding the time complexity of solving the issue: I calculated the sum using .reduce() which is O(n) for each array  (worst case, up to 3 counters), So overall complexity is: O(n) where n is the number of items in the most loaded counter.

While working on this, I didn’t use any heavy or complex algorithms like binary search or anything like that. But I did follow a simple and practical approach , something similar to a greedy algorithm. Basically, every time a user enters a number, I check which counter (out of the three) currently has the lowest total sum of items, and I add the new item to that one.

The idea was to try and keep the counters balanced — so instead of filling up one completely and leaving the others empty, the items get distributed as evenly as possible based on their total value. I felt this was a smart way to handle it and also keeps the display organized.

Also, I added a small validation on the input: I made sure that negative numbers aren’t allowed. It just felt logical — after all, it doesn’t make sense to add “-3 items” to a counter. So if someone tries to enter a negative number, it just clears the input.

As for performance, everything runs quite smoothly since I amm only working with simple arrays and basic operations like adding, displaying, and checking values.

This was a fun task where I tried to approach it with both logic and user experience in mind. I believe the dynamic balancing of counters and small UX tweaks (like clearing input and removing negative values) make the app more user-friendly and practical.
