import {Input} from "../components/Input/Input";
import {PageWrapper} from "./styles";
import {Slideshow} from "../features/users/components/Slideshow/Slideshow";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export const Home = () => {
  return (
    <ErrorBoundary>
      <PageWrapper>
        <Input/>
        <Slideshow />
      </PageWrapper>
    </ErrorBoundary>
  );
};
