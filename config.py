import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'some_secret_key')
    SQLALCHEMY_DATABASE_URI = 'sqlite:///health.db'
    JWT_SECRET_KEY = 'your_jwt_secret_key'
