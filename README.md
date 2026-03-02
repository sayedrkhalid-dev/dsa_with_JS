# Selection Sort — নোট

---

## ট্যাব ১ — Selection Sort (Ascending Order)

### Selection Sort কী?

Selection Sort হলো একটা সহজ sorting algorithm যেটা in-place কাজ করে। মূল ধারণাটা খুবই সরল — প্রতিটা পাসে unsorted অংশ থেকে সবচেয়ে ছোট element খুঁজে বের করে সেটাকে সঠিক জায়গায় বসিয়ে দেওয়া হয়।

---

### কাজ করার পদ্ধতি

যেকোনো মুহূর্তে array-টাকে দুই ভাগে ভাবা যায়:

```
[ Sorted অংশ | Unsorted অংশ ]
```

শুরুতে sorted অংশ পুরোপুরি খালি, আর পুরো array-টাই unsorted। প্রতিটা iteration-এ unsorted অংশ থেকে minimum element নিয়ে sorted অংশের শেষে যোগ করা হয়। এভাবে চলতে থাকে যতক্ষণ না সব কিছু sorted হয়ে যায়।

---

### ধাপে ধাপে উদাহরণ

শুরুর array: `[20, 10, 40, 50, 30]`

**Iteration 1 (i = 0)**
পুরো array স্ক্যান করো। Minimum = 10।
Index 0 আর 10-এর index-এর মধ্যে swap করো।

ফলাফল: `[10, 20, 40, 50, 30]`
এখন পর্যন্ত sorted: `[10]`

---

**Iteration 2 (i = 1)**
Index 1 থেকে স্ক্যান করো। Minimum = 20।
এটা ইতোমধ্যে সঠিক জায়গায় আছে, swap দরকার নেই।

ফলাফল: `[10, 20, 40, 50, 30]`
এখন পর্যন্ত sorted: `[10, 20]`

---

**Iteration 3 (i = 2)**
Index 2 থেকে স্ক্যান করো। Minimum = 30।
40 আর 30-এর মধ্যে swap করো।

ফলাফল: `[10, 20, 30, 50, 40]`
এখন পর্যন্ত sorted: `[10, 20, 30]`

---

**Iteration 4 (i = 3)**
Index 3 থেকে স্ক্যান করো। Minimum = 40।
50 আর 40-এর মধ্যে swap করো।

ফলাফল: `[10, 20, 30, 40, 50]`
এখন পর্যন্ত sorted: `[10, 20, 30, 40]`

---

**Iteration 5 — দরকার নেই**
মাত্র একটা element বাকি (50), আর একটামাত্র element সবসময় নিজে থেকেই sorted।

---

### কেন `i < arr.length - 1` যথেষ্ট?

যখন `i = n - 2`-তে পৌঁছাই, তখন প্রথম `n - 1`টা element ইতোমধ্যে সঠিক জায়গায়। এর মানে শেষ elementটাও স্বয়ংক্রিয়ভাবে সঠিক — যাওয়ার আর কোনো জায়গা নেই তার। তাই আলাদা করে শেষ iteration চালানোর দরকার পড়ে না।

---

### Pseudocode

```
For i from 0 to n-2:
    minIndex = i

    For j from i+1 to n-1:
        If arr[j] < arr[minIndex]:
            minIndex = j

    Swap arr[i] and arr[minIndex]
```

---

### Complexity

**Time Complexity:**

| Case | Complexity |
|------|------------|
| Best | O(n²) |
| Average | O(n²) |
| Worst | O(n²) |

Nested loop সবসময় চলে, input যেমনই হোক না কেন। Array আগে থেকে sorted থাকলেও Selection Sort পুরো unsorted অংশ স্ক্যান করবেই — তাই O(n) কখনো সম্ভব না।

**Space Complexity: O(1)**
In-place কাজ করে, তাই কয়েকটা variable ছাড়া বাড়তি কোনো memory লাগে না।

---

### মূল বৈশিষ্ট্য

- In-place
- বুঝতে ও implement করতে সহজ
- Stable না (সমান element-দের order বদলে যেতে পারে)
- Adaptive না (আংশিক sorted input থেকে কোনো সুবিধা নেয় না)
- বড় dataset-এর জন্য উপযুক্ত না

---

### কখন ব্যবহার করা যায়?

Selection Sort তখনই কাজে লাগে যখন:
- Dataset ছোট
- Memory খুব সীমিত (O(1) space বাধ্যতামূলক)
- Sorting algorithm শেখার উদ্দেশ্যে কিছু সহজে trace করতে চাও

---

## ট্যাব ২ — Bidirectional Selection Sort

### এটা কী?

Bidirectional Selection Sort হলো সাধারণ algorithm-এর একটা variation। প্রতিটা পাসে শুধু minimum না, একই সাথে minimum আর maximum দুটোই খোঁজা হয় — ছোটটাকে বাম দিকে আর বড়টাকে ডান দিকে বসানো হয় একটা iteration-এই।

---

### মূল ধারণা

যেকোনো মুহূর্তে array দেখতে এরকম:

```
[ Sorted (বাম) | Unsorted | Sorted (ডান) ]
```

প্রতিটা iteration-এ unsorted অংশ দুই দিক থেকে ছোট হতে থাকে।

---

### ধাপে ধাপে উদাহরণ

শুরুর array: `[20, 10, 40, 50, 30]`

**শুরুর অবস্থা:**
left = 0, right = 4

---

**Iteration 1**
পুরো array স্ক্যান করো।
Minimum = 10, Maximum = 50।

Minimum-কে index 0-তে swap করো, Maximum-কে index 4-তে swap করো।

ফলাফল: `[10, 20, 40, 30, 50]`
left = 1, right = 3

---

**Iteration 2**
Index 1 থেকে 3 পর্যন্ত স্ক্যান করো।
Minimum = 20, Maximum = 40।

ফলাফল: `[10, 20, 30, 40, 50]`
left = 2, right = 2

left >= right → থামো।

---

### কেন দ্রুত মনে হয়?

Normal Selection Sort-এ প্রতিটা iteration-এ একটা element fix হয়। এখানে হয় দুটো — একটা প্রতিটা দিক থেকে। তাই outer loop প্রায় অর্ধেক চলে। তবে inner loop একই পরিমাণ element স্ক্যান করে, তাই মোট কাজ প্রায় একই।

---

### Pseudocode

```
left = 0
right = n - 1

while left < right:
    minIndex = left
    maxIndex = left

    for i from left to right:
        if arr[i] < arr[minIndex]:
            minIndex = i
        if arr[i] > arr[maxIndex]:
            maxIndex = i

    swap arr[left] and arr[minIndex]

    if maxIndex == left:
        maxIndex = minIndex

    swap arr[right] and arr[maxIndex]

    left++
    right--
```

---

### কেন `maxIndex == left` চেক করতে হয়?

এটা একটা সহজে মিস হওয়া bug। যদি maximum element শুরুতেই `left` position-এ থাকে, তাহলে minimum swap করার পর সেটা `minIndex`-এ চলে যাবে। ঠিক করে না দিলে দ্বিতীয় swap ভুল element নিয়ে কাজ করবে। সমাধানটা সহজ:

```
if maxIndex == left:
    maxIndex = minIndex
```

এই লাইনটা না থাকলে কিছু কিছু ক্ষেত্রে array ভুলভাবে sort হবে — অনেকেই এখানে ভুল করে।

---

### Complexity

**Time Complexity:** সব ক্ষেত্রেই O(n²)। Outer loop অর্ধেক হলেও inner scan একই থাকে — মোট comparison প্রায় quadratic-ই থাকে।

**Space Complexity:** O(1) — এটাও in-place।

---

### বৈশিষ্ট্য

- In-place
- Logic সহজ
- প্রতিটা iteration-এ দুই দিক থেকে কাজ হয়
- তবুও O(n²) — asymptotically দ্রুত না
- বড় dataset-এর জন্য এখনও উপযুক্ত না

---

### Normal বনাম Bidirectional — তুলনা

| বিষয় | Normal Selection Sort | Bidirectional |
|------|----------------------|---------------|
| প্রতি পাসে কতটা element fix হয় | ১টা | ২টা |
| Outer loop কতবার চলে | ~n বার | ~n/2 বার |
| Time Complexity | O(n²) | O(n²) |
| ব্যবহারিক গতি | একটু ধীর | একটু ভালো |

---

## ট্যাব ৩ — Sorting Algorithm কীভাবে ভাগ করা হয়

Sorting algorithm সাধারণত দুটো বড় ভাগে ফেলা হয় — কীভাবে তারা order নির্ধারণ করে তার উপর ভিত্তি করে।

---

### ১. Comparison-Based Sorting

এই algorithm-গুলো `<` বা `>` দিয়ে element তুলনা করে order ঠিক করে।

উদাহরণ: Selection Sort, Bubble Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort।

Comparison-based sorting-এর theoretical lower bound হলো **O(n log n)**। এর চেয়ে কম সময়ে general case sort করা সম্ভব না — decision tree theory থেকে এটা প্রমাণ করা যায়, কারণ n টা distinct element sort করতে কমপক্ষে ততটা comparison লাগবেই।

---

### ২. Non-Comparison Sorting

এই algorithm-গুলো সরাসরি element তুলনা করে না। বরং ব্যবহার করে:
- কতবার element আসছে তা গণনা করা
- Index mapping
- Digit ধরে ধরে গ্রুপ করা
- Bucket-এ ভাগ করা

উদাহরণ: Counting Sort, Radix Sort, Bucket Sort।

এগুলো কিছু ক্ষেত্রে **O(n)** সময়ে কাজ করতে পারে। তবে সীমাবদ্ধতা আছে — সাধারণত integer input লাগে নির্দিষ্ট range-এর মধ্যে, extra memory লাগে, আর সব ধরনের data-তে কাজ করে না।

---

### আরও যেভাবে ভাগ করা যায়

---

**Stability অনুযায়ী**

Stable sort সমান element-দের আপেক্ষিক ক্রম ঠিক রাখে।

- Stable: Merge Sort, Insertion Sort, Bubble Sort
- Unstable: Selection Sort, Quick Sort (default), Heap Sort

---

**Memory ব্যবহার অনুযায়ী**

- In-place (O(1) extra space): Selection Sort, Bubble Sort, Insertion Sort, Heap Sort
- Out-of-place (বাড়তি array দরকার): Merge Sort, Counting Sort

---

**Adaptiveness অনুযায়ী**

Adaptive sort আংশিক sorted input থেকে সুবিধা নিতে পারে এবং দ্রুত শেষ করে।

- Adaptive: Insertion Sort, optimized Bubble Sort
- Non-adaptive: Selection Sort (input যেভাবেই থাকুক, পুরো unsorted অংশ স্ক্যান করে)

---

**Internal বনাম External**

- Internal: সব data memory-তে ধরে
- External: Data এত বড় যে disk-এ রাখতে হয় (যেমন External Merge Sort)

---

### সারসংক্ষেপ টেবিল

| Category | উদাহরণ |
|----------|---------|
| Comparison-based | Selection, Quick, Merge |
| Non-comparison | Counting, Radix |
| Stable | Merge, Bubble, Insertion |
| Unstable | Selection, Heap, Quick |
| In-place | Selection, Insertion, Bubble |
| Out-of-place | Merge, Counting |
| Adaptive | Insertion, Bubble (optimized) |
| Non-adaptive | Selection, Heap |
