#!/bin/bash

if [ "$NODE_ENV" != "production" ];then
    export NODE_ENV=production
fi

echo $NODE_ENV

npm install --production

npm start
