#!/bin/bash
#
#USAGE : "REGISTRY-HOSTNAME=<docker-registry-host-name> REPO="repo" ./cd-pipeline.sh"
#
docker build -t todo-rest-api --file=docker/Dockerfile

docker push ${REGISTRY-HOSTNAME}/${REPO}/todo-rest-api


