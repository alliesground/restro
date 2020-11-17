FROM python:alpine

RUN apk update && \
    apk upgrade && \
    apk add bash && \
    apk add --no-cache --virtual build-deps build-base gcc && \
    pip install aws-sam-cli && \
    apk del build-deps

ARG USER
ARG HOME
ARG UID

RUN apk add --update \
    sudo

RUN echo "Welcome home: $USER => $UID"

RUN adduser -S -D -G users -u $UID $USER
RUN addgroup -S sudo
RUN echo "%sudo ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/sudo 
RUN adduser $USER sudo

RUN echo "Welcome home: $USER"

WORKDIR ${HOME}

EXPOSE 3001

ENTRYPOINT ["sh", "./entrypoint.sh"]
