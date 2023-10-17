import React, {useState, useEffect} from 'react'
import sampleData from "../assets/data"

export default function () {
    const [nameFilText, setNameFilText] = useState("")
    const [ageFilText, setAgeFilText] = useState("")
    const [filData, setFilData] = useState(sampleData)
    const [cityVal,setCityVal] = useState("All")
    const [occVal,setOccVal] = useState("All")
    const [flag, setFlag] = useState(true)


    let cities =  sampleData.map((sample) =>(
        sample.city
    ))
    cities.unshift("All")

    let occupations =  sampleData.map((sample) =>(
        sample.occupation
    ))
    occupations.unshift("All")



    useEffect(()=>{
        setFilData(sampleData)
    },[flag])




    const handleSearch = () => {
        let filterBySearch = []
        if (nameFilText === "" && ageFilText === "" && cityVal==="All" && occVal==="All") {  return; } 

        else if (nameFilText !== "" && ageFilText === "" && cityVal==="All" && occVal==="All"){
        filterBySearch = filData.filter((item) => { 
            if (item.name.toLowerCase() 
                .includes(nameFilText.toLowerCase())) { return item; } })
            setFilData(filterBySearch)
        
    }
    else if (nameFilText === "" && ageFilText !== "" && cityVal==="All" && occVal==="All"){
        filterBySearch = filData.filter((item) => { 
            if (item.age == ageFilText) { return item; } })
            setFilData(filterBySearch)
        
    }
    else if (nameFilText !== "" && ageFilText !== "" && cityVal==="All" && occVal==="All"){
        filterBySearch = filData.filter((item) => { 
            if (item.name.toLowerCase() 
            .includes(nameFilText.toLowerCase()) && item.age == ageFilText) { return item; } })
            setFilData(filterBySearch)
        
    }
    else if (nameFilText !== "" && ageFilText !== "" && cityVal!=="All" && occVal!=="All"){
        filterBySearch = filData.filter((item) => { 
            if (item.name.toLowerCase() 
            .includes(nameFilText.toLowerCase()) && item.age == ageFilText && cityVal.toLowerCase() === item.city && occVal.toLowerCase() === item.occupation) { return item; } })
            setFilData(filterBySearch)
    }
    
    
    }

    const handleSelect = (e) => {
        const [id,value] = e.target.value

        if(id==="1"){
            setCityVal(value)

        }
        else if (id==="2"){
            setOccVal(value)
        }
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
        <select onChange={handleSelect} name="Cities"  id="1">
        {cities.map((city) =>(
        <option onChange={handleSelect} value={city}>{city}</option>
        )
        )
        }
        </select>

        <br/>

        <label > Occupations </label>
        <select onChange={handleSelect} name="occupations"  id="2">
        {occupations.map((city) =>(
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
