from typing import Optional
from fastapi import FastAPI, Query, Path

import pandas as pd

app = FastAPI()

df = pd.read_csv('../data/cities_predict.csv')
df = df.dropna()

'''
@app.get("/")
def read_root():
    return {"Hello": "World"}
'''

@app.get("/dataset")
async def read_dataset():
    return df['country']

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

@app.get('/validation/{path}')
async def validation(
    string: str = Query(None, min_length=2, max_length=5, regex=r'[a-c]+.'),
    integer: int = Query(..., gt=1, le=3),  # required
    alias_query: str = Query('default', alias='alias-query'),
    path: int = Path(10)):
    return {"string": string, "integer": integer, "alias-query": alias_query, "path": path}

@app.get('/recommend')
async def recommendation(count: int = 5, query: str = '', destination: str =''):
    # needs a process of matching
    return {"count": count, "query": query, "destination": destination}    

@app.post('/apitest')
def testapi():
    return {"message": "Test success"}