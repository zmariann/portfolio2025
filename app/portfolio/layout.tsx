export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-3">
        {children}
        THIS IS FROM LAYOUT
      </body>
    </html>
  );
}
