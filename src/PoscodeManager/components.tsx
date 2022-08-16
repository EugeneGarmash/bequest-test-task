export const CustomDropdownIndicator = () => {
  return (
    <div style={{
      padding: '0 10px',
    }}>
      <div style={{
        background: '#343a40',
        borderRadius: '50%',
        width: '17px',
        height: '17px',
        position: 'relative',
        cursor: 'pointer',
      }}>
        <div style={{
          width: 0,
          height: 0,
          borderStyle: 'solid',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          borderWidth: '4px 4px 0 4px',
          borderColor: 'white transparent transparent transparent',
        }} />
      </div>
    </div>
  )
}