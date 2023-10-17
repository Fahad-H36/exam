import React, {useState, useEffect} from 'react'
import sampleData from "../assets/data"

export default function () {
    const [nameFilText, setNameFilText] = useState("")
    const [ageFilText, setAgeFilText] = useState("")
    const [filData, setFilData] = useState(sampleData)
    const [cityVal,setCityVal] = useState("All")
    const [flag, setFlag] = useState(true)


    let cities =  sampleData.map((sample) =>(
        sample.city
    ))
    cities.unshift("All")
    useEffect(()=>{
        setFilData(sampleData)
    },[flag])

    const handleSearch = () => {
        let filterBySearch = []
        if (nameFilText === "" && ageFilText === "") {  return; } 

        else if (nameFilText !== "" && ageFilText === ""){
        filterBySearch = filData.filter((item) => { 
            if (item.name.toLowerCase() 
                .includes(nameFilText.toLowerCase())) { return item; } })
            setFilData(filterBySearch)
        
    }
    else if (nameFilText === "" && ageFilText !== ""){
        filterBySearch = filData.filter((item) => { 
            if (item.age == ageFilText) { return item; } })
            setFilData(filterBySearch)
        
    }
    else if (nameFilText !== "" && ageFilText !== ""){
        filterBySearch = filData.filter((item) => { 
            if (item.name.toLowerCase() 
            .includes(nameFilText.toLowerCase()) && item.age == ageFilText) { return item; } })
            setFilData(filterBySearch)
        
    }
    
    
    }

    const handleChange = (e) => {
        const [value] = e.target
        setCityVal(value)
    }

    const handleReset = (e) => {
        setFlag(!flag)

    }
    



  return (
    <div>
        <div>
            <label >Filter by Name </label>
            <input 
            type="text" 
            name="NameText" 
            value={nameFilText}
            onChange={(e) => setNameFilText(e.target.value)} /> 

        </div>
        <div>
            <label >Filter by Age </label>
            <input 
            type="text" 
            name="AgeText" 
            value={ageFilText}
            onChange={(e) => setAgeFilText(e.target.value)} /> 
        </div>
        <label > Cities </label>
        <select name="Hello" onChange={handleChange} id="1">
        {cities.map((city) =>(
        <option value={city}>{city}</option>
        )
        )
        }
        </select>
        <br/>
        <button onClick={handleSearch}>Search</button>
        <br/>
        <button onClick={handleReset}>Reset</button>
          

        {filData.map((sample)=>(
            <>
            <h3> Id : {sample.id}, Name: {sample.name}, Age: {sample.age}, city: {sample.city}, Occupation: {sample.occupation} <br/> <br/> </h3>
            </>
        ))}
        
    </div>
  )
}
