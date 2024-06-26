from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.get_json()
    if 'message' in data:
        chat_id = data['message']['chat']['id']
        text = data['message']['text']

        if text == '/start':
            send_message(chat_id, "Welcome to the CHIMP game! [Play here](https://yourusername.github.io/repositoryname)")
        
        # Add more commands as needed

    return jsonify(success=True)

def send_message(chat_id, text):
    import requests
    url = f'https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage'
    payload = {'chat_id': chat_id, 'text': text, 'parse_mode': 'Markdown'}
    requests.post(url, json=payload)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
