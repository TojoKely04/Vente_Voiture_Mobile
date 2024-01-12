import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonIcon } from '@ionic/react';
import { chatbubblesOutline , powerOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import Annonce from '../annonce/Annonce';
import Header from '../components/Header';

const Page: React.FC = () => {

  return (
    <IonPage>
      <Header/>

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
