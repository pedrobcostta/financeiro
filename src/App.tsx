import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Index from "@/pages/Index";
import Managements from "@/pages/Managements";
import NewManagement from "@/pages/NewManagement";
import Expenses from "@/pages/Expenses";
import Income from "@/pages/Income";
import Banks from "@/pages/Banks";
import NewExpense from "@/pages/NewExpense";
import NewIncome from "@/pages/NewIncome";
import NewBank from "@/pages/NewBank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/managements" element={<Managements />} />
        <Route path="/managements/new" element={<NewManagement />} />
        <Route path="/management/:managementId/expenses" element={<Expenses />} />
        <Route path="/management/:managementId/expenses/new" element={<NewExpense />} />
        <Route path="/management/:managementId/income" element={<Income />} />
        <Route path="/management/:managementId/income/new" element={<NewIncome />} />
        <Route path="/management/:managementId/banks" element={<Banks />} />
        <Route path="/management/:managementId/banks/new" element={<NewBank />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;