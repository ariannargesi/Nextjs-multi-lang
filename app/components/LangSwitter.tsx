'use client'

import useChangeLanguege from "../hooks/useSwitchLanguage"

export default function LangSwitter () {

    const languageSwitcher = useChangeLanguege()

     return (
        <div>
            <button onClick={() => languageSwitcher('en')} >See in English</button>
            <button onClick={() => languageSwitcher('nl')}>See in Dutch</button>
        </div>
    )
}