import React from 'react'
import StarterElement from '../../../components/ui/starter-element'
import MainLayout from '../../../components/layout/main-layout'

const breadCrumbs = [
  {
    name: 'Dashboard',
    link: '/'
  },
  {
    name: 'Starter Page',
    link: '/starter-page'
  },
]

const StarterPage = () => {
  return (
    <MainLayout>
      <StarterElement
        title='Starter Page'
        breadCrumbs={breadCrumbs}
      >
      </StarterElement>
    </MainLayout>
  )
}

export default StarterPage