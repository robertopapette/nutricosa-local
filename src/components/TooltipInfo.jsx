import { useState } from "react";
export default function TooltipInfo({ text }){
const [show, setShow] = useState(false);
return (
<span className="tipwrap" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
<span className="tipicon" aria-label="info">ℹ️</span>
{show && <span role="tooltip" className="tooltip">{text}</span>}
</span>
);
}