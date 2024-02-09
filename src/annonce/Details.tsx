import React, { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonItem, IonLabel, IonList, IonPage, IonRow, IonText } from '@ionic/react';
import Header from '../components/Header';
import { useParams } from 'react-router';
import axios from 'axios';
import Menu from '../components/Menu';

function Details() {
  const { id } = useParams();

  const [annonce,setAnnonce] = useState([]);
  const fetchElements = async () => {
    try {
      const response = await axios.get('https://ventevoitureback-production.up.railway.app/annonces/status/'+id);
      console.log(response.data)
      setAnnonce(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories', error);
    }
  };

  // Effect pour appeler la fonction fetchElements au montage du composant
  useEffect(() => {
    fetchElements();
    console.log(annonce);
  }, []);

  const vendre = async (id) =>{
    try {
      console.log(id);
      const response = await axios.post('https://ventevoitureback-production.up.railway.app/vendre', { annonces:id });
      window.location.reload();
    } catch (error) {
      console.error('Error during login:', error);
      }
  };


  return (
    <IonPage>
    <IonContent fullscreen>
    <Header title="Details Annonce"/>
    <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>{annonce.nom}</IonCardTitle>
        <IonCardSubtitle>Auteur : {annonce[0]?.utilisateur.nom}</IonCardSubtitle>
        <IonCardSubtitle>Date Publication : {annonce.datePublication}</IonCardSubtitle>
        <IonCardSubtitle>{annonce.status == 10 && (<p>Vendu</p>) }{annonce.status != 10 && (<p>Non Vendu</p>) }</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonList>
      <IonItem>
        <IonLabel>Categorie : {annonce[0]?.categorie.categorie} </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Marque : {annonce[0]?.marque.marque}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Moteur : {annonce[0]?.moteur.moteur}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Energie : {annonce[0]?.energie.energie}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Vitesse : {annonce[0]?.boiteVitesse.vitesse}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Kilometrage : {annonce.kilometrage}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Annee : {annonce.anneeSortie  }</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Decription : {annonce.description}</IonLabel>
      </IonItem>
    </IonList>
      </IonCardContent>
    </IonCard>
    <IonRow>
        <IonCol>
          {annonce.status !== 10 && (
            <IonButton expand="block" onClick={() => vendre(annonce.idAnnonce)} >
            Vendu
            </IonButton> 
          )}
          
        </IonCol>
    </IonRow>
    </IonContent>
    </IonPage>
  );
}
export default Details;