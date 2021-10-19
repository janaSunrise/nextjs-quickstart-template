FROM node:16-slim

# Install dependencies
RUN apt-get -y update \
    && apt-get install git -y \
    && rm -rf /root/.cache/pip/* \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the files
COPY package.json* ./

# Install dependencies
RUN npm install

# Copy the other files
COPY . .

# Expose port
EXPOSE 3000

# Run the app
ENTRYPOINT ["npm"]
CMD ["run", "dev"]
