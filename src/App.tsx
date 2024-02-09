import { IonApp, IonRefresher, IonRefresherContent, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import AjoutAnnonce from './pages/AjoutAnnonce';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Annonce from './annonce/Annonce';
import Login from './login/Login';
import SignUp from './login/SignUp';
import Details from './annonce/Details';


setupIonicReact();

const App: React.FC = () => {
  const doRefresh = (event: CustomEvent) => {
    // Mettez ici votre logique de rafraîchissement des données
    setTimeout(() => {
      console.log('Données rafraîchies');
      event.detail.complete(); // Indique à Ionic que le rafraîchissement est terminé
    }, 2000); // Exemple d'une attente de 2 secondes avant de compléter le rafraîchissement
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/ListeAnnonce" exact={true}>
              <Annonce />
            </Route>
            <Route path="/AjouteAnnonce" exact={true}>
              <AjoutAnnonce />
            </Route>
            <Route path="/Login" exact={true}>
              <Login />
            </Route>
            <Route path="/" exact={true}>
              <Login />
            </Route>

            <Route path="/SignUp" exact={true}>
              <SignUp />
            </Route>
            <Route path="/Detail/:id" exact={true}>
              <Details />
            </Route>
            
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
      <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
      <IonRefresherContent
        pullingText="Tirez pour rafraîchir"
        refreshingSpinner="circles"
        refreshingText="Rafraîchissement en cours...">
      </IonRefresherContent>
    </IonRefresher>
    </IonApp>
  );
};

export default App;
