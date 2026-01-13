# Zadanie WSB - Docker
Projekt zawiera aplikację React skonteneryzowaną przy użyciu Dockera.


## Budowanie obrazu Docker
`docker build -t moj-sklep .`

## Uruchamianie kontenera
`docker run -p 8080:80 moj-sklep`

Otwórz na http://localhost:8080


## Struktura katalogów
```
wsb-docker-task/
├── public/              # Pliki statyczne
├── src/                 # Kod źródłowy aplikacji
│   ├── assets/          # Grafiki i logotypy
│   ├── App.jsx          # Główna logika koszyka
│   ├── main.jsx         # Renderowanie React
│   └── App.css          # Style CSS
├── Dockerfile           # Instrukcje budowania kontenera
├── .dockerignore        # Pliki pomijane przez Docker
├── .gitignore           # Pliki pomijane przez Git
├── package.json         # Zależności i skrypty
└── vite.config.js       # Konfiguracja Vite
```
## .dockerignore
```
node_modules
dist
.git
```
## Rozmiary obrazów
| Wersja | Opis | Rozmiar |
| :--- | :--- | :--- |
| 1.0.0 | Obraz deweloperski | 308.17 MB |
| 2.0.0 | Obraz zoptymalizowany | 92.43 MB |
