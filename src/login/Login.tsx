import { IonCol, IonHeader, IonRow, IonText, IonTitle, IonToolbar , IonButton, IonIcon, IonItem, IonLabel, IonInput, IonGrid, IonContent, IonPage } from "@ionic/react";
import { personCircle } from "ionicons/icons";

const Login = () => {

	return (
        <IonPage>
		<IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
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
                    <IonLabel position="floating"> Email</IonLabel>
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
                    <IonLabel position="floating"> PassWord</IonLabel>
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
                        Login
                    </IonButton>    <p style={{ fontSize: "medium" }}>
                         <a href="/SignUp">S'inscrire</a>
                    </p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
        </IonPage>
	);
};

export default Login;