import { useState } from "react";
import Button from "../Button/Button";
import ManualAddressManager from "../ManualAddressManager/ManualAddressManager";
import PostcodeManager from "../PoscodeManager/PostcodeManager";

const AddressManager = () => {
  const [manualModeIsOn, setManualMode] = useState(false);

  const handleModeChange = () => {
    setManualMode(!manualModeIsOn);
  }

  return (
    <>
      {manualModeIsOn ? <ManualAddressManager /> : <PostcodeManager />}
      <Button onClick={handleModeChange}>{manualModeIsOn ? 'Use PostCode search' : 'Complete manually'}</Button>
    </>
  )
}
export default AddressManager;