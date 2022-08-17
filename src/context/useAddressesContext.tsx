import { PropsWithChildren, useState, createContext, useContext } from "react";

type ContextType = {
  addresses: Array<string>,
  setAddresses(address: string): void,  
}

const INITIAL_CONTEXT: ContextType = {
  addresses: [],
  setAddresses: () => [],
}

const AddressBookContext = createContext(INITIAL_CONTEXT);

export const AddressBookContextProvider = (props: PropsWithChildren): JSX.Element => {
  const [ addresses, setAddresses ] = useState<Array<string>>([]);

  const handleSetAddresses = (address: string) => {
    if (!addresses.includes(address)) {
      setAddresses([address, ...addresses]);
    }
  }

  const context = {
    addresses,
    setAddresses: handleSetAddresses
  };

  return <AddressBookContext.Provider value={ context } { ...props } />;
}

export const useAddressesContext = (): ContextType => useContext(AddressBookContext);