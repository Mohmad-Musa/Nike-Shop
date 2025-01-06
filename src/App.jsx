import Hero from "./sections/Hero"
import PopularProduct from "./sections/PopularProduct"
import Nav from "./Components/Nav"
import SuperQuality from "./sections/SuperQuality"
import  Services  from "./sections/Services"
import SpecialOffer from "./sections/SpecialOffer"
import CustomerReviews from "./sections/CustomerReviews"
import Subscripe from "./sections/Subscripe"
import Footer from "./sections/Footer"
const App = () => {
  return (
 <main className="relative">
<Nav/>
<section className="xl:padding-l wide:padding-r padding-b">
<Hero/>
</section>
<section className="padding ">
<PopularProduct/>
</section>
      <section className="padding ">
      <SuperQuality/>
      </section>
      <section className="padding padding-x py-10">
        <Services />
      </section>
      <section className="padding ">
      <SpecialOffer/>
      </section>
      <section className="bg-pale-blue padding ">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full ">
        <Subscripe/>
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
      <Footer/>
      </section>

 </main>
  )
}

export default App