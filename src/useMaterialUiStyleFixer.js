import {useEffect} from 'react';

export function useMaterialUiStyleFixer(){
    useEffect(()=>{
      let p = document.head.querySelectorAll("style[data-meta='makeStyles']")
      p.forEach((e)=>document.head.removeChild(e));
      p.forEach((e)=>document.head.appendChild(e));
    }, [])
}

export default useMaterialUiStyleFixer;