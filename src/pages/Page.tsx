import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonIcon } from '@ionic/react';
import { chatbubblesOutline , powerOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import Annonce from '../annonce/Annonce';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          <IonButtons slot="end" style={{marginRight:'10px'}}>
            <IonIcon icon={chatbubblesOutline} style={{fontSize:'23px'}} ></IonIcon>
          </IonButtons>
          <></>
          <IonButtons slot="end" style={{marginRight:'30px'}}>
            <IonIcon icon={powerOutline} style={{fontSize:'23px'}}></IonIcon>
          </IonButtons>
        </IonToolbar>
        
      </IonHeader>

      <IonContent fullscreen>
        <Annonce/>
        <Annonce/>
        <Annonce/>
        <Annonce/>
        <Annonce/>
        <Annonce/>
        <Annonce/>
      </IonContent>
      
    </IonPage>

    
  );
};

export default Page;