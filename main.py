from typing import Optional
from fastapi import FastAPI, Query, Path, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.responses import FileResponse

import pandas as pd
import os

app = FastAPI()

# Here is to display content with front-end's template

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


df = pd.read_csv('data/cities_predict.csv')
df = df.dropna()

def query_df(region, cost, safety, wifi, activity, identity, healthcare, walk_drive, coffee):
    data_new = df.copy()

    # Filter the data set by region first
    if region:
        data_new = data_new[data_new['region']==region]
    
    if cost:
        data_new = data_new[data_new['cost_of_living'] >= cost]
    
    if safety:
        data_new = data_new[data_new['safety'] >= safety]

    # faster than 14Mbps -> good 
    if wifi:
        if wifi == 'yes':
            data_new = data_new[data_new['internet'] >= 14]
            
    if activity:
        if activity == 'nightlife':
            data_new = data_new[data_new['nightlife'] >= 3]
        elif activity == 'fun':
            data_new = data_new[data_new['fun'] >= 3]
        elif activity == 'work':
            data_new = data_new[data_new['starup_score'] >= 3]
    
    if identity:
        if identity == 'lgbt':
            data_new = data_new[data_new['lgbt_friendly'] >= 3]
        elif identity == 'female':
            data_new = data_new[data_new['female_friendly'] >= 3]
    
    if healthcare:
        data_new = data_new[data_new['healthcare'] >= healthcare]

    if walk_drive:
        if walk_drive == 'walk':
            data_new = data_new[data_new['walkability'] >= 3]
        elif walk_drive == 'drive':
            data_new = data_new[data_new['traffic_safety'] >= 3]

    if coffee:
        data_new = data_new[data_new['coffee'] >= coffee]

    return data_new
 
# Make the place slug to only the place name ** causing an error due to SettingWithCopyWarning of Pandas
def place_name(df):
    df_country = df['country'].str.lower()
    df_city = df['place_slug']

    i = 0
    for c in df_country:
        df_country[i] = '-' + c
        if ' ' in c:
            df_country[i] = df_country[i].replace(' ','-')
        i+=1

    j =0
    for cn in df_country:
        df_city[j] = df_city[j].replace(cn,'')
        #print(df_city[j])
        j+=1
    
    df['place_slug'] = df_city
    return df['place_slug']

# Fixed version of palce_name function 
def place_name2(df):
    i = 0
    countries = []
    for c in df.loc[:,'country'].str.lower():
        countries.append('-' + c)
        if ' ' in c:
            countries[i] = countries[i].replace(' ','-')
        
        # 31st column is 'place_slug'
        df.iloc[i,31] = df.iloc[i,31].replace(countries[i],'')
        
        i+=1

    return df['place_slug']

@app.get("/", response_class=FileResponse)
def read_index(request: Request):
    path = 'build/index.html' 
    return FileResponse(path)

@app.get("/dataset")
async def read_dataset():
    return df['country']

# Main API
@app.get('/recommend')
async def recommendation(*, region: str ='', cost: int='', safety: int='', wifi: str ='yes', activity: str='', identity: str='', healthcare: int='', walk_drive: str='', coffee: int=''):
    df_new = query_df(region,cost,safety,wifi, activity, identity, healthcare, walk_drive, coffee)
    return place_name2(df_new)

@app.get('/validation/{path}')
async def validation(
    string: str = Query(None, min_length=2, max_length=5, regex=r'[a-c]+.'),
    integer: int = Query(..., gt=1, le=3),  # required
    alias_query: str = Query('default', alias='alias-query'),
    path: int = Path(10)):
    return {"string": string, "integer": integer, "alias-query": alias_query, "path": path}

@app.get('/apitest')
def testapi():
    return {"message": "Test success"}

@app.get("/{catchall:path}", response_class=FileResponse) 
def read_index(request: Request):
    # check first if requested file exists
    path = request.path_params["catchall"]
    file = 'build/'+path

    if os.path.exists(file):
        return FileResponse(file)

    # otherwise return index files
    index = 'build/index.html' 
    return FileResponse(index)