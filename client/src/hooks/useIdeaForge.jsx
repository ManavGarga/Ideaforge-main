import { useContext } from "react";
import { IdeaForgeContext } from "../../provider/Provider";

const useIdeaForge = () => {
  return useContext(IdeaForgeContext);
};

export default useIdeaForge;