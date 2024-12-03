import { neueRegrade, regonia } from "../_components/fonts/font";
import Footer from "../_components/footer";
import NavLinks from "../_components/nav-links";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${neueRegrade.variable} ${regonia.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <NavLinks></NavLinks>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
