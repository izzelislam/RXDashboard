import { Icon } from "@iconify/react/dist/iconify.js"
import MainAuthLayout from "../../../components/layout/main-auth-layout"
import TextInput from "../../../components/ui/text-input"
import Button, { Mode } from "../../../components/ui/button"

function LoginPage() {
  return (
   <MainAuthLayout>
    <div className="w-2/3">
      <div className="flex flex-col justify-center items-center mb-6">
        <img src="/src/assets/img/logo.png" alt="logo" className="w-24" />
        <h3 className="text-xl text-ireng font-semibold my-3">Login</h3>
        <p className="text-slateIreng">Masukan dengan no telepon anda</p>
      </div>

      <div>
        <TextInput title="No Telepon Aktif" placeholder="Masukan No Telepon" onChange={(e) => console.log(e)} />
        <div>
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-sm checked:bg-primary" />
          </label>
        </div>

        <div>
          <Button isLoading title="Login" mode={Mode.block} onClick={() => console.log('Login')} />
        </div>
      </div>
    </div>
   </MainAuthLayout> 
  )
}

export default LoginPage