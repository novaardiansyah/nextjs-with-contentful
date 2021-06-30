import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields
  
  return (
    <div className="col-12 col-md-4 mb-3">
      <div className="card">
        <Image
          className="card-img-top"
          src={'https:' + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
        
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text">Takes approx { cookingTime } mins to make</p>
          <Link href={'/recipes/' + slug}>
            <a className="btn btn-danger">Cook This</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
/* ============================================================================================================================================================================================================================================================================================================ */