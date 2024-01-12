import React from 'react';
import { IonIcon , IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { star } from 'ionicons/icons';

function Card() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      <IonButton style={{marginLeft:'275px'}} size='small'>
      <IonIcon slot="icon-only"></IonIcon>
      </IonButton>
    </IonCard>
  );
}
export default Card;