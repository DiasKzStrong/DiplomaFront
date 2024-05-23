import { useTypedSelector } from "./useTypedSelector"


const useSettings = () => {
  const settings = useTypedSelector((state=>state.dashboardSettings))
  return settings 
}

export default useSettings