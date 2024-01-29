import Card from "@/components/card/card"

const Component = ()=> {
    return (
        <div className="border-2 border-solid border-gray-100 p-3 m-3">
            <div className="flex flex-row">
                <h1> Card Example 1</h1>
                
            </div>
            <div className="flex flex-row">
                <Card></Card>
            </div>
        </div>
    )
}

export default Component