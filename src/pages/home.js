import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonSelect, IonSelectOption, IonButton, } from '@ionic/react';
import { useForm } from 'react-hook-form';
const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
<IonToolbar>
<form>
<IonItem>
  
          <IonLabel>Region of Intrest</IonLabel>
          <IonSelect>
            <IonSelectOption value="Europe">Europe</IonSelectOption>
            <IonSelectOption value="Asia">Asia</IonSelectOption>
            <IonSelectOption value="Latin America">Latin America</IonSelectOption>
            <IonSelectOption value="North America">North Americ</IonSelectOption>
            <IonSelectOption value="Middle East">Middle East</IonSelectOption>
            <IonSelectOption value="Africa">Africa</IonSelectOption>
            
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>Budget</IonLabel>
          <IonSelect>
          <IonSelectOption value="$">$</IonSelectOption>
          <IonSelectOption value="$$">$$</IonSelectOption>
          <IonSelectOption value="$$$">$$$</IonSelectOption>
          </IonSelect>
         
        </IonItem>
<IonButton value="submit">Submit</IonButton>
        </form>
</IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default Home;
