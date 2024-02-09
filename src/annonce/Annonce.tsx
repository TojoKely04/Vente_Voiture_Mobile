import React from 'react';
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
} from '@ionic/react';
import Header from '../components/Header';
import './main.css';

function Example() {
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
              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
                <IonButton fill="outline">Details</IonButton>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
      
    </IonPage>
    
  );
}
export default Example;