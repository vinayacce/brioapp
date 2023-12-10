# # Stage 1: Build the React app
# FROM node:alpine3.16 as nodework
# WORKDIR /myapp
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve the React app using Nginx
# FROM nginx:1.23-alpine
# WORKDIR /usr/share/nginx/html

# # Remove the existing content in the Nginx directory (this is fine)
# RUN rm -rf ./*

# # Copy the build from the first stage (nodework) into the Nginx directory
# COPY --from=nodework /myapp/build .

# # Adjust the ENTRYPOINT to start Nginx correctly
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

