from pydantic import BaseModel


class ItemCreate(BaseModel):
    title: str


class Item(BaseModel):
    id: int
    title: str
