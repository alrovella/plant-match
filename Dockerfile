# Etapa 1: Construcción
FROM node:16 AS build

WORKDIR /app

# Copia los archivos de configuración necesarios
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto de los archivos del proyecto, incluyendo la carpeta src
COPY . .

# Construye la aplicación
RUN npm run build

# Etapa 2: Servidor Nginx
FROM nginx:alpine

# Copia los archivos construidos desde la etapa anterior al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# (Opcional) Configuración personalizada de Nginx
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
