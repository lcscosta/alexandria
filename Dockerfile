FROM python:3.11-slim

WORKDIR /app

# Copy the app code into the container
COPY . .

# Install Python dependencies
RUN pip install --no-cache-dir .

# Expose the port FastAPI runs on
EXPOSE 8000

# Start the FastAPI app using uvicorn
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]