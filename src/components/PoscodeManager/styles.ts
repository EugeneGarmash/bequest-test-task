export const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? 'white' : '#343a40',
    background: state.isSelected ? '#ff4c50' : '#ffffff',
    outline: 'none',
    "&:hover": {
      color: 'white',
      background: '#ff4c50'
    }
  }),
  noOptionsMessage: (provided: any) => ({
    ...provided,
    textAlign: 'start',
    paddingLeft: '30px',
    color: '#999999',
    maxHeight: '42px',
  }),
  loadingMessage: (provided: any) => ({
    ...provided,
    textAlign: 'start',
    paddingLeft: '30px',
    color: '#999999',
    maxHeight: '42px',
  }),
  menu: (provided: any, state: any) => {
    return ({
      ...provided,
      display: !state.options.length && !state.isLoading ? 'none' : 'block',
      maxHeight: !state.options.length && '42px',
      borderRadius: '21px',
      overflow: 'hidden',
      maxWidth: '400px',
      fontSize: '1.125rem',
    })
  },
  placeholder: (provided: any) => ({
    ...provided,
    color: '#999999',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    fontSize: '1.125rem',
    width: '400px',
    marginRight: '15px',
    height: '100%',
    borderRadius: '21px',
    outline: 'none',
    boxShadow: 'none',
    border: '1px solid rgb(204, 204, 204)',
    padding: '0 20px 0px',
    "&:hover": {
      border: '1px solid rgb(204, 204, 204)',
    }
  }),
}