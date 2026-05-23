from pydantic import BaseModel
from typing import Optional

# base schema containing shared properties
class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    status: str = "Open"

# schema used for request body when creating a task
class TaskCreate(TaskBase):
    pass

# schema used for responses
class Task(TaskBase):
    id: int

    class Config:
        # tells pydantic to treat sqlalchemy models as dicts
        from_attributes = True