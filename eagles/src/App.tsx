import React from "react";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import RosterPage from "./components/RosterPage";
import SchedulePage from "./components/SchedulePage";
import ResultsPage from "./components/ResultsPage";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "roster":
        return <RosterPage />;
      case "schedule":
        return <SchedulePage />;
      case "results":
        return <ResultsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
