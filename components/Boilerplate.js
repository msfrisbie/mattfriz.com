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
      {children}
      <footer className="flex flex-col items-center justify-center p-8 text-sm text-gray-300">
        Copyright Matt Frisbie 2022
      </footer>
    </>
  );
}
