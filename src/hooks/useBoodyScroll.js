import { useEffect, useState } from "react"

function useBodyScroll() {
    const bodyStyle = document.body.style

    const [isLocked,setIsLocked] = useState(bodyStyle.overflowY === 'hideen');

    useEffect(()=>{
        bodyStyle.overflow = isLocked ? 'hidden' : 'auto'

    },[isLocked, bodyStyle])

    const toggle = ()=> {
        if (window.innerWidth < 750) {
            setIsLocked(!isLocked);
        }
    }

    return [isLocked, toggle]
}

export default useBodyScroll;