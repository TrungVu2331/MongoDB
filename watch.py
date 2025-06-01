import os
from pymongo import MongoClient
from pymongo.errors import PyMongoError
from dotenv import load_dotenv
import threading

client = MongoClient("mongodb://localhost:27017/?replicaSet=rs0")
targets = [
    ("Phong", "PhongTrong"),
    ("admin", "DoanhThu")
]

def watch_collection(db_name, coll_name):
    collection = client[db_name][coll_name]
    print(f"🔍 Đang theo dõi {db_name}.{coll_name}")
    try:
        with collection.watch() as stream:
            for change in stream:
                print(f"🟡 [{db_name}.{coll_name}] Thay đổi phát hiện:", change)
    except PyMongoError as e:
        print(f"❌ Lỗi khi theo dõi {db_name}.{coll_name}:", e)

# Tạo luồng riêng để theo dõi từng collection
for db, coll in targets:
    t = threading.Thread(target=watch_collection, args=(db, coll))
    t.daemon = True
    t.start()

# Giữ chương trình chạy
input("Nhấn Enter để thoát...\n")
