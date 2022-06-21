import CustomNavbar from "./CustomNavbar";
import Header from "./Header";

export default function Boilerplate({ children }) {
  return (
    <>
      <Header
        title="Matt Frisbie | Software Engineer, Bestselling Author"
        url="https://www.mattfriz.com"
        description="Matt Frisbie | Software Engineer, Bestselling Author"
      ></Header>
      <CustomNavbar />
      <main>{children}</main>
    </>
  );
}
