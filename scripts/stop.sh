#!/bin/bash
cd /home/ubuntu/tonyapp

# Check if the container is running and stop it if it is
if [ "$(docker ps -q -f name=tonyapp)" ]; then
    docker stop tonyapp
fi

# Check if the container exists and remove it if it does
if [ "$(docker ps -a -q -f name=tonyapp)" ]; then
    docker rm tonyapp
fi

# Check if the image exists and remove it if it does
if [ "$(docker images -q tonyapp:latest)" ]; then
    docker rmi tonyapp:latest
fi
