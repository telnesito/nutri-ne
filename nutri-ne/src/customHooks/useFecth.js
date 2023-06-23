import { useState } from 'react'


const useFecth = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isEmpty, setIsEmpty] = useState(false)


  const selectFirst = "es-ES"
  const selectSecond = "en-US"

  const getTranslation = async (text) => {
    if (!text) return
    try {
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${selectFirst}|${selectSecond}`)
      const data = await res.json()
      console.log(data)
      const translated = data.responseData.translatedText
      return translated
    } catch (error) {
      console.log(error)
    }
  }


  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Error al obtener los datos')
      }

      const responseData = await response.json()
      setData(responseData)
      if (responseData.count === 0) {
        setIsEmpty(true)
      } else {
        setIsEmpty(false)
      }
      setIsLoading(false)

    } catch (error) {
      setError(error)
      setIsLoading(false)


    }
  }




  return { data, isLoading, error, fetchData, isEmpty }
}

export default useFecth