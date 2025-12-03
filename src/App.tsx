import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import GioiThieu from "./pages/GioiThieu";
import DichVu from "./pages/DichVu";
import DuAn from "./pages/DuAn";
import TinTuc from "./pages/TinTuc";
import LienHe from "./pages/LienHe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gioi-thieu" element={<GioiThieu />} />
            <Route path="/dich-vu" element={<DichVu />} />
            <Route path="/dich-vu/:slug" element={<DichVu />} />
            <Route path="/du-an" element={<DuAn />} />
            <Route path="/tin-tuc" element={<TinTuc />} />
            <Route path="/tin-tuc/:id" element={<TinTuc />} />
            <Route path="/lien-he" element={<LienHe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
