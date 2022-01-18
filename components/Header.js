import Head from 'next/head'

function Header() {
  return (
    <Head className="flex justify-between">
      <a href="#" className="text-black no-underline">
        Aman<span className="text-white"> Soni</span>
      </a>

      <nav className=" h-auto w-auto translate-x-0">
        <ul className=" flex m-0">
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </Head>
  )
}

export default Header
