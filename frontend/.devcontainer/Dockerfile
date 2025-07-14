FROM node:22

# Set working directory
WORKDIR /app

# Install dependencies (do NOT copy full source yet for cache efficiency)
COPY package*.json ./

RUN npm install

# Now copy the rest of the project
COPY . .

# Expose port for Vite
EXPOSE 5174

# Default command (if running directly)
CMD ["npm", "run", "dev", "--", "--host"]
