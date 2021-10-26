import React from 'react';
import { Map, Marker } from "pigeon-maps"
import { IonContent, IonTitle, IonIcon, IonSearchbar, IonToolbar, IonPage,IonButtons, IonButton, IonCard } from '@ionic/react';
import {search} from 'ionicons/icons';

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


        </IonCard>
      </IonContent>
    </IonPage>
  );
};
  export default Explore;