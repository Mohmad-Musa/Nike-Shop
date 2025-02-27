import { shoe8 } from "../assets/images"
import Button from "../Components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container">
<div className="flex flex-1 flex-col ">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        We provide You
          <span className="text-coral-red"> Super </span> 
          <span className="text-coral-red"> Quality</span> Shoes 
        </h2>
        <p className="mt-4 info-text lg:max-w-lg">
                 
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
                       
        </p>
      
        <div className="mt-11">   <Button label="View details" /></div>

</div>
<div className="flex-1 flex justify-center items-center">
<img src={shoe8} alt="shoe" width={570} height={522} className="object-container"/>
</div>
</section>
  )
}

export default SuperQuality