// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Phong");

[
    {_id:101, "type": "Deluxe","pricePerNight": 500, "amenities": ["WiFi", "Breakfast", "Pool"],"status": "available"},
    {_id:201, "type": "Deluxe","pricePerNight": 500, "amenities": ["WiFi", "Breakfast", "Pool"],"status": "available"},
    {_id:301, "type": "Deluxe","pricePerNight": 500, "amenities": ["WiFi", "Breakfast", "Pool"],"status": "available"},
    {_id:401, "type": "Deluxe","pricePerNight": 500, "amenities": ["WiFi", "Breakfast", "Pool"],"status": "available"},
    {_id:102, "type": "Standard","pricePerNight": 300, "amenities": ["WiFi", "Breakfast"], "status": "available"},
    {_id:202, "type": "Standard","pricePerNight": 300, "amenities": ["WiFi", "Breakfast"], "status": "available"},
    {_id:302, "type": "Standard","pricePerNight": 300, "amenities": ["WiFi", "Breakfast"], "status": "available"},
    {_id:402, "type": "Standard","pricePerNight": 300, "amenities": ["WiFi", "Breakfast"], "status": "available"},
    {_id:103, "type": "Suite","pricePerNight": 700, "amenities": ["WiFi", "Breakfast", "Pool", "Spa"],"status": "available"},
    {_id:203, "type": "Suite","pricePerNight": 700, "amenities": ["WiFi", "Breakfast", "Pool", "Spa"],"status": "available"},
    {_id:303, "type": "Suite","pricePerNight": 700, "amenities": ["WiFi", "Breakfast", "Pool", "Spa"],"status": "available"},
    {_id:403, "type": "Suite","pricePerNight": 700, "amenities": ["WiFi", "Breakfast", "Pool", "Spa"],"status": "available"}
].forEach(doc => {
    db.getCollection("Phong").updateOne({_id:doc._id}, {$set:doc}, {upsert:true});
});

use("NhanVien");
[
    {_id:1, "name": "Nguyen Van A", "role": "Receptionist", "contact":"0123456789","email":"a@gmail.com","salary": 5000},
    {_id:2, "name": "Tran Van B", "role": "Receptionist", "contact":"0145678101","email":"aa@gmail.com","salary": 6000},
    {_id:3, "name": "Nguyen Thi A", "role": "Hotel Housekeeper", "contact":"0127894510","email":"ab@gmail.com","salary": 4000},
    {_id:4, "name": "Nguyen Van C", "role": "Hotel Housekeeper", "contact":"0324567890","email":"bc@gmail.com","salary": 3000},
    {_id:5, "name": "Tran Van C", "role": "Hotel Housekeeper", "contact":"032645871","email":"bd@gmail.com","salary": 10000},
    {_id:6, "name": "Vu Van D", "role": "Manager", "contact":"0022054896","email":"be@gmail.com","salary": 10000},
].forEach(doc => {
    db.getCollection("persons").updateOne({_id: doc._id}, {$set: doc}, {upsert: true});
});

use("Khach");
[
    {_id: 7, "name": "Trinh Van E", "contact": "0154789620", "email":"abed@gmail.com"},
    {_id: 8, "name": "Duong Van B", "contact": "05689742648", "email":"abweq@gmail.com"},
    {_id: 9, "name": "Nguyen Thi Nhat A", "contact": "0236548513", "email":"abre@gmail.com"},
    {_id: 10, "name": "Nguyen Vu Van F", "contact": "0245687940", "email":"absdasfs@gmail.com"},
    {_id: 11, "name": "Nguyen Vu E", "contact": "0126548123", "email":"abffds@gmail.com"},
    {_id: 12, "name": "Tran Van D", "contact": "0456789101", "email":"abdasdasd@gmail.com"}
].forEach(doc => {
    db.getCollection("Customer_in4").updateOne({_id: doc._id}, {$set: doc}, {upsert: true});
});

use("Dat_Phong");
[
    {_id: ObjectId(),"roomId": 102,"customerId": 7,"checkIn": ISODate("2025-05-20T14:30:00.000+00:00"),"checkOut": ISODate("2025-06-20T10:50:00.000+00:00"),"status": "confirmed"},
    {_id: ObjectId(),"roomId": 101,"customerId": 9,"checkIn": ISODate("2025-01-20T14:30:00.000+00:00"),"checkOut": ISODate("2025-03-20T10:50:00.000+00:00"),"status": "confirmed"},
    {_id: ObjectId(),"roomId": 104,"customerId": 11,"checkIn": ISODate("2025-02-20T14:30:00.000+00:00"),"checkOut": ISODate("2025-04-20T10:50:00.000+00:00"),"status": "confirmed"},
    {_id: ObjectId(),"roomId": 202,"customerId": 12,"checkIn": ISODate("2025-12-10T14:30:00.000+00:00"),"checkOut": ISODate("2025-12-20T10:50:00.000+00:00"),"status": "confirmed"},
    {_id: ObjectId(),"roomId": 301,"customerId": 8,"checkIn": ISODate("2025-04-20T14:50:00.000+00:00"),"checkOut": ISODate("2025-05-01T16:10:00.000+00:00"),"status": "confirmed"},
    {_id: ObjectId(),"roomId": 203,"customerId": 10,"checkIn": ISODate("2025-03-20T10:15:00.000+00:00"),"checkOut": ISODate("2025-03-29T17:00:00.000+00:00"),"status": "confirmed"},
].forEach(doc => {
    db.getCollection("ThongTin").updateOne(
        {roomId: doc.roomId, customerId: doc.customerId}, // Điều kiện định danh
        {$setOnInsert: {...doc, _id: ObjectId()}},       // Chỉ chèn nếu chưa tồn tại
        {upsert: true}
    );
});
