# chat-application

This is a simple Group Chat App that's implemented in React and Java Spring boot. The Database used is MySQL

# How to run

## Frontend:

- navigate to the frontend folder
- run `npm install` to install all the dependencies
- run `npm start`
  The application runs on port 3000

## Backend

- navigate to the backend folder
- add your database credentials to the [application.properties file]('backend/src/main/resources/application.properties')
- run `mvn clean install`
- run `java -jar target/chat-app.jar `
  The server runs on port 8080
