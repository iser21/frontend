import Navbar from "./components/Navbar";
import Logupload from "./components/Logupload";
// import Dashboardcards from "./components/Dashboardcards";
import LogTable from "./components/LogTable";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
       {/* <Dashboardcards /> */}
        <Logupload />
        <LogTable />
      </main>
      <Footer />
    </>
  );
}

export default App;
