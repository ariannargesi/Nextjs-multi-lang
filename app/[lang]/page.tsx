import { getDictionary } from "../dictionaries"

export default async function Page({ params: { lang } }: {params: {lang: string}}) {
   const dict = await getDictionary(lang)
   return (
    <div>
      <h1>{dict.home.title}</h1>
    </div>
  )
}