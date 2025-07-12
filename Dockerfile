#compilar la app angular

FROM node:20-alpine AS build
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build -- --configuration=production

#etapa 2 

FROM nginx:alpine
COPY --from=build /app/dist/authLogin/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf


