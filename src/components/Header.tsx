import { IonButtons , IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonIcon } from '@ionic/react';
import { chatbubblesOutline , powerOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import Annonce from '../annonce/Annonce';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="end" style={{ marginRight: '10px' }}>
          <IonIcon icon={chatbubblesOutline} style={{ fontSize: '23px' }}></IonIcon>
        </IonButtons>
        
      </IonToolbar>
    </IonHeader>
  );
};


export default Header;
