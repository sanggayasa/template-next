import { useRouter } from "next/router"

export default function Login() {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            <h2>admin</h2>
            <h2>ID : </h2>
        </div>
    )
}