import {  useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton
} from "@ionic/react";
import axios from "axios";


const Home = () => {
  useEffect(() => {
    axios
    .get("http://localhost:8000/")
    .then((response) => {
      console.log(response.data);

    });
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonToolbar>
         
            <IonItem>
              <IonLabel>Region of Intrest</IonLabel>
              <IonSelect multiple={true} value={region}>
                <IonSelectOption value="europe">Europe</IonSelectOption>
                <IonSelectOption value="asia">Asia</IonSelectOption>
                <IonSelectOption value="latinAmerica">
                  Latin America
                </IonSelectOption>
                <IonSelectOption value="northAmerica">
                  North America
                </IonSelectOption>
                <IonSelectOption value="middleEast">
                  Middle East
                </IonSelectOption>
                <IonSelectOption value="africa">Africa</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Budget</IonLabel>
              <IonSelect value={cost}>
                <IonSelectOption value="$">$</IonSelectOption>
                <IonSelectOption value="$$">$$</IonSelectOption>
                <IonSelectOption value="$$$">$$$</IonSelectOption>
                <IonSelectOption value="$$$">$$$$</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Wifi Connection</IonLabel>
              <IonSelect value={wifi}>
                <IonSelectOption value="Yes">Yes</IonSelectOption>
                <IonSelectOption value="No">No</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Types of activities</IonLabel>
              <IonSelect value={activities}>
                <IonSelectOption value="nightlife">nightlife</IonSelectOption>
                <IonSelectOption value="fun">Fun</IonSelectOption>
                <IonSelectOption value="work">Work</IonSelectOption>
              </IonSelect>
              </IonItem>
              <IonItem>
              <IonLabel>Health Care Importance</IonLabel>
              <IonSelect value={care}>
                <IonSelectOption value="1">+</IonSelectOption>
                <IonSelectOption value="2">++</IonSelectOption>
                <IonSelectOption value="3">+++</IonSelectOption>
                <IonSelectOption value="4">++++</IonSelectOption>
              </IonSelect>
              </IonItem>
              <IonItem>
              <IonLabel>Yes I Love Coffe, but How Much</IonLabel>
              <IonSelect value={coffee}>
                <IonSelectOption value="0">nope</IonSelectOption>
                <IonSelectOption value="1">I can take it or leave it</IonSelectOption>
                <IonSelectOption value="2">I kind of like it</IonSelectOption>
                <IonSelectOption value="3">yea, sure</IonSelectOption>
                <IonSelectOption value="4">umm yea!</IonSelectOption>
                <IonSelectOption value="5">I F-ing love it!</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Is safety important to you</IonLabel>
              <IonSelect multiple={true} value={safety}>
                <IonSelectOption value="yes">Yes</IonSelectOption>
                <IonSelectOption value="no">No</IonSelectOption>
                <IonSelectOption value="lgbt">LGBT Friendly</IonSelectOption>
                <IonSelectOption value="female">Female Friendly</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Preferred mode of trasportation</IonLabel>
              <IonSelect multiple={true} value={transportation} >
                <IonSelectOption value="walk">Walk</IonSelectOption>
                <IonSelectOption value="drive">Drive</IonSelectOption>
                <IonSelectOption value="none">None of the Above</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton value="submit">Submit</IonButton>
          
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default Home;
