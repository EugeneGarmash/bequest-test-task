import { useAddressesContext } from '../../context/useAddressesContext';

const AddressBook = () => {
  const { addresses } = useAddressesContext();
  return (
    <ul>
      {addresses.map(a => <li style={{ color: '#343a40' }}>{a}</li>)}
    </ul>
  );
}

export default AddressBook;