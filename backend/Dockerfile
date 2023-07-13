FROM python:3.10-alpine
LABEL authors="Nick Ng"
WORKDIR /app
COPY . /app
RUN pip --no-cache-dir install -r requirements.txt
RUN pip install cryptography
ENTRYPOINT ["python3", "app.py"]