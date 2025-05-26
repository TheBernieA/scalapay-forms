import { scalapayLogo } from '@/public/assets/images'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='relative'>
            <div className='relative min-h-[109px] bg-pink-bg z-10'>
                <div className="h-full flex justify-center relative bg-center bg-cover bg-no-repeat">
                    <div className="w-full h-[65px] flex items-center justify-center absolute top-10">
                        <Image src={scalapayLogo.src} width={100} priority height={100} alt='scalapay logo' className='w-[110.88px] h-[34.48px]' />
                    </div>
                </div>
            </div>
            <div className="absolute -top-[-3px] w-full h-[290px] overflow-hidden">
                <div
                    className="
                         absolute
                         w-[1560px] h-[1560px]       
                         rounded-full               
                         bg-pink-bg                
                         -top-[1380px]                
                         left-1/2                    
                         -translate-x-1/2            
                         pointer-events-none         
                         z-0                     
                         "
                />
            </div>
        </div>
    )
}

export default Header