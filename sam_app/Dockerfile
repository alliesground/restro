# FROM python:alpine

# RUN apk update && \
#     apk upgrade && \
#     apk add bash && \
#     apk add --no-cache --virtual build-deps build-base gcc musl-dev && \
#     apk add postgresql-dev && \
#     apk add postgresql-client && \
#     apk add libc-dev && \
#     pip install aws-sam-cli && \
#     apk add ruby && \
#     apk add ruby-dev && \
#     apk add ruby-bundler && \
#     apk add util-linux && \
#     apk del build-deps

FROM ruby:2.7.0-alpine

RUN apk add --update --no-cache \
    build-base \
    postgresql-dev \
    postgresql-client \
    python3 \
    py3-pip \
    util-linux \
    python3-dev

RUN pip3 install aws-sam-cli

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
