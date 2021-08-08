import PropTypes from 'prop-types'
import Form from './components/Form'
import FormDecor from './components/FormDecor'
import ANCHORS from '@/constants/anchors'

import styles from './connectForm.module.scss'

const ConnectForm = ({connectWithUsForm, buttons, privacyPolicy, termsOfUse}) => {
  const {formTitle, formDescription, agreements, inputList, formEndPoint} = connectWithUsForm
  return (
    <section className={styles.connectForm} id={ANCHORS.SEND_REQUEST}>
      <div className={styles.contentWrapper}>
        <div className={styles.descriptionWrapper}>
          <h1 className={styles.title}>{formTitle}</h1>
          <span className={styles.description}>{formDescription}</span>
        </div>
        <div className={styles.formWrapper}>
          <Form
            inputList={inputList}
            buttonText={buttons.buttonSendRequest}
            agreements={agreements}
            privacyPolicy={privacyPolicy}
            termsOfUse={termsOfUse}
            formEndPoint={formEndPoint}
          />
        </div>
        <FormDecor />
      </div>
    </section>
  )
}

ConnectForm.propTypes = {
  connectWithUsForm: PropTypes.object,
  privacyPolicy: PropTypes.object,
  termsOfUse: PropTypes.object,
  buttons: PropTypes.object
}
export default ConnectForm
