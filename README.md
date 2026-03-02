## 📌 Selection Sort (Ascending Order)
###🔹 ১️⃣ Selection Sort কী?

Selection Sort হলো একটি comparison-based, in-place sorting algorithm।

এটি প্রতি iteration-এ:

Unsorted অংশ থেকে সবচেয়ে ছোট element নির্বাচন করে

সেটিকে current index-এ বসিয়ে দেয়

🔹 ২️⃣ Algorithm-এর মূল ধারণা

Array–কে দুই ভাগে ভাগ করা হয়:

[ Sorted অংশ | Unsorted অংশ ]

শুরুতে:

Sorted অংশ = খালি

Unsorted অংশ = পুরো array

প্রতি iteration-এ:

Unsorted অংশ থেকে minimum element খুঁজে বের করা হয়

সেটিকে sorted অংশে যোগ করা হয়

🔹 ৩️⃣ ধাপে ধাপে উদাহরণ

ধরি array:

[20, 10, 40, 50, 30]
▶ Iteration 1 (i = 0)

Unsorted অংশ = পুরো array
Minimum = 10
Swap index 0 ও minIndex

[10, 20, 40, 50, 30]

Sorted অংশ = [10]

▶ Iteration 2 (i = 1)

Unsorted অংশ = [20, 40, 50, 30]
Minimum = 20
Swap প্রয়োজন নেই (already correct)

[10, 20, 40, 50, 30]

Sorted অংশ = [10, 20]

▶ Iteration 3 (i = 2)

Unsorted অংশ = [40, 50, 30]
Minimum = 30
Swap

[10, 20, 30, 50, 40]

Sorted অংশ = [10, 20, 30]

▶ Iteration 4 (i = 3)

Unsorted অংশ = [50, 40]
Minimum = 40
Swap

[10, 20, 30, 40, 50]

Sorted অংশ = [10, 20, 30, 40]

▶ Iteration 5 দরকার নেই

শেষ element (50) নিজে থেকেই sorted।
কারণ একটিমাত্র element কখনো unsorted হতে পারে না।

🔹 ৪️⃣ কেন i < arr.length - 1 যথেষ্ট?

যখন:

i = n - 2

তখন:

প্রথম n-1 element সঠিক জায়গায়

শেষ ১টি element স্বয়ংক্রিয়ভাবে সঠিক

তাই শেষ iteration আলাদা করে দরকার হয় না।

🔹 ৫️⃣ Pseudocode
For i from 0 to n-2:
    minIndex = i
    
    For j from i+1 to n-1:
        If arr[j] < arr[minIndex]:
            minIndex = j
    
    Swap arr[i] and arr[minIndex]
🔹 ৬️⃣ Complexity Analysis
⏱ Time Complexity

Best Case: O(n²)

Average Case: O(n²)

Worst Case: O(n²)

কারণ:
Nested loop → n × n → O(n²)

Selection sort কখনো O(n) হয় না।

💾 Space Complexity

O(1)

কারণ:
এটি in-place sorting করে (extra memory ব্যবহার করে না)।

🔹 ৭️⃣ গুরুত্বপূর্ণ বৈশিষ্ট্য

✔ In-place
✔ Simple logic
❌ Not Stable (default implementation)
❌ Not Adaptive
❌ Large dataset-এর জন্য efficient না

🔹 ৮️⃣ কখন ব্যবহার করা যায়?

ছোট dataset

Memory constraint থাকলে

শিক্ষামূলক উদ্দেশ্যে algorithm বোঝার জন্য
