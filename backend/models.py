from database import get_db_connection
from datetime import datetime

def add_message(content):
    conn = get_db_connection()
    cursor = conn.cursor()
    timestamp = datetime.utcnow().isoformat()
    cursor.execute(
        'INSERT INTO messages (content, timestamp) VALUES (?, ?)',
        (content, timestamp)
    )
    conn.commit()
    conn.close()

def get_all_messages():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM messages ORDER BY id DESC')
    messages = cursor.fetchall()
    conn.close()
    return [dict(row) for row in messages]
