'use client'
import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { MdKeyboardArrowDown ,MdKeyboardArrowUp } from "react-icons/md";


const ExpandableCards = ({year,item})=>{
  const [isExpanded, setIsExpanded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [height, setHeight] = useState("50px");
  const itemsRef = useRef(null);
  const toggleExpand = () => {
     if (!isExpanded) {
      setIsExpanded(true);
      // setHeight(`${50+itemsRef.current.scrollHeight}px`);
    } else {
      setIsExpanded(false);
      setIsContentVisible(false);
      
    }
  };
  useEffect(()=>{
    if(isExpanded){
      setHeight(`${100+itemsRef.current.offsetHeight}px`);
    }
    else{
      setHeight("50px");
    }
  },isExpanded)

 


  // useEffect(() => {
  //   if (isExpanded) {
  //     setTimeout(() => {
  //       setIsContentVisible(true);
  //     }, 1000); 
  //   }
  // }, [isExpanded]);

  return (
    <div className='w-screen mx-10'>

      <div className={`w-[80%] transition-all duration-[1s] ease-in-out bg-red-500 `} >
        <div className='flex justify-between'>
      <p>TECHNICAL STAFFS</p>
      <div 
        onClick={toggleExpand}
        className={`transition-transform  ${isExpanded?"rotate-180":''} duration-[1s] ease-in-out`}
      >
        <MdKeyboardArrowDown className='w-10 h-8' />
        
        </div>
      </div>
    
        <div className={`transition-all duration-400 ${isExpanded?"h-auto":"max-h-0 "}`}>
      <div>{year}</div>
        <div className={`flex flex-wrap w-full transition-all duration-[1s] ease-in-out ${isExpanded?'opacity-100':'opacity-0'}`}>

        {item.map((items,key)=>(
          <div key={key} className='bg-green-400' ref={itemsRef}>
            <h1>{items.name}</h1>
            <p>{items.postion}</p>
            </div>
        ))}
        </div>
        </div>

      </div>
      
    </div>


  );
}

const Accordion = ({ children }) => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  return (
    <div className="w-full">
      {React.Children.map(children, child =>
        React.cloneElement(child, { activeItem, toggleItem })
      )}
    </div>
  );
};

// Accordion Item Component
const AccordionItem = ({ children, value, activeItem, toggleItem }) => {
  return (
    <div className="mb-4 border-b border-gray-200">
      {React.Children.map(children, child =>
        React.cloneElement(child, { value, activeItem, toggleItem })
      )}
    </div>
  );
};

// Accordion Trigger Component
const AccordionTrigger = ({ children, value, activeItem, toggleItem }) => {
  return (
    <button
      className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none"
      onClick={() => toggleItem(value)}
    >
      {children}
    </button>
  );
};

// Accordion Content Component
const AccordionContent = ({ children, value, activeItem }) => {
  return (
    <div
      className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
        activeItem === value ? 'max-h-screen p-4' : 'max-h-0'
      }`}
    >
      {children}
    </div>
  );
};

// Accordion Demo Component
const AccordionDemo = () => {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};




function cardpeople() {

  const item1=[{
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:""
  },
  {
    name:"Swaraj K P",
    postion:"Associate Professor",
    link:"" 
  }
]

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <ExpandableCards year="2023-24" item={item1}/>
      {/* <AccordionDemo /> */}
    </div>
  )
}

export default cardpeople