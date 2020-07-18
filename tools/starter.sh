#!/bin/bash

curl -OL https://github.com/dand-or/ore-chrome-extension-base/archive/master.zip
unzip -u master.zip
cp -pR ./ore-chrome-extension-base-master/* .
rm -rf ./ore-chrome-extension-base-master
rm master.zip
