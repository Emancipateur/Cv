import React from 'react';
import { BrowserRouter , Route , Routes} from 'react-router-dom'

import Home from'./pages/Home';
import Contact from'./pages/Contact';
import NotFound from'./pages/NotFound';
import Knowledges from'./pages/Knowledges';
import Portfolio from'./pages/Portfolio';


function App() {
  return (
 <>
<BrowserRouter>
<Routes>
<Route path ="/" element={<Home />} />
<Route path ="/comptences" element={<Knowledges />} />
<Route path ="/portfolio" element={<Portfolio />} />
<Route path ="/contact" element={<Contact />} />
<Route path="*" element={<NotFound />} />
</Routes>

</BrowserRouter>
 </>
  );
}

export default App;
