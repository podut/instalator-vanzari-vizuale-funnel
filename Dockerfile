FROM node:18-alpine AS builder

WORKDIR /app

# Copiază package.json și package-lock.json
COPY package*.json ./

# Instalează dependențele
RUN npm ci --only=production

# Copiază codul sursă
COPY . .

# Build aplicația
RUN npm run build

# Etapa de producție
FROM nginx:alpine

# Copiază build-ul din etapa anterioară
COPY --from=builder /app/publish /usr/share/nginx/html

# Configurație nginx pentru SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expune portul 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]