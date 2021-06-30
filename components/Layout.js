import Link from 'next/link'

export default function Layout({children}) {
  return (
    <div className="layout">
      <header>
        <div className="container">
          <div className="row my-5">
            <div className="col header_marmite">
              <Link href="/">
                <a>
                  <h1 className="title">
                    <span>Just Add</span>
                    <span>Marmite</span>
                  </h1>
                  <h2 className="title">Spread The Joy</h2>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <div className="container mb-5">
        {children}
      </div>
      
      <footer>
        <div className="container-fluid">
          <div className="row py-4">
            <div className="col d-flex justify-content-center align-items-center">
              <p className="py-0 my-0">Copyright &copy; 2021 Just Add Marmite.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
/* ============================================================================================================================================================================================================================================================================================================ */