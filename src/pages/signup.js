import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonLabel} from '@ionic/react';
import { useCallback, useState } from 'react';


const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const onUsernameChange = useCallback((e) => setUsername(e.detail?.value), []);
  const onPasswordChange = useCallback((e) => setPassword(e.detail?.value), []);
  const onConfirmPasswordChange = useCallback((e) => setConfirmPassword(e.detail?.value), []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          <IonLabel position="floating">User Name</IonLabel>
          <IonInput onIonChange={onUsernameChange} value = {username}/>
        </IonItem>
        <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput onIonChange={onPasswordChange} type="password" value = {password}/>
        <IonButton routerLink="/Tab1">Log In</IonButton>
        </IonItem>
        <IonItem>
        <IonLabel position="floating">Confirm Password</IonLabel>
        <IonInput onIonChange={onConfirmPasswordChange} type="password" value = {confirmPassword}/>
        <IonButton routerLink="/Tab1">Log In</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;