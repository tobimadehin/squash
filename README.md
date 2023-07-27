# squash
## A simple chat application
Squash is a collaboration app with real-time chat, built using React and Node.js Express framework, and incorporating MongoDB, WebSocket, and authentication for a secure and efficient user experience.

You can access squash on https://squash-io.web.app/

## Development
The project was done in a docker container using mcr.microsoft.com/devcontainers/typescript-node:0-18 container on a mounted volume.

This project was deployed on a serverless firebase architecture.

## Local Deployment steps
### Pre-requisites
1. A docker runtime

### Steps
1. Clone the project to your machine and launch your docker daemon

2. Open the project into a container to build the container from image 

3. Change the directory to the client directory ```cd client``` and start using
```npm run start```

4. Change the directory to the server directory ```cd server``` and start using
```npm run start```

5. squash should be up and running on http://localhost:3000/

6. If you run into any issues while executing any of these steps, simply create a case

Cheers!

