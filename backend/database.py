from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# local sqlite database file
SQLALCHEMY_DATABASE_URL = "sqlite:///./tasks.db"

# check_same_thread is needed only for sqlite in fastapi
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()