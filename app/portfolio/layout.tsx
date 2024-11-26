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
        <section className="min-h-screen flex flex-col">
          <NavLinks></NavLinks>
          <main className="">{children}</main>
          <Footer></Footer>
        </section>
      </body>
    </html>
  );
}
