import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
  onNavigate : (page : "home" | "about" | "contact")=>void;
};

export default function Layout({ children,onNavigate }: LayoutProps) {
  return (
    <>
      <Navbar onNavigate={onNavigate} />
      <main className="min-h-[89vh] pt-2 pb-2">
        {children}
      </main>
      <Footer />
    </>
  );
}

