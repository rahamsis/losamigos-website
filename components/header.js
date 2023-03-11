import Navbar from './navbar/navBarPrincipal';

export default function header(props) {
  return (
    <header className="fixed bg-crema left-0 top-0 w-full z-[100]">
      {/* <nav> */}
        {props.type == undefined && <Navbar />}
      {/* </nav> */}
    </header>

  )
}
