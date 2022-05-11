import CustomNavbar from './CustomNavbar'

export default function Boilerplate({ children }) {
  return (
    <>
      <CustomNavbar />
      <main>{children}</main>
      <CustomNavbar />
    </>
  )
}