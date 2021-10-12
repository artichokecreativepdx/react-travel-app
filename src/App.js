//import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonLabel, IonItem, IonInput, IonCheckbox, IonButton, IonFooter } from '@ionic/react';
//import { IonReactRouter } from '@ionic/react-router';
import './App.css';
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
function App() {
  return (



    
   <IonApp>
     <IonPage>
       <IonHeader>
         <IonToolbar>
           <IonTitle>
             <h1>hi there</h1>
           </IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonContent>
       <IonCard>
          <IonCardHeader>
            <IonCardTitle>Questions</IonCardTitle>
            <IonCardSubtitle>Where to go?</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <form className="ion-padding">
              <IonItem>

              </IonItem>
              <IonButton className="ion-margin-top" type="submit" expand="block">
                Submit
              </IonButton>
            </form>
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
          <form className="ion-padding">
  <IonItem>
    <IonLabel position="floating">Username</IonLabel>
    <IonInput />
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Password</IonLabel>
    <IonInput type="password" />
  </IonItem>
  <IonItem lines="none">
    <IonLabel>Remember me</IonLabel>
    <IonCheckbox defaultChecked={true} slot="start" />
  </IonItem>
  <IonButton className="ion-margin-top" type="submit" expand="block">
    Login
  </IonButton>
</form>
            </IonCardContent>
        </IonCard>
       </IonContent>
       <IonFooter>
      <IonToolbar>
        <IonTitle>Footer</IonTitle>
      </IonToolbar>
    </IonFooter>
     </IonPage>
   </IonApp>
  );
}

export default App;
