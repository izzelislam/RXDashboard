import React from 'react'

type Props = {
  children: React.ReactNode
}

const MainAuthLayout: React.FC<Props> = ({children} : Props) =>  {
  return (
    <div className="flex h-screen w-full">
      <div className="relative hidden md:flex lg:flex justify-center items-center align-middle w-1/2 h-screen bg-primary">
          <img src="/src/assets/img/xgray.png" alt="login" className="w-6 h-6 absolute top-52 left-28" />
          <img src="/src/assets/img/elipsgreen.png" alt="login" className="w-6 h-6 absolute top-36 left-56" />
          <img src="/src/assets/img/xgray.png" alt="login" className="w-5 h-5 absolute bottom-44 right-28" />
          <img src="/src/assets/img/elipsgray.png" alt="login" className="w-5 h-5 absolute bottom-28 right-40" />

          <div className="max-w-md">
            <div className="bg-white/20 px-3 py-1 inline-block rounded-md">
              <p className="text-white font-semibold text-sm">Welcome to Mahir CPNS</p>
            </div>
            <p className="text-white font-semibold text-3xl leading-relaxed">
              Siapkah Kamu Menjadi <br /> 
              ASN? Uji Dirimu dengan <br /> 
              Mahir CPNS Terbaik!
            </p>
          </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export default MainAuthLayout