import React from 'react'
import { FaInstagram, FaPinterestP, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Social() {
  return (
    <div className='my-4 flex justify-center items-center gap-2 text-xl'>
      <FaPinterestP />
<FaInstagram />
<FaXTwitter />
<FaTelegram/>
    </div>
  )
}

export default Social