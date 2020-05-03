FROM openjdk:8-jre-alpine
VOLUME /tmp

COPY ./backend/build/libs/gs-spring-boot-0.1.0.jar gs-spring-boot-0.1.0.jar

ENTRYPOINT ["java","-jar","/gs-spring-boot-0.1.0.jar"]
