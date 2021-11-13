/** @format */

import { useState, useEffect } from "react";

import logoLong from "../img/planit_adventures.png";
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
  IonButton,
  IonModal,
} from "@ionic/react";
import axios from "axios";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState();
  const [cost, setCost] = useState();
  const [wifi, setWifi] = useState();
  const [activities, setActivities] = useState();
  const [healthcare, setHealthcare] = useState();
  const [safety, setSafety] = useState();
  const [identity, setIdentity] = useState();
  const [transportation, setTransportation] = useState();
  const options = {
    cssClass: "my-custom-interface",
  };

  useEffect(() => {
    axios.get("http://3.138.163.56:8000/dataset").then((response) => {
      console.log(response);
    });
  });
  const callApi = () => {
    console.log(country);
    axios.get(`/recommend`, {
      params: {
        region: country,
        cost: cost,
        wifi: wifi,
        activity: activities,
        healthcare: healthcare,
        lgbt: safety,
        
        walk_drive: transportation,
      },
    });
  };

  return (
    <IonPage>
      <IonHeader className="logo_splash">
        <img src={logoLong} alt="planit logo" />
      </IonHeader>
      <IonToolbar>
        <IonItem>
          <IonTitle>home</IonTitle>
        </IonItem>
      </IonToolbar>

      <IonContent>
        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>home</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonItem>
            <IonLabel>Region of Intrest</IonLabel>

            <IonSelect
              interfaceOptions={options}
              value={country}
              placeholder="select one"
              onIonChange={(e) => setCountry(e.detail.value)}
            >
              <IonSelectOption value="Europe">Europe</IonSelectOption>
              <IonSelectOption value="Asia">Asia</IonSelectOption>
              <IonSelectOption value="Latin America">
                Latin America
              </IonSelectOption>
              <IonSelectOption value="North America">
                North America
              </IonSelectOption>
              <IonSelectOption value="Middle East">Middle East</IonSelectOption>
              <IonSelectOption value="Africa">Africa</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Budget</IonLabel>

            <IonSelect
              interfaceOptions={options}
              value={cost}
              placeholder="select one"
              onIonChange={(e) => setCost(e.detail.value)}
            >
              <IonSelectOption value="1">$</IonSelectOption>
              <IonSelectOption value="2">$$</IonSelectOption>
              <IonSelectOption value="3">$$$</IonSelectOption>
              <IonSelectOption value="4">$$$$</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Access to Wifi</IonLabel>

            <IonSelect
              interfaceOptions={options}
              value={wifi}
              placeholder="select one"
              onIonChange={(e) => setWifi(e.detail.value)}
            >
              <IonSelectOption value="yes">Yes</IonSelectOption>
              <IonSelectOption value="no">No</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Is safety important to you</IonLabel>

            <IonSelect
              interfaceOptions={options}
              value={safety}
              placeholder="select one"
              onIonChange={(e) => setSafety(e.detail.value)}
            >
              <IonSelectOption value="1">1</IonSelectOption>
              <IonSelectOption value="2">2</IonSelectOption>
              <IonSelectOption value="3">3</IonSelectOption>
              <IonSelectOption value="4">4</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Is safety important to you</IonLabel>

            <IonSelect
              interfaceOptions={options}
              value={identity}
              placeholder="select one"
              onIonChange={(e) => setIdentity(e.detail.value)}
            >
              <IonSelectOption value="lgbt">LGBT Friendly</IonSelectOption>
              <IonSelectOption value="female">Female Friendly</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Types of activities</IonLabel>

            <IonSelect
              interfaceOptions={options}
              value={activities}
              placeholder="select one"
              onIonChange={(e) => setActivities(e.detail.value)}
            >
              <IonSelectOption value="nightlife">nightlife</IonSelectOption>
              <IonSelectOption value="fun">Fun</IonSelectOption>
              <IonSelectOption value="work">Work</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Health Care Importance</IonLabel>

            <IonSelect
              interfaceOptions={options}
              value={healthcare}
              placeholder="select one"
              onIonChange={(e) => setHealthcare(e.detail.value)}
            >
              <IonSelectOption value="1">+</IonSelectOption>
              <IonSelectOption value="2">++</IonSelectOption>
              <IonSelectOption value="3">+++</IonSelectOption>
              <IonSelectOption value="4">++++</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Preferred mode of trasportation</IonLabel>

            <IonSelect
              interfaceOptions={options}
              value={transportation}
              placeholder="select one"
              onIonChange={(e) => setTransportation(e.detail.value)}
            >
              <IonSelectOption value="walk">Walk</IonSelectOption>
              <IonSelectOption value="drive">Drive</IonSelectOption>
              <IonSelectOption value="none">None of the Above</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonButton expand="block" value="submit" onClick={callApi}>
            Submit
          </IonButton>
          <IonButton expand="block" onClick={() => setShowModal(false)}>
            Close
          </IonButton>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>
          Where would you like to go
        </IonButton>

        <IonItem></IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
