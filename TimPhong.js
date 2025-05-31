const newCheckIn = ISODate("2025-06-10T14:00:00Z");
const newCheckOut = ISODate("2025-06-15T12:00:00Z");

const availableRooms = db.getSiblingDB("Phong").Phong.aggregate([
  {
    $lookup: {
      from: "Dat_Phong.ThongTin",
      let: { roomId: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$roomId", "$$roomId"] },
                { $eq: ["$status", "confirmed"] },
                { $lt: ["$checkIn", newCheckOut] },
                { $gt: ["$checkOut", newCheckIn] }
              ]
            }
          }
        }
      ],
      as: "conflictingBookings"
    }
  },
  {
    $match: { conflictingBookings: { $size: 0 } }
  },
  {
    $project: { conflictingBookings: 0 }
  },
  {
    $merge: {
      into: { db: "Dat_Phong", coll: "PhongTrong" },
      whenMatched: "merge",
      whenNotMatched: "insert"
    }
  }
])
