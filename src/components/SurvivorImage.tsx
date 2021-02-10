import { memo } from 'react'
import classNames from 'classnames'

import InfectedBadge from '../assets/infected-badge.svg'

interface Props {
  src: string
  alt: string
  infected: boolean
}

export default memo(function SurvivorImage({ src, alt, infected }: Props) {
  return (
    <div className={classNames('survivor-image-wrapper', {
      'survivor-image-wrapper-infected': infected,
    })}>
      <img className="survivor-image" src={src} alt={alt} />
      {
        infected ?
          <img className="survivor-image-badge" src={InfectedBadge} alt="Infected" />
          : null
      }
    </div>
  )
})