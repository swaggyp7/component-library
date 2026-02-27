# using node 22 as building environment
# name the product of building stage as builder
FROM node:22-alpine3.22 AS builder

# set working directory
WORKDIR /yuteng_lin_ui_garden

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# add app
COPY . .

# build app
CMD ["npm", "run", "build-storybook"]

# using nginx to deploy the static website
FROM nginx:alpine

# deleting default nginx page
RUN rm -rf /usr/share/nginx/html/*

# copy product file from builder
COPY --from=builder /yuteng_lin_ui_garden/storybook-static/ /usr/share/nginx/html

# run nginx
CMD ["nginx", "-g", "daemon off;"]