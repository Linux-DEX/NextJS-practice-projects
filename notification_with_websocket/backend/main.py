from pydantic import BaseModel
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from db import get_db
from models import Notification


app = FastAPI()

class NotificationIn(BaseModel):
    user_id: int
    message: str

@app.post("/notifications/")
def create_notification(notif: NotificationIn, db: Session = Depends(get_db)):
    new_notif = Notification(**notif.dict())
    db.add(new_notif)
    db.commit()
    db.refresh(new_notif)
    return new_notif

@app.get("/notifications/{user_id}")
def get_notifications(user_id: int, db: Session = Depends(get_db)):
    return db.query(Notification).filter(Notification.user_id == user_id).all()

