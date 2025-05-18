import { scalapayLogo } from '@/public/assets/images'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='h-[25vh]'>
            <div className="h-full flex justify-center items-center relative bg-[url(/assets/images/header-bg.png)] bg-center bg-cover bg-no-repeat">
                <div className="w-full flex flex-col">
                    <span className='text-text-primary font-semibold text-[10px] tracking-[0%] text-center'>Secure checkout</span>
                    {/* <Image src={scalapayLogo.src} width={100} height={100} alt='scalapay logo' className='z-50 w-[110.88px] h-[21px]' /> */}
                </div>
            </div>
        </div>
    )
}

export default Header