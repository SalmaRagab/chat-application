FROM openjdk:18

LABEL MAINTAINER: Salma Ragab <SalmaaHRagab@gmail.com>

COPY target/chat-app.jar /chat-app.jar
EXPOSE 8086
ENTRYPOINT ["java", "-jar", "/chat-app.jar"]