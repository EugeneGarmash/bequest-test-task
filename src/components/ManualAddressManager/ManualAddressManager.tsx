import styles from './ManualAddressManager.module.scss'
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../Button/Button';
import ErrorText from '../ErrorText/ErrorText';
import { useAddressesContext } from '../../context/useAddressesContext';

type Inputs = {
  country: string;
  town: string;
  postcode: string;
};


const ManualAddressManager = () => {
  const { addresses, setAddresses } = useAddressesContext();
  const { register, watch, getValues, handleSubmit, formState: { errors } } = useForm<Inputs>({
    shouldFocusError: true,
  });
  const values = getValues();
  const allFieldsAreFilled = watch("postcode")?.trim() && watch("town")?.trim() && watch("country")?.trim() ;
  const addressHasBeenSaved = !!Object.values(values).length && addresses.includes(Object.values(values).reduce((curr, acc) => acc + ', ' + curr) );
  const onSubmit: SubmitHandler<Inputs> = data => setAddresses(Object.values(data)?.reduce((curr, acc) => acc + ', ' + curr));

  return (
    <form className={styles.ManualAddressManager__form} onSubmit={handleSubmit(onSubmit)}>
      <input className={styles.ManualAddressManager__textInput} placeholder={"country"} {...register("country", { required: true })} />
      <ErrorText error={errors.country ? "This field is required" : '' }/>

      <input className={styles.ManualAddressManager__textInput} placeholder="town" {...register("town", { required: true })} />
      <ErrorText error={errors.town ? "This field is required" : '' }/>
      <input className={styles.ManualAddressManager__textInput} placeholder="postcode" {...register("postcode", { required: true })} />
      <ErrorText error={errors.postcode ? "This field is required" : '' }/>
      
      <div className={styles.ManualAddressManager__buttonContainer}>
        <Button disabled={!allFieldsAreFilled || addressHasBeenSaved} fullHeight onClick={handleSubmit(onSubmit)}>Save to Addressbook</Button>
      </div>
    </form>
  )
}

export default ManualAddressManager;