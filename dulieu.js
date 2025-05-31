// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Phong");

db.getCollection("Phong").insertMany([
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
]);

use("NhanVien");
db.getCollection("persons").insertMany([
    {_id:1, "name": "Nguyen Van A", "role": "Receptionist", "contact":"0123456789","email":"a@gmail.com","salary": 5000},
    {_id:2, "name": "Tran Van B", "role": "Receptionist", "contact":"0145678101","email":"aa@gmail.com","salary": 6000},
    {_id:3, "name": "Nguyen Thi A", "role": "Hotel Housekeeper", "contact":"0127894510","email":"ab@gmail.com","salary": 4000},
    {_id:4, "name": "Nguyen Van C", "role": "Hotel Housekeeper", "contact":"0324567890","email":"bc@gmail.com","salary": 3000},
    {_id:5, "name": "Tran Van C", "role": "Hotel Housekeeper", "contact":"032645871","email":"bd@gmail.com","salary": 10000},
    {_id:6, "name": "Vu Van D", "role": "Manager", "contact":"0022054896","email":"be@gmail.com","salary": 10000}
]);

use("Khach");
db.getCollection("Customer_in4").insertMany([
    {_id: 7, "name": "Trinh Van E", "contact": "0154789620", "email":"abed@gmail.com"},
    {_id: 8, "name": "Duong Van B", "contact": "05689742648", "email":"abweq@gmail.com"},
    {_id: 9, "name": "Nguyen Thi Nhat A", "contact": "0236548513", "email":"abre@gmail.com"},
    {_id: 10, "name": "Nguyen Vu Van F", "contact": "0245687940", "email":"abdsa@gmail.com"}
]);

use("Dat_Phong");
db.getCollection("ThongTin").insertMany([
    {_id: ObjectId(),"roomId": 102,"customerId": 7,"checkIn": ISODate("2025-05-20T14:30:00.000+00:00"),"checkOut": ISODate("2025-06-20T10:50:00.000+00:00"),"status": "confirmed"},
    {_id: ObjectId(),"roomId": 301,"customerId": 8,"checkIn": ISODate("2025-04-20T14:50:00.000+00:00"),"checkOut": ISODate("2025-05-01T16:10:00.000+00:00"),"status": "confirmed"},
    {_id: ObjectId(),"roomId": 203,"customerId": 10,"checkIn": ISODate("2025-03-20T10:15:00.000+00:00"),"checkOut": ISODate("2025-03-29T17:00:00.000+00:00"),"status": "confirmed"},
]);
