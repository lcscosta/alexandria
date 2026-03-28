# Stage 1: Build next.js frontend
FROM node:18-alpine AS next-builder
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend .
RUN npm run build

# Stage 2: Nginx + FastAPI
FROM python:3.12-slim AS runtime
WORKDIR /app
COPY ./backend/ .
RUN pip install .
ENV PYTHONPATH=/app
RUN apt-get update && apt-get install -y --no-install-recommends nginx supervisor && \
    rm -rf /var/lib/apt/lists/*
COPY --from=next-builder /app/frontend/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf 
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf 

# Expose FastAPI port (nginx: 80 fastapi: 8000)
EXPOSE 80 8000
# Run FastAPI with Uvicorn (adjust `--host` and `--port` as needed)
CMD ["/usr/bin/supervisord"]

