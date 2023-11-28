import {FC} from "react";
import {StyledError} from "./styles";

interface Props {
  error: {
    title: string;
    text: string;
  }
}

export const Error: FC<Props> = ({error}) => (
  <StyledError>
    {error.title}
    <p className='text'>
      {error.text}
    </p>
  </StyledError>
);