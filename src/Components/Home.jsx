import About from "./About/About";
import ContactHome from "./FormContact/ContactHome";
import AllMain from "./Main/AllMain";
import Plans from "./Plans/Plans";
import Services from "./Sevicers/Services";

function Home() {
  return (
    <>
      <AllMain></AllMain>
      <About></About>
      <Plans></Plans>
      <ContactHome></ContactHome>
      <Services></Services>
    </>
  );
}
export default Home;
