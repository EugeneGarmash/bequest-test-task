import { useAddressesContext } from '../../context/useAddressesContext';
import styles from './AddressBook.module.scss';

const AddressBook = () => {
  const { addresses } = useAddressesContext();
  return (
    <ul className={styles.AddressBook}>
      {addresses.map(a => <li style={{ color: '#343a40' }}>{a}</li>)}
    </ul>
  );
}

export default AddressBook;