"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("Placing yout order")
        router.push("/")
        // router.replace("/")
        // router.back()
        // router.forward()
    }

    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>place order</button>
        </div>
    )
}