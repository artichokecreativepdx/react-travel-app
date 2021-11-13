import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonAvatar, IonCardContent, IonItem, IonLabel} from '@ionic/react';
import logoLong from '../img/planit_adventures.png'

const Profile = () => {
  return (
    <IonPage>
      <IonHeader className="logo_splash" >
      
              
              <img src={logoLong} alt="planit logo"/>
              </IonHeader>
         <IonToolbar>

         <IonItem>
           <IonTitle>
             Profile
           </IonTitle>
           </IonItem>
         </IonToolbar>
       
       <IonContent>
       <IonCard>
    <IonAvatar>
      <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="" />
    </IonAvatar>
    
    <IonCardContent>
      user info
    </IonCardContent>
    </IonCard>
    <IonCard>
          <IonCardContent>
            saved places
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
          <IonItem button onClick={() => { }}>
          <IonLabel>
            settings
          </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }}>
          <IonLabel>
          settings
          </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }}>
          <IonLabel>
          settings
          </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }}>
          <IonLabel>
          settings
          </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }}>
          <IonLabel>
          settings
          </IonLabel>
        </IonItem>
            </IonCardContent>
        </IonCard>
       </IonContent>
    </IonPage>
  );
};

export default Profile;
       