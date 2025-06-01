// worker4.js
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
  const months = req.body.months; // [10, 11, 12]
  const result = [];

  for (const month of months) {
    const startOfMonth = new Date(`2025-${month.toString().padStart(2, '0')}-01`);
    const startOfNextMonth = new Date(`2025-${(month + 1).toString().padStart(2, '0')}-01`);

    const bookings = await dbDatPhong.collection('ThongTin').find({
      status: 'confirmed',
      $expr: {
        $and: [
          { $lt: ["$checkIn", startOfNextMonth] },
          { $gte: ["$checkOut", startOfMonth] }
        ]
      }
    }).toArray();

    let total = 0;
    for (const b of bookings) {
      const room = await dbPhong.collection('Phong').findOne({ _id: b.roomId });
      if (!room) continue;

      const actualCheckIn = b.checkIn < startOfMonth ? startOfMonth : b.checkIn;
      const actualCheckOut = b.checkOut > startOfNextMonth ? startOfNextMonth : b.checkOut;

      const days = (actualCheckOut - actualCheckIn) / (1000 * 60 * 60 * 24);
      total += room.pricePerNight * days;
    }

    result.push({ month, total });
  }

  for (const r of result) {
    await dbAdmin.collection('DoanhThu').updateOne(
      { month: r.month },
      { $set: { month: r.month, total: r.total } },
      { upsert: true }
    );
  }

  res.json({ success: true, data: result });
});

app.listen(3004, () => console.log('Worker 4 running on port 3004'));
