import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "../src/components/Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col gap-10 px-4 md:px-10 lg:px-20 xl:px-40 pt-10 pb-20 flex-grow">
          <AppRouter />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
