import os
from pymongo import MongoClient
from pymongo.errors import PyMongoError
from dotenv import load_dotenv

load_dotenv()
uri = os.getenv("MONGO_URI")

client = MongoClient(uri)
db = client.test
collection = db.my_collection

print("🔍 Đang theo dõi thay đổi trong collection 'my_collection'...")

try:
    with collection.watch() as stream:
        for change in stream:
            print("🟡 Thay đổi phát hiện:", change)
except PyMongoError as e:
    print("❌ Lỗi khi theo dõi Change Stream:", e)
