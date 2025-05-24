# Dockerfile pentru deployment simplu cu npm start
FROM node:18-alpine

WORKDIR /app

# Copiază fișierele de dependențe
COPY package*.json ./

# Instalează dependențele
RUN npm install

# Copiază tot codul sursă
COPY . .

# Build aplicația
RUN npm run build

# Expune portul 8080
EXPOSE 8080

# Pornește aplicația cu npm start
CMD ["npm", "start"]