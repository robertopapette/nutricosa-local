FROM node:18-slim

WORKDIR /app

# Copia solo i file necessari per installare le dipendenze
COPY package*.json ./

# Installazione con fix per rollup/vite
RUN npm install --legacy-peer-deps

# Copia tutto il progetto
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
