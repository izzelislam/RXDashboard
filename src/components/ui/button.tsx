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

const ButtonBGColor : any  = {
  primary  : 'bg-primary',
  secondary: 'bg-secondary',
  success  : 'bg-success',
  danger   : 'bg-danger',
  warning  : 'bg-warning',
  dark     : 'bg-dark',
  warning2 : 'bg-warning2'
}

const ButtonBGHover : any  = {
  primary  : 'bg-primary/80',
  secondary: 'bg-secondary/80',
  success  : 'bg-success/80',
  danger   : 'bg-danger/80',
  warning  : 'bg-warning/80',
  dark     : 'bg-dark/80',
  warning2 : 'bg-warning2/80'
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
      className={`${color == ButtonColor.secondary ? 'text-primary' : 'text-white'} mt-3 py-2 rounded-${rounded} ${title ? `px-6` : `px-2`} hover:${ButtonBGHover[color]} transition-all duration-300 flex justify-center items-center gap-2
      ${mode === Mode.inline ? 'inline' : 'w-full'}
      ${isLoading ? 'pointer-events-none' : ''}
      ${isLoading ? `${ButtonBGColor[color]}/80` : ButtonBGColor[color]}
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