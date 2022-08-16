import { useRef, useState } from 'react';
import Select from 'react-select';
import { CustomDropdownIndicator } from './components';
import Button from '../Button/Button';
import { PostcodeResourse, usePostcodeSearch } from '../query/poscode';
import styles from './PostcodeManager.module.scss';
import { customStyles } from './styles';

type Option = { value: string; label: string};

const PostcodeManager = () => {
  const [ inputValue, setInputValue ] = useState('');
  const [ selectValue, setSelectValue ] = useState<Option | null>(null);
  const [ options, setOptions ] = useState<Option[]>([]); 
  const [ error, setError ] = useState('');
  const selectRef = useRef<any>();

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
        setError(error.message);
      },
      onSuccess: (data: PostcodeResourse) => {
        setOptions(data?.addresses?.map((address: any) => ({
          value: address.name,
          label: address.name
        })));
      }
    });

 return <div className={styles.PostcodeManager}>
    <div className={styles.PostcodeManager__selectContainer}>
      <Select
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
        onClick={() => {
          selectRef.current.focus();
          refetch();
        }}
      >Search postcode</Button>
    </div>
    <p className={styles.PostcodeManager__errorText}>{error}</p>
  </div>
}

export default PostcodeManager;