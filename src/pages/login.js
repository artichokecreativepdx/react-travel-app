import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonInput, IonItem, IonLabel} from '@ionic/react';
import { useState, useCallback } from 'react';
import logo from '../img/planit.png'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const onUsernameChange = useCallback((e) => setUsername(e.detail?.value), []);
  const onPasswordChange = useCallback((e) => setPassword(e.detail?.value), []);

  return (
      <IonPage>
        <IonHeader className="logo_splash">
      
            <IonItem className="logo">
              
            <img src={logo} alt="planit logo" width="200"/>
            </IonItem>
            
      
        </IonHeader>
        <IonContent>
          <IonItem>
          <IonTitle>log In</IonTitle>
          </IonItem>
        
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