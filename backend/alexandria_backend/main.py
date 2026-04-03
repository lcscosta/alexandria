from typing import Union

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from auth import authenticate_user


app = FastAPI(
    title="Alexandria Backend",
    version="0.0.1"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite qualquer origem
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

@app.get("/")
def read_root():
    return {"Hello": "Alexandria!"}

@app.get("/protected")
async def protected_route(current_user: str = Depends(authenticate_user)):
    return {'message': f"Hello {current_user}, this is a protected route."}
