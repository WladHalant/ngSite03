#!/bin/bash

ng build --aot --output-hashing=all
sshpass -p "angel007" scp dist/* root@172.106.32.52:/var/www/html
