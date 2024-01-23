export default function Profile({ params }:{params:{id:string}}) {
    return (
        <div>
            <h2>admin</h2>
            <h2>ID : {params.id}</h2>
        </div>
    )
}