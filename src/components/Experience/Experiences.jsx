import React from 'react'

import UserCard from '../UserCard/UserCard'
const people = [
    {
        id: 1,
        name: "Daniel", 
        title: "I move to Calgary in 2021", 
        description: "I came to calgary to study Software Development"
    },
    {
        id: 2,
        name: "Sophia",
        title: "I started a new job in Vancouver in 2020",
        description: "I relocated to Vancouver to work in a tech startup"
    },
    {
        id: 3,
        name: "Liam",
        title: "I traveled to Toronto in 2019",
        description: "I visited Toronto to attend a tech conference"
    },
    {
        id: 4,
        name: "Emma",
        title: "I settled in Montreal in 2018",
        description: "I moved to Montreal to pursue my passion for design"
    },
    {
        id: 5,
        name: "Jackson",
        title: "I went on a road trip to Ottawa in 2017",
        description: "I traveled to Ottawa for a summer vacation"
    },
    {
        id: 6,
        name: "Olivia",
        title: "I relocated to Winnipeg in 2016",
        description: "I shifted to Winnipeg to be closer to my family"
    },
   
]


function Experiences() {
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
       
        {people.slice(0, 4).map((person)=>{
            return( 
                <UserCard name={person.name}  title={person.title} description={person.description} key={person.id}/>
            )
        })}

    </div>
  )
}

export default Experiences