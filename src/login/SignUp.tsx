import { IonCol, IonHeader, IonRow, IonText, IonTitle, IonToolbar , IonButton, IonIcon, IonItem, IonLabel, IonInput, IonGrid, IonContent, IonPage } from "@ionic/react";
import { personCircle } from "ionicons/icons";

const Login = () => {

	return (
        <IonPage>
		{/* <IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader> */}
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
                        type="email"
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
                        type="password"
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
                        type="password"
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
                        type="password"
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
                        type="password"
                        >
                    </IonInput>
                    </IonItem>
                </IonCol>
                </IonRow>
                <IonRow>
                <IonCol>
                    <IonButton expand="block">
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