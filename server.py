from flask import Flask, jsonify, request
from flask_cors import CORS
import pint

app = Flask(__name__)
CORS(app)
@app.route('/math', methods=['GET', 'POST'])
def receive():
    req_json = request.get_json(force=True)
    print("DICCIONARIO RECIBIDO:", req_json)
    amount = req_json['amountTo']
    aFrom = req_json['tFrom']
    aTo = req_json['toConvertTo']

    return jsonify(
        {
        "amt": amount,
        "aFrom": aFrom,
        "aTo": aTo
        }
    )

if __name__ == '__main__':
    app.run(debug=True, port=3600)