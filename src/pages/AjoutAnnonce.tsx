import { IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar ,IonIcon , IonItem , IonLabel , IonInput , IonCheckbox, IonCard, IonRow, IonCol } from '@ionic/react';
import { chatbubblesOutline , powerOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import Annonce from '../annonce/Annonce';
import Header from '../components/Header';
import React from 'react';
import {IonList } from '@ionic/react';
import {  IonSelect, IonSelectOption } from '@ionic/react';
import { IonBackButton, IonButtons} from '@ionic/react';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';

const Page: React.FC = () => {
  
  
  return (

    <IonPage>
      <Header title="Ajouter Annonce"/>
      <IonContent fullscreen className="ion-padding ion-text-center">
            <IonList>
            <IonItem>
              <IonInput label="Nom :" placeholder="Nom de la voiture"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Description :" type="text" placeholder="Votre déscription"></IonInput>
            </IonItem>

            
              <IonItem>
                <IonSelect label="Catégorie :" interface="popover" placeholder="Select One">
                  <IonSelectOption value="brown">Brown</IonSelectOption>
                  <IonSelectOption value="blonde">Blonde</IonSelectOption>
                  <IonSelectOption value="red">Red</IonSelectOption>
                </IonSelect>
              </IonItem>

            <IonItem>
            <IonSelect label="Marque :" interface="popover" placeholder="Select One">
                  <IonSelectOption value="brown">Brown</IonSelectOption>
                  <IonSelectOption value="blonde">Blonde</IonSelectOption>
                  <IonSelectOption value="red">Red</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonItem>
            <IonSelect label="Couleur :" interface="popover" placeholder="Select One">
                  <IonSelectOption value="brown">Brown</IonSelectOption>
                  <IonSelectOption value="blonde">Blonde</IonSelectOption>
                  <IonSelectOption value="red">Red</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonItem>
            <IonSelect label="Moteur :" interface="popover" placeholder="Select One">
                  <IonSelectOption value="brown">Brown</IonSelectOption>
                  <IonSelectOption value="blonde">Blonde</IonSelectOption>
                  <IonSelectOption value="red">Red</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonItem>
              <IonInput label="Kilometrage :" type="number" placeholder="Kilometrage de la voiture"></IonInput>
            </IonItem>

            <IonItem>
              <IonInput label="Année de sortie :" placeholder="Année de sortie" type="number"></IonInput>
            </IonItem>

            <IonItem>
            <IonSelect label="Vitesse :" interface="popover" placeholder="Select One">
                  <IonSelectOption value="brown">Brown</IonSelectOption>
                  <IonSelectOption value="blonde">Blonde</IonSelectOption>
                  <IonSelectOption value="red">Red</IonSelectOption>
                </IonSelect>
            </IonItem> 
            
            <IonItem>
            <IonSelect label="Enérgie :" interface="popover" placeholder="Select One">
                  <IonSelectOption value="brown">Brown</IonSelectOption>
                  <IonSelectOption value="blonde">Blonde</IonSelectOption>
                  <IonSelectOption value="red">Red</IonSelectOption>
                </IonSelect>
            </IonItem>

            <IonItem>
              <IonInput label="Prix :" placeholder="Prix de vente" type="number" ></IonInput>
            </IonItem>
      </IonList>   
      <IonRow>
        <IonCol>
            <IonButton expand="block">
                Ajouter
            </IonButton>
            </IonCol>
        </IonRow>


      </IonContent>
          
      </IonPage>
  )
};

export default Page;
