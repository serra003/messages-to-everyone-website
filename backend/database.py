import sqlite3
import time

DB_NAME = 'messages.db'

def get_db_connection():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL,
            author TEXT NOT NULL,
            timestamp INTEGER NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

def add_message(content, author):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO messages (content, author, timestamp) VALUES (?, ?, ?)",
        (content, author, int(time.time() * 1000))
    )
    conn.commit()
    conn.close()

def get_all_messages():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM messages ORDER BY timestamp DESC")
    rows = cursor.fetchall()
    conn.close()
    messages = []
    for row in rows:
        messages.append({
            "id": row["id"],
            "content": row["content"],
            "author": row["author"],
            "timestamp": row["timestamp"]
        })
    return messages
