from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/get_material/<material>', methods=['GET'])
def get_material(material):
    name = material.lower()
    if not name:
        return jsonify({"error": "No material name provided"}), 400
    script_dir = os.path.dirname(__file__)
    json_path = os.path.join(script_dir, 'datasets', 'materials.json')
    with open(json_path, 'r') as f:
        data = json.load(f)
    material = next((item for item in data['materials'] if item['name'].lower() == name.lower()), None)
    if material:
      return jsonify(material), 200
    else:
      return jsonify({"error": "Material not found"}), 404



if __name__ == '__main__':
    app.run(debug=False)
