import Head from 'next/head'
import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })
  
  const response = await client.getEntries({ content_type: 'recipe' })
  
  return {
    props: { recipes: response.items },
    revalidate: 1
  }
}

export default function Recipes({ recipes }) {
  return (
    <>
      <Head>
        <title>Recipe List</title>
      </Head>
      
      <div className="row">
        { recipes &&
          recipes.map(recipe => (
            <RecipeCard key={ recipe.sys.id } recipe={ recipe} />
          ))
        }
      </div>
    </>
  )
}
/* ============================================================================================================================================================================================================================================================================================================ */