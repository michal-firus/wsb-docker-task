# Zadanie WSB - Docker
Projekt zawiera aplikację React skonteneryzowaną przy użyciu Dockera.

## Jak uruchomić?
1. `docker build -t moj-sklep .`
2. `docker run -p 8080:80 moj-sklep`

# Struktura katalogów
wsb-docker-task/
├── public/              
├── src/                
│   ├── assets/          
│   ├── App.jsx          
│   ├── main.jsx         
│   └── App.css         
├── Dockerfile           
├── .dockerignore       
├── .gitignore
├── index.html
├── package.json 
└── vite.config.js
