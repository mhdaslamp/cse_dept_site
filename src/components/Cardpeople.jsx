'use client'
import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { MdKeyboardArrowDown ,MdKeyboardArrowUp } from "react-icons/md";
import { FaSquareFull } from "react-icons/fa6";


const ExpandableCards = ({title,year,item})=>{
  const [isExpanded, setIsExpanded] = useState(false);

;
  const toggleExpand = () => {
     if (!isExpanded) {
      setIsExpanded(true);
      
    } else {
      setIsExpanded(false);
    
      
    }
  };


  // useEffect(() => {
  //   if (isExpanded) {
  //     setTimeout(() => {
  //       setIsContentVisible(true);
  //     }, 1000); 
  //   }
  // }, [isExpanded]);

  return (
    <div className='w-screen  flex  justify-center overflow-hidden'>

      <div className={`group w-[85%] flex flex-col justify-center transition-all duration-[1s] ease-in-out bg-[#E9E9E8] p-3 ${isExpanded?"mb-5":""} }`} >
        <div className='flex justify-between'>
      <div onClick={toggleExpand} className={`font-bold transition-all duration-700 flex group-hover:text-black group-hover:text-2xl pl-5 ${isExpanded?"text-black text-2xl":"text-[#696969]"} cursor-pointer`}>
      <FaSquareFull className={`translate-y-[19px] duration-1000 transition-all ${isExpanded?"text-[5px] mr-2 ":"text-[0px] mr-0 text-[#696969]"}`}/>{title}
        </div>
      <div 
        onClick={toggleExpand}
        className={`transition-transform opacity-0 group-hover:opacity-100 cursor-pointer ${isExpanded?"rotate-180 opacity-100":''} duration-[1s] ease-in-out z-10`}
      >
        <MdKeyboardArrowDown className='w-10 h-8 text-[#9E9E9E]' />
        
        </div>
      </div>
    
        <div className={` transition-all duration-[1s] h-auto overflow-hidden  ${isExpanded?'opacity-100 max-h-screen':'opacity-0 max-h-0'}`}>
      <div className='pb-2 pl-5 '>Acadamics Year &nbsp; {year}</div>
      <div className='flex max-h-full'>
        <div className={`no-scrollbar flex flex-wrap flex-initial max-h-full  overflow-auto justify-center w-max transition-all duration-[1s] ease-in-out gap-3 pb-3 `}>

        {item.map((items,key)=>(
          <div key={key} className='bg-white h-[313px] w-[240px]'>
            <div className='w-full h-[77%] bg-cover bg-no-repeat bg-center' style={{backgroundImage:`url(${items.link})`}}></div>
            <div className='p-3 leading-3'>
            <h1 className='text-xl font-bold'>{items.name}</h1>
            <p className='text-[#9E9E9E]'>{items.postion}</p>
            </div>
            </div>
        ))}
        </div>
        </div>
        </div>

      </div>
      
    </div>


  );
}




function cardpeople() {

  const item1=[{
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"/images/card.jpeg"
  },
  {
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"/images/card.jpeg"
  },{
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"/images/card.jpeg"
  },{
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"/images/card.jpeg"
  },{
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"/images/card.jpeg"
  },{
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"/images/card.jpeg"
  },{
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"/images/card.jpeg"
  },{
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"/images/card.jpeg"
  },{
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"/images/card.jpeg"
  },
]

  return (
    <div className='flex flex-col justify-center items-center overflow-hidden'>
      <div className='w-min'>

      <ExpandableCards title="TEACHING STAFFS" year="2023-24" item={item1} className=""/>
      <ExpandableCards title="TECHNICAL STAFFS" year="2023-24" item={item1}/>
      <ExpandableCards title="ASSOCIATION MEMBER" year="2023-24" item={item1}/>
      <ExpandableCards title="STUDENTS" year="2023-24" item={item1}/>
      <ExpandableCards title="ALUMNI" year="2023-24" item={item1}/>
      </div>


     
    </div>
  )
}

export default cardpeople