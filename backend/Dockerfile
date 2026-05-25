# use lightweight python image
FROM python:3.10-slim

# set working directory
WORKDIR /app

# install dependencies first to leverage docker cache
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy the rest of the application files
COPY . .

# expose port for the api
EXPOSE 8000

# start the fastapi server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]