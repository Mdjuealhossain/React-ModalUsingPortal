import React from 'react';
import './App.css';
import Portal from './Modal-Components/Create_portal';
import PortalContain from './Modal-Components/portalContain';
import ControllModal from './OtherComponents/ControModal';

function App() {
 


  return (
   
  
 
<div>
<ControllModal />

<Portal>

<PortalContain></PortalContain>
</Portal>
</div>

  );
}

export default App;
