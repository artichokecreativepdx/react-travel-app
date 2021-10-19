import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle,IonCardSubtitle, IonItem, IonList, IonItemSliding, IonLabel, IonItemOption, IonButton, IonInput, IonCheckbox, IonItemOptions} from '@ionic/react';


const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
         <IonToolbar>
           <IonTitle>
             <h1 className="testing">hi there</h1>
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
              <IonList>
      <IonItemSliding>
        <IonItem>
          <IonLabel>Item</IonLabel>
        </IonItem>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
      </IonList>
              </IonItem>
             
              <IonButton className="ion-margin-top" type="submit" expand="block">
    Login
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
    </IonPage>
  );
};

export default Tab1;
       