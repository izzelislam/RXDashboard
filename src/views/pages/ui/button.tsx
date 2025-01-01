import StarterElement from '../../../components/ui/starter-element'
import MainLayout from '../../../components/layout/main-layout'
import Button, { ButtonColor, Mode } from '../../../components/ui/button'
import { Icon } from '@iconify/react/dist/iconify.js'

const breadCrumbs = [
  {
    name: 'Dashboard',
    link: '/'
  },
  {
    name: 'Button',
    link: '/button'
  },
]

const ButtonPage = () => {
  return (
    <MainLayout>
      <StarterElement
        title='Button'
        breadCrumbs={breadCrumbs}
      >
        <Button
          mode={Mode.block}
          title="Button"
          onClick={() => console.log('Button')}
        />

        <Button
          mode={Mode.block}
          title="Button"
          isLoading
          onClick={() => console.log('Button')}
        />

        <div className='my-4'>
          <p>Button Variant</p>
          <div className='flex gap-2'>
            <Button
              title="danger"
              onClick={() => console.log('Button')}
              color={ButtonColor.danger}
            />
            <Button
              title="success"
              onClick={() => console.log('Button')}
              color={ButtonColor.success}
            />
            <Button
              title="warning"
              onClick={() => console.log('Button')}
              color={ButtonColor.warning}
            />
            <Button
              title="dark"
              onClick={() => console.log('Button')}
              color={ButtonColor.dark}
            />
            <Button
              title="secondary"
              onClick={() => console.log('Button')}
              color={ButtonColor.secondary}
            />
            <Button
              title="warning two"
              onClick={() => console.log('Button')}
              color={ButtonColor.warning2}
            />
          </div>
        </div>

        <div className='my-4'>
          <p>Button Variant size</p>
          <div className='flex gap-2'>
            <Button
              title="primary md"
              onClick={() => console.log('Button')}
              color={ButtonColor.primary}
            />
          </div>
        </div>

        <div className='my-4'>
          <p>Button border Variant</p>
          <div className='flex gap-2'>
            <Button
              title="rounded full"
              onClick={() => console.log('Button')}
              color={ButtonColor.primary}
              rounded='full'
              endElement={<Icon icon="material-symbols:arrow-forward" className='text-xl' />}
            />

            <Button
              title="rounded lg"
              onClick={() => console.log('Button')}
              color={ButtonColor.primary}
              rounded='lg'
              endElement={<Icon icon="material-symbols:arrow-forward" className='text-xl' />}
            />

            <Button
              title="rounded md"
              onClick={() => console.log('Button')}
              color={ButtonColor.primary}
              rounded='md'
              endElement={<Icon icon="material-symbols:arrow-forward" className='text-xl' />}
            />

            <Button
              title="rounded none"
              onClick={() => console.log('Button')}
              color={'danger'}
              rounded='none'
              endElement={<Icon icon="material-symbols:arrow-forward" className='text-xl' />}
            />
          </div>
        </div>

        <div className='my-4'>
          <p>Button Variant outlined</p>
          <div className='flex gap-2'>
            <Button
              title="danger"
              onClick={() => console.log('Button')}
              color={ButtonColor.danger}
              isOutlined
            />
            <Button
              title="success"
              onClick={() => console.log('Button')}
              color={ButtonColor.success}
              isOutlined
            />
            <Button
              title="warning"
              onClick={() => console.log('Button')}
              color={ButtonColor.warning}
              isOutlined
            />
            <Button
              title="dark"
              onClick={() => console.log('Button')}
              color={ButtonColor.dark}
              isOutlined
            />
            <Button
              title="secondary"
              onClick={() => console.log('Button')}
              color={ButtonColor.secondary}
              isOutlined
            />
            <Button
              title="warning two"
              onClick={() => console.log('Button')}
              color={ButtonColor.warning2}
              isOutlined
            />
          </div>
        </div>

        <div className='my-4'>
          <p>Button Variant with icon</p>
          <div className='flex gap-2'>
            <Button
              title="danger"
              onClick={() => console.log('Button')}
              color={ButtonColor.danger}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              title="success"
              onClick={() => console.log('Button')}
              color={ButtonColor.success}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              title="warning"
              onClick={() => console.log('Button')}
              color={ButtonColor.warning}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              title="dark"
              onClick={() => console.log('Button')}
              color={ButtonColor.dark}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              title="secondary"
              onClick={() => console.log('Button')}
              color={ButtonColor.secondary}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              title="warning two"
              onClick={() => console.log('Button')}
              color={ButtonColor.warning2}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
          </div>
        </div>

        <div className='my-4'>
          <p>Button icon only</p>
          <div className='flex gap-2'>
            <Button
              onClick={() => console.log('Button')}
              color={ButtonColor.danger}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              onClick={() => console.log('Button')}
              color={ButtonColor.success}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              onClick={() => console.log('Button')}
              color={ButtonColor.warning}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              onClick={() => console.log('Button')}
              color={ButtonColor.dark}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              onClick={() => console.log('Button')}
              color={ButtonColor.secondary}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
            <Button
              onClick={() => console.log('Button')}
              color={ButtonColor.warning2}
              startElement={<Icon icon="material-symbols:delete" className='text-xl' />}
            />
          </div>
        </div>

      </StarterElement>
    </MainLayout>
  )
}

export default ButtonPage