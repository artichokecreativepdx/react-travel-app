import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personSharp, imageSharp, homeSharp, logInSharp, addSharp} from 'ionicons/icons';
import Profile from './pages/profile';
import Home from './pages/home';
import Explore from './pages/explore';
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
import Login from './pages/login';
import SignUp from './pages/signup';




function App() {
  return (
    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
         <Route exact path="/signup">
            <SignUp />
            </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="login" href="/login">
            <IonIcon icon={logInSharp} />
            <IonLabel>Log In</IonLabel>
          </IonTabButton>
          <IonTabButton tab="signup" href="/signup">
            <IonIcon icon={addSharp} />
            <IonLabel>Sign up</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personSharp} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeSharp} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="explore" href="/explore">
            <IonIcon icon={imageSharp} />
            <IonLabel>Explore</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
}

export default App;
