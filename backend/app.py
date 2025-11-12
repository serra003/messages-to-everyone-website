from flask import Flask, request, jsonify
from flask_cors import CORS
from database import init_db, add_message, get_all_messages
import time

app = Flask(__name__)
CORS(app)  

init_db()

@app.route('/')
def home():
    return "✅ Messages to Everyone backend is running!"

@app.route('/messages', methods=['POST'])
def create_message():
    try:
        data = request.get_json()
        content = data.get('content')
        author = data.get('author', 'Anonymous')

        if not content:
            return jsonify({'error': 'Message content required'}), 400

        # Add message to DB
        add_message(content, author)
        
        message = {
            'content': content,
            'author': author,
            'timestamp': int(time.time() * 1000)
        }

        return jsonify(message), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/messages', methods=['GET'])
def fetch_messages():
    try:
        messages = get_all_messages()
        return jsonify(messages), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
