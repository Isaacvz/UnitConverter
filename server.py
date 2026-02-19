from flask import Flask, jsonify, request
from flask_cors import CORS
from pint import UnitRegistry

ureg = UnitRegistry()
app = Flask(__name__)
CORS(app)
@app.route('/', methods=['GET', 'POST'])
def receive():

    if request.method == 'GET':
        return jsonify({
            "status": "online",
            "message": "Unit Converter API is running. Send a POST request to convert."
        })
    
    try:
        req_json = request.get_json(force=True)
        amount = float(req_json.get('amountTo', 0))
        aFrom = req_json.get('tFrom')
        aTo = req_json.get('toConvertTo')

        if aFrom == aTo:
            return jsonify ({
                "status": "error",
                "msj": "Corversion failed. You must select differents units.",
                "final": f"You tried to convert {aFrom} to {aTo}."
            }), 400

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
                "msj": "Conversion Failed. Error: {e}."
            })
if __name__ == '__main__':
    app.run(debug=True, port=4000)