import "@/styles/global.scss";

export const metadata = {
  title: "Capibara family website",
  description: "Capibara's guilds homepage",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default layout;
