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
      <main className="min-h-screen pt-16 pb-16">
        {children}
      </main>
      <Footer />
    </>
  );
}

