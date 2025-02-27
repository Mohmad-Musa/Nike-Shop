import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../Constants"

const Footer = () => {
  return (
<footer className="max-container">
  <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
<div className="flex flex-col items-start">
<a href="/"> 
<img src={footerLogo} width={150} height={46}/>
</a>
<p className="text-base mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">

</p>
<div className="flex items-center gap-5 mt-8">
{socialMedia.map((icon)=>(
  <div className="flex justify-center items-center w-12 h-12  bg-white rounded-full cursor-pointer">
    <img src={icon.src} width={24} height={24}/>
  </div>
))}
</div>
</div>
<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
{footerLinks.map((section)=>(
  <div>
    <h4 className="text-white">
      {section.title}
    </h4>
  </div>
))}
</div>
  </div>
</footer>
  )
}

export default Footer