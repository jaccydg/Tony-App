#!/bin/bash
cd /home/ubuntu/tonyapp
docker run -d --name tonyapp --hostname tonyapp -p 8080:8080 tonyapp:latest