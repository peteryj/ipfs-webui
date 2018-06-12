import React from 'react'
import PropTypes from 'prop-types'

import TrashIcon from '../../icons/StrokeTrash'

import Button from '../../components/button/Button'

const ProgressBar = ({...props}) => {
  return (
    <div className='shadow-4 sans-serif' {...props}>
      <div className='bg-snow br-100 flex justify-center items-center' style={{width: '80px', height: '80px'}}>
        <TrashIcon className='fill-gray w3' />
      </div>

      <div className='flex justify-between pa2' style={{ backgroundColor: '#f4f6f8' }}>
        <Button className='ma2' bg='bg-gray' onClick={() => {}}>Cancel</Button>
        <Button className='ma2' bg='bg-red' onClick={() => {}}>Delete</Button>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {

}

ProgressBar.defaultProps = {

}

export default ProgressBar
