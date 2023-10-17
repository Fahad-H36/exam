import React, {useState, useEffect} from 'react'
import sampleData from "../assets/data"

export default function () {
    useEffect(() =>{
    }
    )
  return (
    <div>
        {sampleData.map((sample)=>(
            <>
            <h3> Id : {sample.id}, Name: {sample.name}, Age: {sample.age}, city: {sample.city}, Occupation: {sample.occupation} <br/> <br/> </h3>
            </>
        ))}
    </div>
  )
}
