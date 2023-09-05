import { getDictionary } from '../../dictionaries'
 
export default async function Page({ params: { lang } }: {params: {lang: string}}) {
  const dict = await getDictionary(lang) // en
  return (
    <div>
        <h1>{dict.posts.title}</h1>
    </div>
  )
}

     