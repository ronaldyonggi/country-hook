const Country = ({ country }) => {
    if (!country) {
        return (
            <div>
                not found...
            </div>
        )
    }

    console.log(country.flag)

    return (
        <div>
            <h3>{country.name.common}</h3>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>
            {country.flag}
        </div>
    )
}

export default Country