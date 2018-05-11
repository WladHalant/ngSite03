#!/bin/bash

ng build --aot --output-hashing=all
sshpass -p "angel007" scp dist/* root@93.170.123.54:/var/www/html
