import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonAvatar, IonCardContent, IonItem, IonLabel} from '@ionic/react';
import logoLong from '../img/planit_adventures.png';
import user from '../img/fictional_user.jpeg';
// import swiper from '../components/swiper';



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
       <IonAvatar className="avatar-lg">
      <img src={user} alt="fictional user"/>
    </IonAvatar>
    <IonCardContent>
    I am a teacher who enjoys traveling over the summer and on holidays. I likes to plan my trips far in advance to tailor them as much as possible before I starts packing. 
    </IonCardContent>
    </IonCard>
    <IonCard>
          <IonCardContent>
            {/* {swiper} */}
           Saved Favorite Places
      </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
          <IonItem button onClick={() => { }}>
          <IonLabel>
            Travel Itnerary
          </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }}>
          <IonLabel>
          Guides
          </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }}>
          <IonLabel>
          Photos
          </IonLabel>
        </IonItem>
        <IonItem button onClick={() => { }}>
          <IonLabel>
          Tickets &amp; bookings
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
       