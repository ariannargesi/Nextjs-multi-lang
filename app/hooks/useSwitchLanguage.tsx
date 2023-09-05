import { useParams, usePathname, useRouter } from 'next/navigation'

const useChangeLanguege = () => {

    const router = useRouter()
    const params = useParams()
    const pathname = usePathname()

    return function (newLang: string) {
        const newPathname = pathname.replace(`/${params.lang}`, `/${newLang}`)
        router.push(newPathname)
    }
}

export default useChangeLanguege