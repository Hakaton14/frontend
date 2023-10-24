FROM node:16-slim
LABEL description="Cleanpro: Frontend" \
      version="1.0" \
      maintainer="Cleanpro team"
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build
