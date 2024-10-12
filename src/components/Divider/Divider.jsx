import left from "../../assets/images/Ellipse-left.webp"
import right from "../../assets/images/Ellipse-right.webp"
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle'

export default function Divider() {
  return (
<> 
<section className=' divider position-relative'>
<img src={left} alt="Ellipse"  className='img-fluid left'/>
<img src={right} alt="Ellipse"  className='img-fluid right'/>
<div className="container-fluid">
<AnimatedTitle text={"NUTRI-TONE"} title={""}/>
</div>
 </section>
</>
  )
}
