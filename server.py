from flask import Flask, jsonify, request
from flask_cors import CORS
from pint import UnitRegistry

ureg = UnitRegistry()
app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET', 'POST'])
def receive():

    req_json = request.get_json(force=True)
    print("DICCIONARIO RECIBIDO:", req_json)
    amount = float(req_json['amountTo'])
    aFrom = req_json['tFrom']
    aTo = req_json['toConvertTo']

    if aFrom == aTo:
        return jsonify ({
                "status": "error",
                "msj": "Corversion failed. You must select differents units.",
                "final": f"You tried to convert {aFrom} to {aTo}."
            }), 400
    try:
        medida = ureg.Quantity(amount, aFrom)
        medidaFinal = medida.to(aTo)
        return jsonify ({
                "status": "success",
                "msj": f"Congratulations the conversion was succesfull.",
                "final": f"{amount} in {aFrom} is equal to {medidaFinal}."
            })
    except Exception as e: 
        return jsonify({
                "status": "error",
                "msj": "Conversion Failed. You must select differents u",
            })
if __name__ == '__main__':
    app.run(debug=True, port=4000)