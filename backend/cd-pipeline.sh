#!/usr/bin/env bash
#
#
ACCOUNTNAME=bwoodhouse322
APPNAME=todo-rest-api

if [[../ci-functions/docker-build-push.sh -x &&  ../ci-functions/deploy-app.sh -x ]] ; then

    ../ci-functions/docker-build-push.sh "${ACCOUNTNAME}" "${APPNAME}" || exit 1
    ../ci-functions/deploy-app.sh
else
    echo "Make sure ci-functions are all made executable" 
    exit 1
fi