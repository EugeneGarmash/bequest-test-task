import { useRef, useState } from 'react';
import Select from 'react-select';
import { CustomDropdownIndicator } from './components';
import Button from '../Button/Button';
import { PostcodeResourse, usePostcodeSearch } from '../../query/poscode';
import styles from './PostcodeManager.module.scss';
import { customStyles } from './styles';
import ErrorText from '../ErrorText/ErrorText';
import { useAddressesContext } from '../../context/useAddressesContext';

type Option = { value: string; label: string};

const PostcodeManager = () => {
  const [ inputValue, setInputValue ] = useState('');
  const [ selectValue, setSelectValue ] = useState<Option | null>(null);
  const [ options, setOptions ] = useState<Option[]>([]); 
  const [ error, setError ] = useState('');
  const selectRef = useRef<any>();

  const { setAddresses } = useAddressesContext();

  const handleInputValue = (value: string, action: any) => {
    if (action.action === "input-change") {
      setSelectValue(null);
      setOptions([]);
      setError('')
      setInputValue(value);
    }
  }


  const { isFetching, refetch } = usePostcodeSearch(
    inputValue,
    {
      enabled: false,
      onError: (error: any) => {
        selectRef.current.blur();
        setError(error.response?.data?.Message || error.message);
      },
      onSuccess: (data: PostcodeResourse) => {
        setInputValue('');
        setOptions(data?.addresses?.map((a: any) => {
          const address = a.replaceAll(', ,', '');
          return ({
            value: address,
            label: address
          })
        }));
      }
    });

 return <div className={styles.PostcodeManager}>
    <div className={styles.PostcodeManager__selectContainer}>
      <Select
        isClearable={true}
        className={styles.PostcodeManager__select}
        placeholder={"Enter your postcode"}
        styles={customStyles}
        components={{
          DropdownIndicator: CustomDropdownIndicator,
          IndicatorSeparator: null,
          LoadingIndicator: () => null,
        }}
        value={selectValue}
        onChange={(option) => {
          setSelectValue(option as Option);
        }}
        onInputChange={handleInputValue}
        inputValue={inputValue}
        openMenuOnFocus={true}
        isSearchable={true}
        options={options}
        isLoading={isFetching}
        ref={selectRef}
      />
      <Button
        fullHeight
        disabled={!!selectValue?.label || !inputValue}
        onClick={() => {
          selectRef.current.focus();
          refetch();
        }}
      >Search postcode</Button>
    </div>
    <ErrorText error={error}/>

    <div className={styles.PostcodeManager__buttonContainer}>
      <Button
        disabled={!selectValue?.label}
        fullHeight
        onClick={() => {
          setAddresses(selectValue?.label as string)
          setSelectValue(null)
        }}
      >
        Save to Addressbook
      </Button>
    </div>

  </div>
}

export default PostcodeManager;