FROM mysql:8.0.33-debian
LABEL authors="NickNg"

ENV MYSQL_ALLOW_EMPTY_PASSWORD=true
ENV MYSQL_USER=nickng
ENV MYSQL_PASSWORD=12345678
ENV MYSQL_DATABASE=dev-test-database

COPY . /docker-entrypoint-initdb.d/
