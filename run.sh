#!/bin/bash

echo $NODE_ENV

if ($NODE_ENV != 'production'){
    export NODE_ENV=production
}
npm install --production

npm start
