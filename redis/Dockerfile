FROM redis:4.0.11

FROM node:10.11-jessie
COPY --from=0 /usr/local/bin/redis* /usr/local/bin/

RUN mkdir -p /opt/qewd
WORKDIR /opt/qewd

COPY . /opt/qewd
RUN chmod +x ./entrypoint.sh

EXPOSE 8080

CMD ["./entrypoint.sh"]