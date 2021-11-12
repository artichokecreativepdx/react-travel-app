import { useState, useEffect } from "react";
// import useFetchData from "../hooks/fetch_data";
import logoLong from '../img/planit_adventures.png'
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
  //const { data, loading } = useFetchData();
  const [showModal, setShowModal] = useState(false);
  const [country, setCountry] = useState();
  const [cost, setCost] = useState();
  const [wifi, setWifi] = useState();
  const [activities, setActivities] = useState();
  const [healthcare, setHealthcare] = useState();
  const [coffee, setCoffee] = useState();
  const [safety, setSafety] = useState();
  const [transportation, setTransportation] = useState();
  const options = {
    cssClass: 'my-custom-interface'
  };
  


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/dataset").then((response) => {
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
        coffee: coffee,
        walk_drive: transportation ,
      },
    });
  };
  
  // axios
  //   .get("http://127.0.0.1:8000/dataset")
  //   .then((response) => {
  //     console.log(response);
  //     return response.data();
  //   })
  //   .then((data) => {
  //     const recommendPlaces = data.results.map((placeReccomend) => {
  //       return {
  //         region: placeReccomend.region,
  //         budget: placeReccomend.cost,
  //         wifi: placeReccomend.wifi,
  //         activity: placeReccomend.activity,
  //         healthcare: placeReccomend.healthcare,
  //         identity: placeReccomend.lgbt,
  //         coffee: placeReccomend.coffee,
  //         safety: placeReccomend.safety,
  //         transportation: placeReccomend.walk_drive,
  //       };
  //     });
  //     setReccomend(recommendPlaces);
  //   });

  return (
    <IonPage>
      <IonHeader className="logo_splash">
      
              
              <img src={logoLong} alt="planit logo"/>
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
              <IonSelect interfaceOptions={options} value={country} placeholder="select one" onIonChange={e => setCountry(e.detail.value)}>
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
            <IonSelect interfaceOptions={options} value={cost} placeholder="select one" onIonChange={e => setCost(e.detail.value)}>
                <IonSelectOption value="1">$</IonSelectOption>
                <IonSelectOption value="2">$$</IonSelectOption>
                <IonSelectOption value="3">$$$</IonSelectOption>
                <IonSelectOption value="4">$$$$</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
            <IonLabel>Access to Wifi</IonLabel>
            <IonSelect interfaceOptions={options} value={wifi} placeholder="select one" onIonChange={e => setWifi(e.detail.value)}>
                <IonSelectOption value="Yes">Yes</IonSelectOption>
                <IonSelectOption value="No">No</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Types of activities</IonLabel>
              <IonSelect interfaceOptions={options} value={activities} placeholder="select one" onIonChange={e => setActivities(e.detail.value)}>
                <IonSelectOption value="nightlife">nightlife</IonSelectOption>
                <IonSelectOption value="fun">Fun</IonSelectOption>
                <IonSelectOption value="work">Work</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Health Care Importance</IonLabel>
              <IonSelect interfaceOptions={options} value={healthcare} placeholder="select one" onIonChange={e => setHealthcare(e.detail.value)}>
                <IonSelectOption value="1">+</IonSelectOption>
                <IonSelectOption value="2">++</IonSelectOption>
                <IonSelectOption value="3">+++</IonSelectOption>
                <IonSelectOption value="4">++++</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Yes I Love Coffe, but How Much</IonLabel>
              <IonSelect interfaceOptions={options} value={coffee} placeholder="select one" onIonChange={e => setCoffee(e.detail.value)}>
                <IonSelectOption value="0">nope</IonSelectOption>
                <IonSelectOption value="1">
                  I can take it or leave it
                </IonSelectOption>
                <IonSelectOption value="2">I kind of like it</IonSelectOption>
                <IonSelectOption value="3">yea, sure</IonSelectOption>
                <IonSelectOption value="4">umm yea!</IonSelectOption>
                <IonSelectOption value="5">I F-ing love it!</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Is safety important to you</IonLabel>
              <IonSelect interfaceOptions={options} value={safety} placeholder="select one" onIonChange={e => setSafety(e.detail.value)}>
                <IonSelectOption value="yes">Yes</IonSelectOption>
                <IonSelectOption value="no">No</IonSelectOption>
                <IonSelectOption value="lgbt">LGBT Friendly</IonSelectOption>
                <IonSelectOption value="female">
                  Female Friendly
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel>Preferred mode of trasportation</IonLabel>
              <IonSelect interfaceOptions={options} value={transportation} placeholder="select one" onIonChange={e => setTransportation(e.detail.value)}>
                <IonSelectOption value="walk">Walk</IonSelectOption>
                <IonSelectOption value="drive">Drive</IonSelectOption>
                <IonSelectOption value="none">
                  None of the Above
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton 
            expand="block"
            value="submit" onClick={callApi} >
            Submit
          </IonButton>
            <IonButton
              expand="block"
              
              onClick={() => setShowModal(false)}
            >
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
