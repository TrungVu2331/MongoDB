import fetch from 'node-fetch';

const workers = [
  { url: 'http://localhost:3001/tinh-doanh-thu', months: [1, 2, 3] },
  { url: 'http://localhost:3002/tinh-doanh-thu', months: [4, 5, 6] },
  { url: 'http://localhost:3003/tinh-doanh-thu', months: [7, 8, 9] },
  { url: 'http://localhost:3004/tinh-doanh-thu', months: [10, 11, 12] }
];

for (const w of workers) {
  await fetch(w.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ months: w.months })
  })
  .then(res => res.json())
  .then(data => console.log(`Worker xử lý tháng ${w.months}:`, data))
  .catch(err => console.error(`Lỗi worker ${w.url}`, err));
}