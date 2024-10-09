# Use the official Node.js image with a compatible version
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Specify the command to run the application
CMD ["npm", "start"]

# Expose the port the app runs on
EXPOSE 3000