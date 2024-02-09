import { IonCol, IonHeader, IonRow, IonText, IonTitle, IonToolbar , IonButton, IonIcon, IonItem, IonLabel, IonInput, IonGrid, IonContent, IonPage } from "@ionic/react";
import { personCircle } from "ionicons/icons";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handler for email input change
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Handler for password input change
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Function to handle form submission
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
        const response = await axios.post('https://ventevoitureback-production.up.railway.app/auth/authenticate', {
            email,
            password,
        });

        // Assuming the token is returned under the key 'token' in the response
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log('Token saved to localStorage:', token);
        history.push('/ListeAnnonce');
        // Redirect user after successful login or perform other actions
        } catch (error) {
        console.error('Error during login:', error);
        }
    };

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
                      value={email}
                      onIonChange={handleEmailChange}
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
                      value={password}
                  onIonChange={handlePasswordChange}
                      >
                  </IonInput>
                  </IonItem>
              </IonCol>
              </IonRow>
              <IonRow>
              <IonCol>
                  <IonButton expand="block" onClick={handleLogin}>
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