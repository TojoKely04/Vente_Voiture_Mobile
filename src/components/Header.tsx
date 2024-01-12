import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonIcon } from '@ionic/react';
import { chatbubblesOutline , powerOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import Annonce from '../annonce/Annonce';

const Header: React.FC = () => {

  return (
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ajouter Annonce</IonTitle>
          <IonButtons slot="end" style={{marginRight:'10px'}}>
            <IonIcon icon={chatbubblesOutline} style={{fontSize:'23px'}} ></IonIcon>
          </IonButtons>
          <IonButtons slot="end" style={{marginRight:'30px'}}>
            <IonIcon icon={powerOutline} style={{fontSize:'23px'}}></IonIcon>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header;
