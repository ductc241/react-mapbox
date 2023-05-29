import { NavigationProvider } from "../store/provider";
import Navigation from "../modules/Navigation";

const NavigationPage = () => {
  return (
    <NavigationProvider>
      <Navigation />
    </NavigationProvider>
  );
};

export default NavigationPage;
