import React from 'react'
import MainLayout from '../../../components/layout/main-layout'
import StarterElement from '../../../components/ui/starter-element'
import Button, { ButtonColor } from '../../../components/ui/button'
import { toast } from 'react-toastify'

const breadCrumbs = [
  {
    name: 'Dashboard',
    link: '/'
  },
  {
    name: 'Toast',
    link: '/toast'
  },
]

const ToastPage = () => {
  return (
    <MainLayout>
      <StarterElement
        title='Toast'
        breadCrumbs={breadCrumbs}
      >

        <div className='flex gap-4'>
          <Button
            title='Show Toast Success'
            color={ButtonColor.success}
            onClick={() => toast.success('Success Toast')}
          />
          <Button
            title='Show Danger Success'
            color={ButtonColor.danger}
            onClick={() => toast.error('Error Toast')}
          />
        </div>

      </StarterElement>
    </MainLayout>
  )
}

export default ToastPage