import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { CreateContainer, MainContainer, Header } from "./components";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="flex flex-col w-screen h-auto bg-primary ">
        <Header />

        <main className="w-full px-4 py-4 md:px-16 md:mt-20 mt-14">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
