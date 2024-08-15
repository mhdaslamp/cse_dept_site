// app/activity/event/[product]/page.jsx
"use client";
import { useParams, useRouter } from "next/navigation";
import { upcomingEvents, pastEvents } from "../eventsData";
import { useEffect, useState } from "react";
import ColoredSection from "../../../../components/ColoredSection";

export default function EventDetails() {
  const router = useRouter();
  const { product } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (product) {
      const allEvents = [...upcomingEvents, ...pastEvents];
      const eventDetails = allEvents.find((e) => e.id === parseInt(product));
      setEvent(eventDetails);
    }
  }, [product]);

  if (!event) return <p>Loading...</p>;

  return (
    <ColoredSection color="BLACK">
      <div className="container min-h-screen bg-white mx-auto pb-14">
        <div className="w-full flex flex-col justify-center items-center pt-[200px]">
          <div className="w-full h-auto flex flex-row justify-center items-end">
            <span className="w-[10px] h-[10px] bg-black mr-3 mb-4"></span>
            <h1 className="uppercase text-[40px] w-auto h-auto font-bold">
              {event.title}
            </h1>
          </div>
          <p className="text-gray-500 text-sm mb-4 uppercase">
            {new Date(event.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="w-full h-full flex flex-row mt-8">
          <div className="w-[50%] h-full flex justify-center items-center">
            <img
              src={event.image || "https://via.placeholder.com/600x400"}
              alt={event.title}
              className="w-[50%] h-auto object-cover"
            />
          </div>
          <div className="w-[50%] h-full flex justify-center scrollbar-none">
            <p className="text-black text-lg ">{event.description}</p>
          </div>
        </div>
        <div className="w-full h-full p-3 mt-8 bg-[#696969] text-white  hover:border-red-500 hover:border-2 hover:bg-white hover:text-red-500 transition-all duration-300 flex justify-center items-center">
          <p className="uppercase text-lg font-semibold">register now</p>
        </div>
      </div>
    </ColoredSection>
  );
}

{
  /* <div className="bg-white shadow-lg rounded-lg max-w-3xl mx-auto">
  <div className="flex flex-col lg:flex-row">
    {/* Image Section */
}
// <div className="lg:w-1/2">
//   <img
//     src={event.image || "https://via.placeholder.com/600x400"}
//     alt={event.title}
//     className="w-full h-full object-cover rounded-l-lg"
//   />
// </div>
{
  /* Content Section */
}
//     <div className="lg:w-1/2 p-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h1>
//       <p className="text-gray-500 text-sm mb-4">
//         {new Date(event.date).toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         })}
//       </p>
//       <p className="text-gray-700 mb-6">{event.description}</p>
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         Event Details:
//       </h2>
//       <ul className="mb-6">
//         <li className="flex items-center mb-2">
//           <span className="text-red-500 mr-2">📅</span>
//           Date: {new Date(event.date).toLocaleDateString("en-US")}
//         </li>
//         <li className="flex items-center mb-2">
//           <span className="text-blue-500 mr-2">⏰</span>
//           Time: {new Date(event.date).toLocaleTimeString("en-US")}
//         </li>
//         <li className="flex items-center mb-2">
//           <span className="text-green-500 mr-2">📍</span>
//           Platform: {event.platform}
//         </li>
//       </ul>
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         What to Expect:
//       </h2>
//       <ul>
//         {event.topics.map((topic, index) => (
//           <li key={index} className="flex items-center mb-2">
//             {topic}
//           </li>
//         ))}
//       </ul>
//       <div className="mt-6">
//         <button
//           onClick={() => router.push("/register")}
//           className="inline-block bg-gray-700 text-white text-center py-2 px-4 rounded hover:bg-gray-800"
//         >
//           REGISTER NOW
//         </button>
//       </div>
//     </div>
//   </div>
// </div>; */}
