#!/bin/bash
#
#
ACCOUNTNAME=bwoodhouse322

docker build -t todo-rest-api --file=docker/Dockerfile .

IMAGEID=$(docker images | grep todo-rest-api | awk '{print $3}')

docker tag $IMAGEID $ACCOUNTNAME/todo-rest-api

docker push $ACCOUNTNAME/todo-rest-api 


