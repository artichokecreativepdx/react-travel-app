import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel} from '@ionic/react';
import { useState, useCallback } from 'react';


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const onUsernameChange = useCallback((e) => setUsername(e.detail?.value), []);
  const onPasswordChange = useCallback((e) => setPassword(e.detail?.value), []);

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>log In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonItem>
            <IonLabel position="floating">User Name</IonLabel>
            <IonInput onIonChange={onUsernameChange} value={username} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput onIonChange={onPasswordChange} type="password" value={password} />
            <IonButton routerLink="/home">Log In</IonButton>
            <IonButton routerLink="/signup">Sign Up</IonButton>
          </IonItem>
          <IonContent>

          </IonContent>
        </IonContent>
      </IonPage>
    );
  }

export default Login;