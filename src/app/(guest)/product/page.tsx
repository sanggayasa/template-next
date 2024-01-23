import Link from "next/link"

export default function ProductList() {
    const productId = 100
    return (
        <div>
            <Link href={`/product/${productId}`}>Product {productId}</Link>
            {/* page tidak kembali ke halaman sebelumnya */}
            <Link href={`/product/replace`} replace>Product replace</Link>
            <h1>product list</h1>
            <h2>product 1</h2>
            <h2>product 2</h2>
            <h2>product 3</h2>
            <h2>product 4</h2>
        </div>
    )
}