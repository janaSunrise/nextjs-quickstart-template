FROM node:15-slim

RUN apt-get -y update \
    && apt-get install git netcat -y \
    && rm -rf /root/.cache/pip/* \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json* ./
RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["run", "dev"]
