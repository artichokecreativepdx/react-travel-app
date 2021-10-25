import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonAvatar, IonCardContent} from '@ionic/react';


const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
         <IonToolbar>
           <IonTitle>
             <h1>Profile</h1>
           </IonTitle>
         </IonToolbar>
       </IonHeader>
       <IonContent>
       <IonCard>
       <IonCard>
    <IonAvatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonAvatar>
    <IonCardContent></IonCardContent>
    </IonCard>
          <IonCardContent>
            
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
          
            </IonCardContent>
        </IonCard>
       </IonContent>
    </IonPage>
  );
};

export default Tab1;
       