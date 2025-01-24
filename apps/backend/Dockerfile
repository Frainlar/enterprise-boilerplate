FROM python:3.9-slim

WORKDIR /app
COPY apps/backend/requirements.txt .
RUN pip install -r requirements.txt

COPY . .
CMD ["uvicorn", "apps.backend.main:app", "--host", "0.0.0.0"]