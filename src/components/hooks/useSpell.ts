import { useTypedSelector } from "./useTypedSelector"


const useSpell = () => {
  const spell = useTypedSelector((state=>state.spell))
  return spell 
}

export default useSpell