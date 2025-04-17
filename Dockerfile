# Frontend build (Next.js)
FROM node:20 AS frontend-builder

WORKDIR /frontend
COPY frontend/ ./
RUN npm install
RUN npm run build

# FastAPI backend
FROM python:3.11-slim AS backend

WORKDIR /app
COPY pyproject.toml poetry.lock* ./
RUN pip install poetry && poetry config virtualenvs.create false \
 && poetry install --no-root

# Final container (combines FastAPI and NGINX)
FROM python:3.11-slim AS final

WORKDIR /app

COPY pyproject.toml poetry.lock* ./
RUN pip install poetry && poetry config virtualenvs.create false \
 && poetry install --no-root

COPY backend/ ./backend/

# Install supervisord to manage both FastAPI and NGINX
RUN apt-get update && apt-get install -y nginx supervisor

# Copy NGINX frontend
COPY --from=frontend-builder /frontend/out /usr/share/nginx/html
COPY frontend/server/nginx.conf /etc/nginx/nginx.conf

# Copy supervisord configuration
COPY ./supervisord.conf /etc/supervisord.conf

EXPOSE 8000
EXPOSE 80

# Run both services using supervisord
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]