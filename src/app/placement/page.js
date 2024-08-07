import React from 'react'
import PlacementIntro from "@/components/PlacementIntro"
import PlacementRecruiters from '@/components/PlacementRecruiters'
import PlacmentStatus from '@/components/PlacmentStatus'
import PlacementGraph from '@/components/PlacementGraph'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
        <PlacementIntro/>
        <PlacementRecruiters/>
        <PlacmentStatus/>
        <PlacementGraph/>
        <Footer />
    </>
  )
}

export default page