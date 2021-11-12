import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel} from '@ionic/react';
import { useState, useCallback } from 'react';
import logo from '../img/planit.png'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  
  const onUsernameChange = useCallback((e) => setUsername(e.detail?.value), []);
  const onPasswordChange = useCallback((e) => setPassword(e.detail?.value), []);
  const onConfirmPasswordChange = useCallback((e) => setConfirmPassword(e.detail?.value), []);


  // const onSignupClick = useCallback (() =>{
  //     console.log(confirmpassword, password);
  // },[confirmpassword, password]);


  
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonItem className="logo">
              
              <img src={logo} alt="planit logo" width="200"/>
              </IonItem>
            <IonTitle>SignUp</IonTitle>
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
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirm Password</IonLabel>
            <IonInput onIonChange={onConfirmPasswordChange} type="password" value={confirmpassword} />
            <IonButton routerLink="/home">Log In</IonButton>
          </IonItem>
          <IonContent>

          </IonContent>
        </IonContent>
      </IonPage>
    );
  }

export default SignUp;