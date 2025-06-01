const { MongoClient } = require("mongodb");

async function updatePrices() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const db = client.db("Dat_Phong");
  const bookings = await db.collection("ThongTin").find({ status: "confirmed" }).toArray();

  for (const booking of bookings) {
    const phong = await client.db("Phong").collection("Phong").findOne({ _id: booking.roomId });
    if (!phong) continue;

    const checkIn = new Date(booking.checkIn);
    const checkOut = new Date(booking.checkOut);
    const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const total = nights * phong.pricePerNight;

    await db.collection("ThongTin").updateOne(
      { _id: booking._id },
      { $set: { totalPrice: total } }
    );

    console.log(`Booking ${booking._id} updated with totalPrice: ${total}`);
  }

  await client.close();
}

updatePrices();