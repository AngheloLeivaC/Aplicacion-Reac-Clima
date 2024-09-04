import { useState } from 'react'


export const ClimaApp = () => {
    
    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const apikey = '60345965c812593fd5a46fe1c3cf1f0b'
    const difKelvin = 273.15
    const [ciudad, setCiudad] = useState('')
    const [dataclima, setdataClima] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(ciudad.length >0 ) fetchClima()
    }

    const fetchClima = async () => {
        try{
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${apikey} `)
            const data = await response.json()
            setdataClima(data)
        }catch(error){
                console.error('ocurrio el problema: ', error)
        }
    }
    
    return (
    <>

        <div className='container'>
            <h1>APlicacion de clima</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={ciudad}
                    onChange= {handleCambioCiudad}
                />
                <button type='submit'>Buscar</button>
            </form>
            {
                dataclima && (
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${dataclima.weather[0].icon}@2x.png`}/>
                        <h2>{dataclima.name}</h2>
                        <p>temperatura: {parseInt((dataclima.main.temp)- difKelvin)}</p>
                        <p>Condicion: {dataclima.weather[0].description}</p>
                    </div>
                )
            }
        </div>
        
    </>
  )
}
