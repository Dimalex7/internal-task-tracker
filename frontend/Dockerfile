# use lightweight node image
FROM node:18-alpine

# set working directory
WORKDIR /app

# copy package files and install dependencies first
COPY package.json package-lock.json ./
RUN npm install

# copy the rest of the application files
COPY . .

# expose the default vite port
EXPOSE 5173

# start the vite development server and expose it to the network
CMD ["npm", "run", "dev", "--", "--host"]