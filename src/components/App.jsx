import Header from "./header/mainHeader/header";
import Hero from "./pages/home/home";
import Cake from "./pages/cake/cake";
import Macaruns from "./pages/makaruns/makaruns";
import Muscats from "./pages/muskats/muskats";
import Contacts from "./pages/contacts/contacts";
import Eklers from "./pages/eklers/eklers";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
    
      <Header/>
        <Routes>
          <Route path="/coffe-cake" element={<Hero/>} />
          <Route path="/cofee-cake/cake" element={<Cake/>}/>
          <Route path="/cofee-cake/macaruns" element={<Macaruns/>}/>
          <Route path="/cofee-cake/muskats" element={<Muscats/>}/>
          <Route path="/cofee-cake/eklers" element={<Eklers/>}/>
          <Route path="/cofee-cake/contacts" element={<Contacts/>}/>


        </Routes>
      
    </>
    
  );
};
