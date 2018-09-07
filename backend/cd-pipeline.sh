#!/bin/bash
#
#
ACCOUNTNAME=bwoodhouse322
APPNAME=todo-rest-api
minikube status

#If cluster isn't running, start cluster
if [ $? -eq 1 ] ;
then
    minikube start  
fi


docker build -t $APPNAME --file=docker/Dockerfile .

IMAGEID=$(docker images | grep todo-rest-api | awk '{print $3}'| tail -n 1)


docker tag $IMAGEID $ACCOUNTNAME/$APPNAME

docker push $ACCOUNTNAME/$APPNAME

kubectl config use-context minikube

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
