# Stage 1: Build the application
FROM node:20 AS builder

# Install Ionic CLI globally
RUN npm install -g @ionic/cli

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:1.25

# Remove default Nginx configuration and add custom configuration
RUN rm -rf /etc/nginx/conf.d
COPY ./nginx/default.conf /etc/nginx/conf.d/

# Copy built application from the builder stage to the Nginx html directory
COPY --from=builder /app/www /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
