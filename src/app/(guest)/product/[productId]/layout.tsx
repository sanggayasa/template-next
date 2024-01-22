export default function ProductDetailsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>
        {children}
        <h2>layout footer product</h2>
    </>
}