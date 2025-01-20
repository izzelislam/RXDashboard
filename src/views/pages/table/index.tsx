import React from 'react'
import MainLayout from '../../../components/layout/main-layout'
import StarterElement from '../../../components/ui/starter-element'
import DataTable from '../../../components/ui/data-table'
import { Columns } from './column'
import {dumyDataTable} from './dumy-data'

const breadCrumbs = [
  {
    name: 'Dashboard',
    link: '/'
  },
  {
    name: 'Data Table',
    link: '/table'
  },
]


const TablePage = () => {

  return (
    <MainLayout>
      <StarterElement
        title='Data Table'
        breadCrumbs={breadCrumbs}
      >
         <DataTable
            data={dumyDataTable} 
            columns={Columns}
            attributes={{
              last_page: 2
            }}
            loading={false}
            fn={() => {}}
          />
      </StarterElement>
    </MainLayout>
  )
}

export default TablePage