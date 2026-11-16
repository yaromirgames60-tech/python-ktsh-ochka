from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Real-time App"
    cors_origins: str = "http://localhost:5173"

    class Config:
        env_file = ".env"


settings = Settings()
