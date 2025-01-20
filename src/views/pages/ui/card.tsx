import React from 'react'
import MainLayout from '../../../components/layout/main-layout'
import StarterElement from '../../../components/ui/starter-element'
import Card from '../../../components/ui/card'

const breadCrumbs = [
  {
    name: 'Dashboard',
    link: '/'
  },
  {
    name: 'Card',
    link: '/card'
  },
]

const CardPage = () => {
  return (
   <MainLayout>
    <StarterElement 
      title='Card'
      breadCrumbs={breadCrumbs}
      transParantBg
    >

      <div className='flex flex-wrap gap-4'>
        <div>
          <div className='mb-4'>
            <p className='font-semibold text-gray-500'>Card with header</p>
          </div>
          <Card 
            width='full'
            title='Title your card'
            subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, consequatur.'
            lineHeader
          >
            <img src="https://picsum.photos/500/500" alt="logo" className="w-full h-40 object-cover object-center rounded-md mb-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, consequatur.</p>
          </Card>
        </div>

        <div>
          <div className='mb-4'>
            <p className='font-semibold text-gray-500'>Card withot header</p>
          </div>
          <Card 
            width='full'
          >
            <img src="https://picsum.photos/500/500" alt="logo" className="w-full h-40 object-cover object-center rounded-md mb-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, consequatur.</p>
          </Card>
        </div>
      </div>


    </StarterElement>
   </MainLayout>
  )
}

export default CardPage