import React from 'react';
import { Map, Marker } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'
import { IonContent, IonTitle, IonIcon, IonSearchbar, IonToolbar, IonPage,IonButtons, IonButton, IonCard, IonItem } from '@ionic/react';
import {search} from 'ionicons/icons';
import logoLong from '../img/planit_adventures.png'
const maptilerProvider = maptiler('u8fyYdt1QkFGd5hcaTzq', 'voyager')
export function MyMap() {
  return (
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  )
}

export const Explore = () => {

  return (
    <IonPage>
      <IonContent>
      <IonToolbar>
      <IonItem className="logo_long">
              
              <img src={logoLong} alt="planit logo" width="200"/>
              </IonItem>
      <IonTitle slot="start">
              Explore
           </IonTitle>
           </IonToolbar>
           <IonToolbar>
    <IonButtons slot="primary">
      <IonButton onClick={() => {}}>
        <IonIcon slot="icon-only" icon={search} />
      </IonButton>
    </IonButtons>
    <IonSearchbar placeholder="Search Favorites" />
  </IonToolbar>
        <IonCard>
        <Map
    provider={maptilerProvider}
    dprs={[1, 2]} // this provider supports HiDPI tiles
    height={200}
    defaultCenter={[50.879, 4.6997]}
    defaultZoom={11}
  />

        </IonCard>
      </IonContent>
    </IonPage>
  );
};
  export default Explore;