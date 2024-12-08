# OrbitCycle

# PL
### ENG version below
## Przedstawienie projektu

OrbitCycle to projekt, który wizualizuje zanieczyszczenia w przestrzeni kosmicznej za pomocą Unity WebGL. Zawiera Flask API do pobierania danych większości materiałow, które kosmiczne śmieci zawierają oraz frontend Next.js do interakcji użytkownika.

## Struktura projektu

- **api/**: Zawiera API Flaska do obsługi danych o materiałach.
- **web_unity/**: Zawiera skompilowaną wersję Unity (do WebGL) oraz dane wizualizacji.
- **api/datasets/**: Zawiera pliki typu JSON z danymi różnych materiałów.

## Uruchamianie projektu
1. **Sklonuj repozytorium**:
	```bash
	git clone https://github.com/igordotdev/orbitcycle.git orbitcycle
	cd orbitcycle
	```

1. **Uruchom Flask API**:
	```bash
	cd api
	python get_material.py
	```
2. **Uruchom Unity Server**
        Zainstaluj dodatek do VS Code lub VS Code Insiders o nazwie ```Live Server```, potem w prawym dolnym rogu okna kliknij ```Go Live```

3. **W nowym terminalu uruchom frontend Next.js**:
	```bash
 	npm install
	npm run dev
	```

4. Otwórz [http://localhost:3000](http://localhost:3000) używając twojej przeglądarki.

## Wyjścia API

- **GET /api/get_material/<material>**: Pobiera dane z serwera o danym materiale.

## Użyte technologie

### Frontend

<p align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" style="height: 50px;"/>
</p>

**Next.js**: Użyty do zaprogramowania frontend-u naszej strony

### Backend

<p align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" style="height: 100px;"/>
</p>

**Python**: Użyty do zaprogramowania backend-u strony.

### API

<p align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" alt="Flask" style="height: 90px;"/>
</p>

**Flask**: Użyty do obsługi API strony i backend-u.

Wypróbuj kalkulator, używając przykładowych materiałów:
- Aluminum
- Steel
- Copper
- Aluminum Alloy
- Gold
- Silver
- Nickel
- Titanium
- Composites

### Wizualizacja

<p align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg" alt="Unity" style="height: 80px;"/>
</p>

**Unity WebGL**: Użyty do wizualizacji różnych orbit Ziemi.


# EN
# OrbitCycle
## Project Overview

OrbitCycle is a project that visualizes debris in space using Unity WebGL. It includes a Flask API to fetch material data and a Next.js frontend for user interaction.

## Project Structure

- **api/**: Contains the Flask API to fetch material data.
- **web_unity/**: Contains the Unity WebGL build and related assets.
- **api/datasets/**: Contains JSON and text files with material data.

## Running the Project

1. **Clone git repo**:
	```bash
	git clone https://github.com/igordotdev/orbitcycle.git orbitcycle
	cd orbitcycle
	```

1. **Start the Flask API**:
	```bash
	cd api
	python get_material.py
	```
2. **Start Unity Server:**

3. Install add-on to VS Code or Vs Code Insiders called ```Live Server```, then in the bottom right click ```Go live```.

3. **Run the Next.js frontend**:
	```bash
 	npm install
	npm run dev
	```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Endpoints

- **GET /api/get_material/<material>**: Fetches data for a specific material.

## Used technologies

### Frontend

<p align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" style="height: 50px;"/>
</p>

**Next.js**: Used to program the frontend of our site.

### Backend

<p align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" style="height: 100px;"/>
</p>

**Python**: Used to program backend for this site.

### API

<p align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" alt="Flask" style="height: 90px;"/>
</p>

**Flask**: Used to handle API calls to backend.

Try calculator with materials:
- Aluminum
- Steel
- Copper
- Aluminum Alloy
- Gold
- Silver
- Nickel
- Titanium
- Composites

### Visualization

<p align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg" alt="Unity" style="height: 80px;"/>
</p>

**Unity WebGL**: Used to visualize data presented to the user by API calls.
