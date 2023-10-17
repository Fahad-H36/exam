import React, {useState, useEffect} from 'react'
import sampleData from "../assets/data"

export default function () {
    const [nameFilText, setNameFilText] = useState("")
    const [ageFilText, setAgeFilText] = useState("")
    const [filData, setFilData] = useState(sampleData)




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
        <button onClick={handleSearch}>Search</button>  

        {filData.map((sample)=>(
            <>
            <h3> Id : {sample.id}, Name: {sample.name}, Age: {sample.age}, city: {sample.city}, Occupation: {sample.occupation} <br/> <br/> </h3>
            </>
        ))}
    </div>
  )
}
