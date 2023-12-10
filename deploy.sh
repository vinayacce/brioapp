#!/bin/bash
sudo docker build -t staticsite01 .
sudo docker images
sudo docker run -d -p 80:80 --name staticsite01 staticsite01
