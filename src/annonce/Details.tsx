import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonItem, IonLabel, IonList, IonPage, IonRow, IonText } from '@ionic/react';
import Header from '../components/Header';

function Details() {
  return (
    <IonPage>
    <IonContent fullscreen>
    <Header title="Details Annonce"/>
    <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>VOITURE V1</IonCardTitle>
        <IonCardSubtitle>Auteur</IonCardSubtitle>
        <IonCardSubtitle>Date Publication</IonCardSubtitle>
        <IonCardSubtitle>Vendu</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
      <IonList>
      <IonItem>
        <IonLabel>Categorie : </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Marque : </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Moteur : </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Energie : </IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Vitesse</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Kilometrage :</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Annee :</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Date de publication :</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Decription :</IonLabel>
      </IonItem>
    </IonList>

      </IonCardContent>
    </IonCard>
    <IonRow>
        <IonCol>
            <IonButton expand="block">
                Vendu
            </IonButton>   
            </IonCol>
        </IonRow>
    </IonContent>
    </IonPage>
  );
}
export default Details;