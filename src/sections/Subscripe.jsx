import Button from "../Components/Button"

const Subscripe = () => {
  return (
  <section className="max-container flex justify-between items-center max-lg:flex-col gap-10
  
  " id="contact-us">
<h3 className="text-3xl leading-[68px] lg:max-w-md font-palanquin font-bold  ">
  Sign UP for  {`  `}
  <span className="text-coral-red">
      Update  </span>& Newsletter
</h3>
<div className="lg:max-w-[40%] w-full flex flex-col items-center gap-5 p-2.5 sm:border sm:border-slater-gray rounded-full">
  <input type="text" placeholder="Subscribe@nike.com" className="input"/>
  <div className="flex max-sm justify-end items-center max-sm:w-full">
    <Button label="Sign Up"/>
  </div>
</div>
  </section>
  )
}

export default Subscripe