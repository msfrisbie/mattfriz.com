
export default function CustomNavbar() {
//   const [expanded, setExpanded] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light absolute w-full top-0">
        <div className="container-fluid w-full px-3">
            <a className="navbar-brand" href="/">Matt Frisbie</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Publications</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/pieces">Less Serious Publications</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/msfrisbie" target="_blank">GitHub</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="https://twitter.com/mattfriz" target="_blank">Twitter</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/matt-frisbie-65441513/" target="_blank">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}
    // <nav className="absolute w-full top-0 bootstrap-scope">
    //   <Navbar
    //     className="w-full px-3"
    //     bg="light"
    //     expand="lg"
    //     expanded={expanded}
    //   >
    //     <Navbar.Brand href="/">Matt Frisbie</Navbar.Brand>
    //     <Navbar.Toggle
    //       aria-controls="basic-navbar-nav"
    //       onClick={() => setExpanded(!expanded)}
    //     />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link
    //           as={Link}
    //           to="/publications"
    //           onClick={() => setExpanded(false)}
    //         >
    //           Publications
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/pieces" onClick={() => setExpanded(false)}>
    //           Less Serious Publications
    //         </Nav.Link>
    //         <Nav.Link href="https://github.com/msfrisbie" target="_blank">
    //           GitHub
    //         </Nav.Link>
    //         <Nav.Link href="https://twitter.com/mattfriz" target="_blank">
    //           Twitter
    //         </Nav.Link>
    //         <Nav.Link
    //           href="https://www.linkedin.com/in/matt-frisbie-65441513/"
    //           target="_blank"
    //         >
    //           LinkedIn
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    // </nav>