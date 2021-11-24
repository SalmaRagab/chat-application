# How to run this project?

- run `npm install` to install all the dependencies
- run `npm start`

This project runs by default on port **3000**

## The backend for this project can be found in this [repository](https://github.com/SalmaRagab/chat-application-backend)

## To run this with docker

- build the docker image using this command `docker build -t chat-fe .`
- create the image container and serve using this command `sudo docker run -it --rm -v ${PWD}:/src -v /src/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true chat-fe`

- Et Voila! The Application is running now on [http://localhost:3001/]
