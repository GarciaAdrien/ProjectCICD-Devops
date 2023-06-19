FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apt-get update && apt-get install -y cowsay
EXPOSE 8081
CMD ["cowsay", "Hello, Docker!"]
