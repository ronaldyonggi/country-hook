import { useEffect, useState } from "react"
import countriesService from '../services/countries'

export const useField = type => {
    const [value, setValue] = useState('')

    const onChange = event => setValue(event.target.value)

    return { type, value, onChange}
}

export const useCountry = name => {
    const [country, setCountry] = useState(null)

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const fetchedCountry = await countriesService.getCountry(name)
                setCountry(fetchedCountry)
            } catch(error) {
                setCountry(null)
            }
        } 

        fetchCountry()

    }, [name])

    return country
}
