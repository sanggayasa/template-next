"use client"
import { useSelector } from 'react-redux'
const TotalNilaiStore = () => {
    const cartpayment = useSelector((states: any) => states.nilai);
    console.log('cart total', cartpayment) 
    return (
        <div>
            <h1>Total Nilai Store = {cartpayment}</h1>
        </div>
    )
}

export default TotalNilaiStore;
