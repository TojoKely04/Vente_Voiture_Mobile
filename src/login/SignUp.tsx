import { IonCol, IonHeader, IonRow, IonText, IonTitle, IonToolbar , IonButton, IonIcon, IonItem, IonLabel, IonInput, IonGrid, IonContent, IonPage } from "@ionic/react";
import { personCircle } from "ionicons/icons";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router";


const Login = () => {

    const history = useHistory();
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        adresse: '',
        passords: '',
        contact: '',
        role: 'USER'
      });


      const handleInputChange = (event: any) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
      };

      const handleSubmit = async () => {
        try {
            console.log(formData);
          const response = await axios.post('https://ventevoitureback-production.up.railway.app/auth/register', formData);
          console.log('Réponse de l\'API:', response.data);
          // Réinitialiser le formulaire après l'envoi réussi si nécessaire
          setFormData({
            nom: '',
            prenom: '',
            email: '',
            adresse: '',
            passords: '',
            contact: '',
            role: 'USER'
          });
          localStorage.setItem("token",response.data);
          history.push('/ListeAnnonce');
        } catch (error) {
          console.error('Erreur lors de la soumission des données:', error);
        }
    }
	return (
        <IonPage>
        <IonContent fullscreen className="ion-padding ion-text-center">
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" ,  }}
                        icon={personCircle}
                        />
                    </IonCol>
                </IonRow>
                <IonRow>
                <IonCol>
                    <IonItem>
                    <IonLabel position="floating"> Nom</IonLabel>
                    <IonInput
                        type="text"
                        id="nom"
                        value={formData.nom} onIonChange={handleInputChange}
                        >
                    </IonInput>
                    </IonItem>
                </IonCol>
                </IonRow>

                <IonRow>
                <IonCol>
                    <IonItem>
                    <IonLabel position="floating"> Prenom</IonLabel>
                    <IonInput
                        type="text"
                        id="prenom"
                        value={formData.prenom} onIonChange={handleInputChange}
                        >
                    </IonInput>
                    </IonItem>
                </IonCol>
                </IonRow>

                <IonRow>
                <IonCol>
                    <IonItem>
                    <IonLabel position="floating"> Email</IonLabel>
                    <IonInput
                        type="email"
                        id="email"
                        value={formData.email} onIonChange={handleInputChange}
                        >
                    </IonInput>
                    </IonItem>
                </IonCol>
                </IonRow>
                
                <IonRow>
                <IonCol>
                    <IonItem>
                    <IonLabel position="floating"> Mot De Passe</IonLabel>
                    <IonInput
                        type="password"
                        id="passords"
                        value={formData.passords} onIonChange={handleInputChange}
                        >
                    </IonInput>
                    </IonItem>
                </IonCol>
                </IonRow>

                <IonRow>
                <IonCol>
                    <IonItem>
                    <IonLabel position="floating"> Adresse</IonLabel>
                    <IonInput
                        type="text"
                        id="adresse"
                        value={formData.adresse} onIonChange={handleInputChange}
                        >
                    </IonInput>
                    </IonItem>
                </IonCol>
                </IonRow>
                <IonRow>
                <IonCol>
                    <IonItem>
                    <IonLabel position="floating"> Contact</IonLabel>
                    <IonInput
                        type="text"
                        id="contact"
                        value={formData.contact} onIonChange={handleInputChange}
                        >
                    </IonInput>
                    </IonItem>
                </IonCol>
                </IonRow>
                <IonRow>
                <IonCol>
                    <IonButton expand="block" onClick={handleSubmit}>
                        S'Inscrire
                    </IonButton>    <p style={{ fontSize: "medium" }}>
                        <a href="/Login">Se Connecter</a>
                    </p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
        </IonPage>
	);
};

export default Login;