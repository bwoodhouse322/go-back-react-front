#!/usr/bin/env bash

minikube status

#If cluster isn't running, start cluster
if [ $? -eq 1 ] ;
then
    minikube start  
fi

kubectl config use-context minikube

kubectl delete -f k8s/deployment.yaml
kubectl delete -f k8s/service.yaml

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
