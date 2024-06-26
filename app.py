from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.get_json()
    print(f"Received data: {data}")  # Debugging log
    if 'message' in data:
        chat_id = data['message']['chat']['id']
        text = data['message']['text']

        if text == '/start':
            send_message(chat_id, "Welcome to the CHIMP game! [Play here](https://nassaramuto.github.io/chimp-app)")
        
    return jsonify(success=True)

def send_message(chat_id, text):
    url = f'https://api.telegram.org/bot{your_bot_token}/sendMessage'
    payload = {'chat_id': chat_id, 'text': text, 'parse_mode': 'Markdown'}
    requests.post(url, json=payload)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
