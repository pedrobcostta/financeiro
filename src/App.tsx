import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Managements from "./pages/Managements";
import NewManagement from "./pages/NewManagement";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import Banks from "./pages/Banks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/managements" replace />} />
          <Route path="/managements" element={<Managements />} />
          <Route path="/new-management" element={<NewManagement />} />
          <Route path="/dashboard/:managementId" element={<Index />} />
          <Route path="/management/:managementId/expenses" element={<Expenses />} />
          <Route path="/management/:managementId/income" element={<Income />} />
          <Route path="/management/:managementId/banks" element={<Banks />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;