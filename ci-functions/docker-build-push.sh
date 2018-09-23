#!/usr/bin/env/bash
#
#Usage; ./docker-build-push.sh USERNAME REPONAME
#

docker build -t "$2" --file=docker/Dockerfile .

IMAGEID=$(docker images | grep $APPNAME| awk '{print $3}'| head -n 1)


docker tag "${IMAGEID}" "${ACCOUNTNAME}"/"$2"

docker push "$1"/"$2"
