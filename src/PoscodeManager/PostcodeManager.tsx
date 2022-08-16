import styles from './PostcodeManager.module.scss';
import Select from 'react-select';
import { usePostcodeSearch } from '../query/poscode';
import { useState } from 'react';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const PostcodeManager = () => {
  const [ inputValue, setInputValue ] = useState('');

  const {
    isFetching: postcodeIsFetching,
    data: postcodeSuggest = [],
    refetch: refetchDailyControls
  } = usePostcodeSearch(''); //inputValue


  const options = postcodeSuggest.map(p => ({
    value: 'chocolate',
    label: 'Chocolate'
  }))

  const handleInputValue = (value: string) => {
    setInputValue(value)
  }


 return <Select
    onInputChange={handleInputValue}
    inputValue={inputValue}
    isSearchable={true}
    options={options}
  />
}

export default PostcodeManager;