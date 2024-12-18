import json
from Colors import Color
from flask import Flask, jsonify, request

app = Flask(__name__)

ROCKET = None
SATELLITE = None
SPACECRAFT = None
HUMAN_GENERATED = None
MATERIALS_NAME = None
MATERIALS = None
TYPICAL_USAGE = None
PRICE = None



def load_materials():
	with open('datasets/materials.txt') as f:
		data = f.read().split('\n')
		for i in range(len(data)):
			data[i] = data[i].strip()
			if (data[i] == ''):
				data.pop(i)
		return data


def load_price():
	with open('datasets/materials.txt') as f:
		data = f.read().split('\n')
		for i in range(len(data)):
			data[i] = data[i].split('\t')
			if (data[i] == ''):
				data.pop(i)
		return data


def load_materials_json(set_name: str):
	with open(f'datasets/{set_name}.json') as f:
		data = json.load(f)
		return data


def print_material_usage(use_case: dict):
	for use in use_case['materials']:
		print(Color.cyan(use))


def find_material_usage(material: str):
	records = []

	for use_case in ROCKET:
		for set_material in use_case['materials']:
			if material.lower() in set_material['name'].lower():
				records.append(use_case['part'])

	for set_material in SATELLITE:
		if material.lower() in set_material['name'].lower():
			records.append("Satellite")

	for use_case in SPACECRAFT:
		for set_material in use_case['materials']:
			if material.lower() in set_material['name'].lower():
				records.append(use_case['component'])

	for use_case in HUMAN_GENERATED:
		for set_material in use_case['materials']:
			if material.lower() in set_material['name'].lower():
				records.append(use_case['object'])

	records = list(set(records))
	print(Color.magenta(f"FOUND: {len(records)} records"))
	for record in records:
		print(Color.cyan(record))



def fill_material_weight_data():
	materials = {}
	for material in MATERIALS_NAME:
		materials[material.lower()] = None
		parts = {}
		for use_case in ROCKET:
			for set_material in use_case['materials']:
				if material.lower() in set_material['name'].lower():
					parts[use_case['part']] = set_material['mass_kg']

		for set_material in SATELLITE:
			if material.lower() in set_material['name'].lower():
				parts["Satellite"] = set_material['mass_kg']

		for use_case in SPACECRAFT:
			for set_material in use_case['materials']:
				if material.lower() in set_material['name'].lower():
					parts[use_case['component']] = set_material['mass_kg']

		for use_case in HUMAN_GENERATED:
			for set_material in use_case['materials']:
				if material.lower() in set_material['name'].lower():
					parts[use_case['object']] = set_material['mass_kg']

		materials[material.lower()] = parts
	return materials


@app.route('/materials', methods=['GET'])
def get_materials():
	return jsonify(MATERIALS_NAME)

@app.route('/materials/<material>', methods=['GET'])
def get_material(material):
	# ret = {MATERIALS[material.lower()]: None}
	return jsonify(MATERIALS[material.lower()])


if __name__ == '__main__':
	MATERIALS_NAME = load_materials()
	print(Color.green(f"LEN: {len(MATERIALS_NAME)}"))
	print(MATERIALS, end='\n\n')

	TYPICAL_USAGE = load_materials_json('typical_usage')['use_cases']
	print(Color.green(f"TYPICAL USAGE LEN: {len(TYPICAL_USAGE)}"))
	for use_case in TYPICAL_USAGE:
		print(use_case['name'])
	print()

	ROCKET = load_materials_json('rocket')['materials']
	print(Color.yellow(f"ROCKET LEN: {len(ROCKET)}"))

	SATELLITE = load_materials_json('satellite')['materials']
	print(Color.yellow(f"SATELLITE LEN: {len(SATELLITE)}"))

	SPACECRAFT = load_materials_json('spacecraft')['materials']
	print(Color.yellow(f"SPACECRAFT LEN: {len(SPACECRAFT)}"))

	HUMAN_GENERATED = load_materials_json('human_generated')['materials']
	print(Color.yellow(f"HUMAN GENERATED LEN: {len(HUMAN_GENERATED)}"), end='\n\n')


	MATERIALS = fill_material_weight_data()
	for material in MATERIALS:
		print(Color.magenta(material))
		for part in MATERIALS[material]:
			print(Color.cyan(f"{part}: {MATERIALS[material][part]}"))
		print()

	app.run(debug=False)
