import React from 'react'

import UserContext from './Contexts/index'
import { useContext } from 'react'

function Info() {
    const {username} = useContext(UserContext)
  return (
    <h3 className='greet'>{`Welcome to My Website {${username}}`}</h3>
  )
}

export default Info