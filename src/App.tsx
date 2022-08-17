import Header from './components/Header';
import AddressManager from './components/AddressManager/AddressManager';
import { QueryClient, DefaultOptions, QueryClientProvider } from 'react-query';
import AddressBook from './components/AddressBook/AddressBook';
import './App.css';
import { AddressBookContextProvider } from './context/useAddressesContext';

/*
  @todo font - copy & paste & menu:hover - bold

  move (api types)
  test everything one more time
  tests
  deploy
*/

const RQ_CONFIG = {
  queries: {
    suspense: false,
    enabled: true,
    retry: 0,
    staleTime: 1000,
    cacheTime: 1000,
    refetchOnWindowFocus: false,
    refetchInterval: false,
    refetchOnMount: true,
    useErrorBoundary: false
  },
  mutations: {
    suspense: false,
    throwOnError: false,
    useErrorBoundary: false
  }
} as const;

const App = () => {

  const client = new QueryClient({ defaultOptions: RQ_CONFIG as DefaultOptions });
  
  return (
    <QueryClientProvider client={client}>
      <AddressBookContextProvider>
        <div className="App">
          <Header />
          <AddressManager />
          <AddressBook />
        </div>
      </AddressBookContextProvider>
    </QueryClientProvider>

  )
}

export default App;
