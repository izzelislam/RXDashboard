import { createColumnHelper } from "@tanstack/react-table"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"
import Badge from "../../../components/ui/badge";
import Button, { ButtonColor } from "../../../components/ui/button";

export const columnHelper = createColumnHelper<any>()
  const limitString = (str: string, maxLength: number) => {
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
};

export const Columns = [
  columnHelper.display({
    id: 'select',
    header: '',
    enableSorting: false,
    cell: () => <input type="checkbox" className="checkbox" />
  }),
  columnHelper.accessor('id', {
    header: 'id',
    cell: info => <div className="text-gray-600">{limitString(info.getValue(), 20)}</div>
  }),
  columnHelper.accessor('name', {
    header: 'Nama USER',
    cell: info => <div className="text-gray-600">{limitString(info.getValue(), 20)}</div>
  }),
  
  columnHelper.accessor('email', {
    header: 'Email',
    cell: info => <div className="text-gray-600">{info.getValue()}</div>
  }),

  columnHelper.accessor('role', {
    header: 'Role',
    cell: info => <div className="text-gray-600">{info.getValue()}</div>
  }),

  columnHelper.accessor('birt_date', {
    header: 'Tanggal Lahir',
    cell: info => <div className="text-gray-600">{info.getValue()}</div>
  }),

  columnHelper.accessor('city', {
    header: 'Kota',
    cell: info => <div className="text-gray-600">{info.getValue()}</div>
  }),
  
  columnHelper.accessor('status', {
    header: 'Status',
    cell: info => {
      if (info.getValue() === 'active') {
        return (
          <Badge title="Active" bg="bg-green-500" />
        )
      } else {
        return (
          <Badge title="Inactive" bg="bg-red-500" />
        )
      }

    }
  }),

  columnHelper.display({
    id: 'action',
    header: 'Action',
    enableSorting: false,
    cell: (info) => 
    <div className='flex items-center gap-2'>
      <Button
        startElement={<Icon icon="material-symbols:edit" />}
        color="primary"
        onClick={() => alert(JSON.stringify(info.row.original))}
      />
      <Button
        startElement={<Icon icon="material-symbols:delete" />}
        color="danger"
        onClick={() => alert(JSON.stringify(info.row.original))}
      />
    </div>
  })
]