import React from 'react'
import Wrapper from './Wrapper'

const FormHeader = () => {
    return (
        <Wrapper className='px-6 py-4 flex flex-col mb-4'>
            <span className='font-semibold text-[15px] leading-[160%] tracking-[0%] text-text-primary'>Merchant</span>
            <span className='font-medium text-xs leading-[150%] tracking-[0%] text-text-secondary'>Paga il tuo ordine in un massimo di 36 rate</span>
        </Wrapper>
    )
}

export default FormHeader