import React ,{useState , useEffect} from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonContent,
  IonPage,
  IonButton,
  IonRouterLink,
} from '@ionic/react';
import Header from '../components/Header';
import './main.css';
import axios from 'axios';
import { useHistory } from 'react-router';
import Menu from '../components/Menu';

function Example() {
  const [annonces , setAnnonces] = useState([]);
  const token = localStorage.getItem('token');
  const fetchElements = async () => {
    try {
      const response = await axios.get('https://ventevoitureback-production.up.railway.app/annonces/Utilisateur/'+token);
      setAnnonces(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories', error);
    }
  };

  // Effect pour appeler la fonction fetchElements au montage du composant
  useEffect(() => {
    fetchElements();
  }, []);

  return (
    <IonPage>
      <Header title="Liste Annonce"/>
      <IonContent fullscreen>
          
              <IonCard>
              <IonCardHeader>
                <IonCardTitle>Liste Annonces</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                {annonces.map((annonce) =>(
                  <IonItem>
                    <IonThumbnail slot="start">
                      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                    </IonThumbnail>
                    <IonLabel>{annonce.nom}</IonLabel>
                      <IonButton fill="outline" routerLink={`/Detail/${annonce.idAnnonce}`}>Details</IonButton>
                  </IonItem>
                   ) )}
                </IonList>
              </IonCardContent>
              </IonCard>
         
      </IonContent>
      
    </IonPage>
    
  );
}
export default Example;