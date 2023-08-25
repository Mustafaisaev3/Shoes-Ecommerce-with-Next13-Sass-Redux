'use client'

import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div className='menu'>
        <MenuItem label='Mens' />
        <MenuItem label='Womens' />
        <MenuItem label='Kids' />
        {/* <MenuItem label='Sport' /> */}
        <MenuItem label='Slippers' />
    </div>
  )
}

export default Menu