// worker2.js
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
await client.connect();

const dbPhong = client.db('Phong');
const dbDatPhong = client.db('Dat_Phong');
const dbAdmin = client.db('admin');

app.post('/tinh-doanh-thu', async (req, res) => {
const months = req.body.months; // [4, 5, 6]
const result = [];

for (const month of months) {
    const bookings = await dbDatPhong.collection('ThongTin').find({
    checkIn: {
        $gte: new Date(`2025-${month.toString().padStart(2, '0')}-01`),
        $lt: new Date(`2025-${(month + 1).toString().padStart(2, '0')}-01`)
    },
    status: 'confirmed'
    }).toArray();

    let total = 0;
    for (const b of bookings) {
    const room = await dbPhong.collection('Phong').findOne({ _id: b.roomId });
    const days = (new Date(b.checkOut) - new Date(b.checkIn)) / (1000 * 60 * 60 * 24);
    total += (room?.pricePerNight || 0) * days;
    }

    result.push({ month, total });
}

  // Ghi vào admin.DoanhThu
for (const r of result) {
    await dbAdmin.collection('DoanhThu').updateOne(
    { month: r.month },
    { $set: { month: r.month, total: r.total } },
    { upsert: true }
    );
}

res.json({ success: true, data: result });
});

app.listen(3002, () => console.log('Worker 2 running on port 3002'));
