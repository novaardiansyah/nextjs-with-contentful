import Head from 'next/head'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

// components
import Skeleton from '../../components/Skeleton'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "recipe" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug
  })
  
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  return {
    props: { recipe: items[0] },
    revalidate: 1
  }
}

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />
  
  const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields
  
  return (
    <>
      <Head>
        <title>Recipe Details</title>
      </Head>
      
      <div className="row">
        <div className="col">
          <div className="text-center">
            <Image 
              src={'https:' + featuredImage.fields.file.url}
              width={featuredImage.fields.file.details.image.width}
              height={featuredImage.fields.file.details.image.height}
            />
          </div>
          <h2 className="title">{ title }</h2>
          
          <div className="info">
            <p>Takes about { cookingTime } mins to cook.</p>
            <h3>Ingredients:</h3>
    
            {ingredients.map(ing => (
              <span key={ing}>{ ing }</span>
            ))}
          </div>
    
          <div className="method mt-3">
            <h3>Method:</h3>
            <div>{documentToReactComponents(method)}</div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .info span::after {
          content: ', '
        }
        .info span:last-child::after {
          content: '.'
        }
      `}</style>
    </>
  )
}
/* ============================================================================================================================================================================================================================================================================================================ */