# Use an official Node runtime as a base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI and project dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Angular app
RUN ng build --prod

# Expose the port on which the app will run
EXPOSE 80

# Start the Angular app
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]


# FROM node:latest as build

# WORKDIR /usr/local/app

# COPY ./ /usr/local/app

# RUN npm install

# RUN npm run build

# FROM nginx:latest

# COPY --from=build /usr/local/app/dist/sistema_agremiados /usr/share/nginx/html

# EXPOSE 80

