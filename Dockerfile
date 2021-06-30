#docker image build -t newts1 .
#docker run --network host -d newts1
FROM node:14

# Add package file
COPY package*.json ./

# Install deps
RUN npm i

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json

# Expose port 8080
EXPOSE 8080

CMD npm run start