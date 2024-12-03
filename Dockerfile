# Step 1: Use an official Node.js runtime as a base image
FROM node:16

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the application files into the container
COPY . .

# Step 4: Expose port 3000 (though this is not necessary in this case since it's a CLI app)
EXPOSE 3000

# Step 5: Define the command to run the application
CMD ["node", "calculator.js"]

