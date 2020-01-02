# Sample NodeJS App

## Run app locally

```
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see greeting message.

## Build docker image

You can build docker image with any one of below commands
```
docker build -t nodejs-sample-app .
docker-compose build
```

## Run app in docker

Run the application in docker with any one of below commands
```
docker run --name nodejs-sample-app -d -p 3000:3000 nodejs-sample-app:latest
docker-compose up -d
```

Visit [http://localhost:3000](http://localhost:3000) to see greeting message.


## Stop app

Again, with any one of below commands:
```
docker rm -f $(docker ps -q --filter 'name=nodejs-sample-app')
docker-compose down
```