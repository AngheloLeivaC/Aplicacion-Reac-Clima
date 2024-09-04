import { useState } from 'react'
export const  Logica = () => {

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
}