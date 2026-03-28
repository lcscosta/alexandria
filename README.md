# Alexandria

The great library of Alexandria, self-hosted.

## Building the docker image

```bash
docker build -f Dockerfile.prod -t alexandria
```

## Running the docker container

```bash
docker run -p 8080:80 alexandria:latest
```

## Development

```bash
docker build -f Dockerfile.dev -t alexandria-dev
```

```bash
docker run -p 3000:3000 -p 8000:8000 \ 
    -v $(pwd)/backend:/app/backend  \
    -v $(pwd)/frontend:/app/frontend alexandria-dev
```
