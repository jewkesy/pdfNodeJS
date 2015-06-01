# pdfNodeJS
PDF Generation Application

Based upon 
http://www.feedhenry.com/server-side-pdf-generation-node-js/

## Get some sample data in
```
$ mongoimport -h localhost -d f1 -c constructors --type json --file data/constructors.json --jsonArray --drop
```

## Get PhantomJS

Download and uncompress from http://phantomjs.org/download.html then rename the folder to remove version details if required.

Yosemite binary fix is here https://github.com/eugene1g/phantomjs/releases

## Set up env

```
$ sudo nano ~/./bash_profile
```

add the following, using your profile name: -
```
export PHANTOMJS_PATH=/Users/Daryl/Downloads/phantomjs
export PATH=$PATH:$PHANTOMJS_PATH/bin
```

Restart your terminal

Check it works

```
$ phantomjs --version
2.0.0
$ node
> 
```