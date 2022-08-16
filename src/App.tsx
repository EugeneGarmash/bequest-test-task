import Header from './Header';
import AddressManager from './AddressManager/AddressManager';

import './App.css';
import AddressBook from './AddressBook/AddressBook';

/*
  @todo font - copy & paste
  @todo context - addressBook
  @todo api - postcode
  @todo menu:hover - bold
  @todo move api types
*/

const App = () => {
  return (

    <div className="App">
      <Header />

      <AddressManager />

      <AddressBook />
    </div>
  )
}

export default App;
