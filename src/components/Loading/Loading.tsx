import {FC} from "react";
import {StyledLoading} from "./styles";
import loadingGif from "../../assets/loading.gif"

interface Props {}

export const Loading: FC<Props> = () => (
  <StyledLoading>
    <img src={loadingGif} alt='Loading...' width='150px' height='150px'/>
  </StyledLoading>
);