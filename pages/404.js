import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'

export default function NotFound() {
  const router = useRouter()
  
  useEffect(() => {
    setTimeout(function() {
      router.push('/')
    }, 3000);
  }, [])
  
  return (
    <>
      <Head>
        <title>404 page not found</title>
      </Head>
      
      <div class="row">
        <div class="col not-found">
          <h1 class="title">404</h1>
          <h2>Ooops! that page cannot be found :(</h2>
          <p>Redirecting to the <Link href="/"><a>Home page</a></Link> for more marmite goodness..</p>
        </div>
      </div>
      
      <style jsx>{`
        .not-found {
          background-color: #f5f6fa;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,.1);
          transform: rotateZ(-1deg);
        }
        
        h1 {
          font-size: 3em;
        }
      `}</style>
    </>
  )
}
/* ============================================================================================================================================================================================================================================================================================================ */