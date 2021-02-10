import classNames from 'classnames'
import Modal from 'react-modal'

import { Survivor } from './SurvivorCard'
import SurvivorImage from './SurvivorImage'

interface Props {
  isOpen: boolean
  onClose?: () => void
  survivor: Survivor
  updateSurvivor: (Survivor) => void
}

export default function SurvivorModal({ isOpen, onClose, survivor, updateSurvivor }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={250}
      className="modal survivor-modal"
      overlayClassName="modal-overlay"
    >
      <div className="survivor-modal-header">
        <div className="survivor-modal-image">
          <SurvivorImage
            src={survivor?.picture}
            alt={`${survivor?.firstName} ${survivor?.lastName}`}
            infected={survivor?.infected}
          />
        </div>
        <div className="survivor-modal-header-content">
          <h2 className="survivor-modal-header-title">{survivor?.firstName} {survivor?.lastName}, {survivor?.age}</h2>
          <p className="survivor-modal-header-subtitle">
            {survivor?.location}
          </p>
          <button
            className={classNames('btn', {
              'btn-accent': !survivor?.infected,
            })}
            onClick={() => updateSurvivor({
              ...survivor,
              infected: !survivor?.infected,
            })}
          >
            {survivor?.infected ? 'Unmark as infected' : 'Mark as infected'}
          </button>
        </div>
      </div>
      <div className="survivor-modal-description">{survivor?.description}</div>
    </Modal>
  )
}
