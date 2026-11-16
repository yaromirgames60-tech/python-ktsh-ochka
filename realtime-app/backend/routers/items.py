from fastapi import APIRouter

from models.schemas import Item, ItemCreate
from routers.ws import manager


router = APIRouter(prefix="/items", tags=["items"])

items_db: list[Item] = []
next_id = 1


@router.get("/", response_model=list[Item])
def list_items() -> list[Item]:
    return items_db


@router.post("/", response_model=Item)
async def create_item(payload: ItemCreate) -> Item:
    global next_id
    item = Item(id=next_id, title=payload.title)
    next_id += 1
    items_db.append(item)
    await manager.broadcast(f"new:{item.id}:{item.title}")
    return item
