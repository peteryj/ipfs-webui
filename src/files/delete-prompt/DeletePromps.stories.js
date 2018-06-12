import React from 'react'
import { storiesOf } from '@storybook/react'
import DeletePrompt from './DeletePrompt'

storiesOf('Files', module)
  .add('Delete Prompt', () => (
    <div className='ma2'>
      <DeletePrompt bg='bg-navy' progress={42} />
    </div>
  ))
