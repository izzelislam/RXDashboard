import { Icon } from '@iconify/react/dist/iconify.js'

export enum Mode {
  block = 'block',
  inline = 'inline'
}

export enum ButtonColor {
  primary   = 'primary',
  secondary = 'secondary',
  success   = 'success',
  danger    = 'danger',
  warning   = 'warning',
  dark      = 'dark',
  warning2  = 'warning2'
}

type Props = {
  title?: string
  onClick: () => void
  mode?: Mode
  isLoading?: boolean
  // color?: ButtonColor
  color?: string
  isOutlined?: boolean,
  startElement?: any
  endElement?: any
  rounded?: string
}

const Button = ({title, onClick, mode = Mode.inline, isLoading = false, color='primary', isOutlined = false, startElement, endElement, rounded='lg'}: Props) => {
  
  return isOutlined 
  ? (
      <button 
        className={`text-${color} mt-3 py-2 rounded-${rounded}  px-6 border border-${color} hover:border-${color}/80 transition-all duration-300 flex justify-center items-center gap-2
        ${mode === Mode.inline ? 'inline' : 'w-full'}
        ${isLoading ? 'pointer-events-none' : ''}
        `}
        onClick={onClick}
      >
        {
          isLoading &&
          <Icon icon="svg-spinners:180-ring-with-bg" className="text-xl" />
        }
        {
          !isLoading && startElement
        }
        {title}
        {
          !isLoading && endElement
        }
      </button>
    )
  : (
    <button 
      className={`${color == ButtonColor.secondary ? 'text-primary' : 'text-white'} mt-3 py-2 rounded-${rounded} ${title ? `px-6` : `px-2`} hover:bg-${color}/80 transition-all duration-300 flex justify-center items-center gap-2
      ${mode === Mode.inline ? 'inline' : 'w-full'}
      ${isLoading ? 'pointer-events-none' : ''}
      ${isLoading ? `bg-${color}/80` : `bg-${color}`}
      `}
      onClick={onClick}
    >
      {
        isLoading &&
        <Icon icon="svg-spinners:180-ring-with-bg" className="text-xl" />
      }
      {
        !isLoading && startElement
      }
      {title ?? ''}
      {
        !isLoading && endElement
      }
    </button>
  )
}

export default Button