import { useState } from "react";
import Button from "../Button/Button";
import ManualAddressManager from "../ManualAddressManager/ManualAddressManager";
import PostcodeManager from "../PoscodeManager/PostcodeManager";
import styles from './AddressManager.module.scss';

const AddressManager = () => {
  const [manualModeIsOn, setManualMode] = useState(false);

  const handleModeChange = () => {
    setManualMode(!manualModeIsOn);
  }

  return (
    <>
      <div className={styles.AddressManager__content}>
        {manualModeIsOn
          ? <ManualAddressManager />
          : <PostcodeManager />
        }
      </div>
      <div className={styles.AddressManager__buttonContainer}>
        <Button fullHeight onClick={handleModeChange}>
          {manualModeIsOn
            ? 'Use PostCode search'
            : 'Complete manually'
          }
        </Button>
      </div>
    </>
  )
}
export default AddressManager;