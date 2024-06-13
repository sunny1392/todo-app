# Dockerfile for todo-backend
FROM node:16-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Command to run the application in production mode
CMD ["npm", "run", "start:prod"]
