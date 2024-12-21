import React from 'react'
import Mobile from '../assets/static-banner-bnpl-v4.jpg'

const MobileImg = () => {
  return (
    <div className="mt-56 md:mt-32 lg:mt-56">
  <img
    className="w-full h-full md:h-[50vh] sm:h-[50vh] "
    src={Mobile}
    alt=""
  />
</div>
  )
}

export default MobileImg