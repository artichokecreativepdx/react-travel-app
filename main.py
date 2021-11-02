from typing import Optional
from fastapi import FastAPI, Query, Path
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

import pandas as pd

app = FastAPI()

# Here is to display content with front-end's template
'''
app.mount("/build", StaticFiles(directory="build"), name="build")
templates = Jinja2Templates(directory="build")

origins = [
    "http://localhost",
    "http://localhost:8000/",
    "https://localhost:8000/",
    "https://localhost:8000/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
'''

df = pd.read_csv('data/cities_predict.csv')
df = df.dropna()

def query_df(region, cost):
    data_new = df.copy()

    # Filter the data set by region first
    if region:
        data_new = data_new[data_new['region']==region]
    
    if cost:
        data_new = data_new[data_new['cost_of_living'] >= cost]

    return data_new
 

@app.get("/dataset")
async def read_dataset():
    return df['country']

# Main API
@app.get('/recommend')
async def recommendation(*, region: str ='', cost: int):
    regions = query_df(region,cost)
    return regions['place_slug']


'''
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
'''

@app.get('/validation/{path}')
async def validation(
    string: str = Query(None, min_length=2, max_length=5, regex=r'[a-c]+.'),
    integer: int = Query(..., gt=1, le=3),  # required
    alias_query: str = Query('default', alias='alias-query'),
    path: int = Path(10)):
    return {"string": string, "integer": integer, "alias-query": alias_query, "path": path}

@app.post('/apitest')
def testapi():
    return {"message": "Test success"}