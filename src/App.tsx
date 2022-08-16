import Header from './Header';
import AddressManager from './AddressManager/AddressManager';
import { QueryClient, DefaultOptions, QueryClientProvider } from 'react-query';
import AddressBook from './AddressBook/AddressBook';
import './App.css';

/*
  @todo font - copy & paste
  @todo context - addressBook
  @todo api - postcode
  @todo menu:hover - bold
  @todo move api types
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
      <div className="App">
        <Header />

          <AddressManager />
          <AddressBook />

      </div>
    </QueryClientProvider>

  )
}

export default App;
