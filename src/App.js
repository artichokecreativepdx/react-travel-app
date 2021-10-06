import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './App.scss';
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
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            
      </IonCardContent>
        </IonCard>
       </IonContent>
     </IonPage>
   </IonApp>
  );
}

export default App;
