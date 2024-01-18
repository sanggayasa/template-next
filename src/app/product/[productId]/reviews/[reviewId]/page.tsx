import { notFound } from "next/navigation";
type ParamsType = {
    reviewId: string;
};

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }
export default function ReviewsDetail({ 
    params 
   }: Readonly<{ params: ParamsType }>) {
    const random = getRandomInt(2)
    
    if(random === 1){
        throw new Error("Error loading review")    
    }

    if(parseInt(params.reviewId) > 1000){
        notFound()
    }
    
    return (
        <div>
            <h1>product detail {params.reviewId}</h1>
        </div>
    )
}