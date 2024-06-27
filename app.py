from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.get_json()
    if 'message' in data:
        chat_id = data['message']['chat']['id']
        text = data['message']['text']

        if text == '/start':
            send_message(chat_id, "Welcome to the CHIMP game! [Play here](https://chimp-app-6f814a960105.herokuapp.com)")

    return jsonify(success=True)

def send_message(chat_id, text):
    import requests
    url = f'https://api.telegram.org/bot7373207583:AAG8PBOs4G0iNDynSFCYvLcSvv0uveFxV34/sendMessage'
    payload = {'chat_id': chat_id, 'text': text, 'parse_mode': 'Markdown'}
    requests.post(url, json=payload)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
