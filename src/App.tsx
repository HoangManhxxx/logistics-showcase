import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Index from "./pages/Index";
import GioiThieu from "./pages/GioiThieu";
import DichVu from "./pages/DichVu";
import DuAn from "./pages/DuAn";
import TinTuc from "./pages/TinTuc";
import LienHe from "./pages/LienHe";
import NotFound from "./pages/NotFound";
import ProjectSingle from "@/pages/ProjectSingle.tsx";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import FloatingButtons from "@/components/FloatingButtons.tsx";
import CTASection from "@/components/CTASection.tsx";

const queryClient = new QueryClient();

const App = () => (
    <HelmetProvider>
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>
                <BrowserRouter>
                    <Helmet>
                        <title>Dịch vụ vận tải | Container, Siêu trường siêu trọng, Kho bãi</title>
                        <meta name="description"
                              content="Dịch vụ vận tải đa dạng: vận chuyển container nội địa, hàng siêu trường siêu trọng, cho thuê kho bãi, dịch vụ cẩu nâng hạ. Hotline: 090 123 45 67"/>
                    </Helmet>
                    <Header/>

                    <Routes>
                        <Route path="/" element={<Index/>}/>
                        <Route path="/gioi-thieu" element={<GioiThieu/>}/>
                        <Route path="/dich-vu" element={<DichVu/>}/>
                        <Route path="/dich-vu/:slug" element={<DichVu/>}/>
                        <Route path="/du-an" element={<DuAn/>}/>
                        <Route path="/du-an/:url" element={<ProjectSingle/>}/>
                        <Route path="/tin-tuc" element={<TinTuc/>}/>
                        <Route path="/tin-tuc/:id" element={<TinTuc/>}/>
                        <Route path="/lien-he" element={<LienHe/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    <CTASection/>
                    <Footer/>
                </BrowserRouter>
                <FloatingButtons/>
            </TooltipProvider>
        </QueryClientProvider>
    </HelmetProvider>
);

export default App;
