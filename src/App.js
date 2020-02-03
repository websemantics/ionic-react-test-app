import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react'
import { logoIonic } from 'ionicons/icons'
import React from 'react'

const App = () => {
  return (React.createElement(IonApp, null,
    React.createElement(IonHeader, null,
      React.createElement(IonToolbar, null,
        React.createElement(IonTitle, null, "Welcome to React"))),
    React.createElement(IonContent, null,
      React.createElement(IonList, null,
        React.createElement(IonItem, { button: true },
          React.createElement(IonIcon, { icon: logoIonic, slot: "start" }),
          React.createElement(IonLabel, null, "Test something"))))))
}

export default App
