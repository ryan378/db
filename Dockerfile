# Stage 1: Build the Vue.js app
FROM node:18 as build-stage

WORKDIR /app

COPY web/package*.json ./
RUN npm install

COPY web/ ./
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
