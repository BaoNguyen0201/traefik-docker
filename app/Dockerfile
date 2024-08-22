FROM node:14

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the application files
COPY . .

# Install dependencies (if you have any)
# RUN npm install

# Expose the port that the application will run on
EXPOSE 3000

# Start the server
CMD ["node", "index.js"]

# Add a health check
HEALTHCHECK --interval=5s --timeout=1s --retries=3 CMD curl -f http://localhost:3000/health || exit 1

