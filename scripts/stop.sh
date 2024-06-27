#!/bin/bash
cd /home/ubuntu/tonyapp
docker stop tonyapp
docker remove tonyapp
docker image remove tonyapp:latest