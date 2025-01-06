import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../Constants"

const CustomerReviews = () => {
  return (
<section className="max-container ">
<h3 className="font-palanquin text-4xl text-center font-bold">
  What Our? {` `}
  <span className="text-coral-red ">
     Customer </span>
  Say?
</h3>
<p className="info-text m-auto mt-3 max-w-lg text-center "> Here Stores from our Customers</p>
<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
{reviews.map((review)=>(
  <ReviewCard key={review.customerName} imgURL={review.imgURL}
    customerName={review.customerName}
    rating={review.rating}
    feedback={review.feedback}
  />
))}
</div>
</section>
  )
}

export default CustomerReviews