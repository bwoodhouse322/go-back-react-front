#!/bin/bash
#
#
ACCOUNTNAME=bwoodhouse322

minikube status

#If cluster isn't running, start cluster
if [ $? -eq 1 ] ;
then
    minikube start  
fi


docker build -t todo-rest-api --file=docker/Dockerfile .

IMAGEID=$(docker images | grep todo-rest-api | awk '{print $3}'| tail -n 1)

echo $IMAGEID 

docker tag $IMAGEID $ACCOUNTNAME/todo-rest-api

docker push $ACCOUNTNAME/todo-rest-api 

kubectl config use-context minikube

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
