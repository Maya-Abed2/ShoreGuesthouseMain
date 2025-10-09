import {assets} from '../../public/images/assets'
export default function Header() {
  return (
    <div className="bg-cover bg-center overflow-hidden w-full min-h-screen flex justify-center items-center" style={{backgroundImage:`url('${assets.main}')`}}>
        <h1 className='text-2xl md:text-4xl lg:text-5xl px-4 text-white'>Where Comfort and Charm Meet the Aegean</h1>
    </div>
  )
}
