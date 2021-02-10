import { memo, MouseEvent } from 'react'

import SurvivorImage from './SurvivorImage'

export interface Survivor {
  id?: number,
  firstName: string
  lastName: string
  picture: string
  infected: boolean
  location?: string
  age?: number
  description?: string
}

export interface Props {
  survivor: Survivor
  onClick: React.MouseEventHandler<HTMLDivElement>
}

export default memo(function SurvivorCard({ survivor, onClick }: Props) {
  return (
    <div
      className="survivor-card"
      onClick={onClick}
    >
      <SurvivorImage
        src={survivor?.picture}
        alt={`${survivor?.firstName} ${survivor?.lastName}`}
        infected={survivor?.infected}
      />
      <img className="survivor-card-image" src={survivor?.picture} alt={`${survivor?.firstName} ${survivor?.lastName}`} />
      <h4 className="survivor-card-title">{survivor?.firstName} {survivor?.lastName}</h4>
    </div>
  )
})
