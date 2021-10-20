import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonCard,IonCardContent} from '@ionic/react';

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonContent>
        <IonCard>
    <IonAvatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
    </IonAvatar>
    <IonCardContent></IonCardContent>
    </IonCard>
  </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
