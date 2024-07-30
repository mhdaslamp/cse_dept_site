import React from "react";
import ColoredSection from "./ColoredSection";

const AcadamicsIntro = () => {
  return (
    <ColoredSection
      color="BLACK"
      className="bg-white w-full px-6 py-32 md:px-20 xl:px-24 sm:px-10"
    >
      <div className="">
        <div className="px-20 py-24">
          <h1 className=" text-black text-5.5xl lg:text-5xl font-normal font-bebasneue leading-tight">
            . Program education objectives - peos
          </h1>
          <h2 className="py-4 font-sans text-[32px]/[50px] font-normal leading-10 text-left">
            Within a short span of time after graduation, the graduates shall
          </h2>
          <div className="px-4">
            <ul className="px-4 list-disc font-normal text-gray-500 font-montserrat text-[24px]/[40px] leading-10 ">
              <li>
                PEO1. Apply good analytic, design, and implementation skills
                required to formulate and solve computer science problems.
              </li>
              <li>
                PEO2. Be employed as computer science professionals beyond
                entry-level positions.
              </li>
              <li>
                PEO3. Be able to route their talents in to post graduate and
                research programs, promoting remarkable advancements in emerging
                areas.
              </li>
              <li>
                PEO4. Demonstrate that they can function, communicate,
                collaborate and continue to learn effectively as ethically and
                socially responsible computer science professionals.
              </li>
            </ul>
          </div>
        </div>

        <div className="px-20 py-24">
          <h1 className="flex justify-end mb-4 text-black text-5.5xl lg:text-5xl font-normal font-bebasneue lead">
            . Program specific outcomes - pSos
          </h1>
          <div className="px-4">
            <ul className="px-4 list-disc font-normal text-gray-500 font-montserrat text-[24px]/[40px] leading-10 ">
              <li>
                PSO1: Problem Solving Skills: Ability to design and develop
                computer programs and computer based systems of moderate
                complexity in the areas pertaining to system software,
                multimedia, database, networking, artificial intelligence, web-
                design and information security.
              </li>
              <li>
                PSO2: Professional Skills: Ability to apply standard practices
                and methods in software project management and software
                development using suitable programming environments to deliver
                quality product for the industry..
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-20 py-24">
        <h1 className=" text-black text-5.5xl lg:text-5xl font-normal font-bebasneue leading-tight">
          . Program outcomes - pos
        </h1>
        <h2 className="py-4 font-sans text-[32px]/[50px] font-normal leading-10 text-left">
          Engineering Graduates will be able to:{" "}
        </h2>
        <div className="px-4">
          <ul className="px-4 list-disc font-normal text-gray-500 font-montserrat text-[24px]/[40px] leading-10 ">
            <li>
              PO 1. Engineering knowledge: Apply the knowledge of mathematics,
              science, engineering fundamentals, and an engineering
              specialization to the solution of complex engineering problems.
            </li>
            <li>
              PO 2. Problem analysis: Identify, formulate, review research
              literature, and analyze complex engineering problems reaching
              substantiated conclusions using first principles of mathematics,
              natural sciences, and engineering sciences.
            </li>
            <li>
              PO 3. Design/development of solutions: Design solutions for
              complex engineering problems and design system components or
              processes that meet the specified needs with appropriate
              consideration for the public health and safety, and the cultural,
              societal, and environmental considerations.
            </li>
            <li>
              PO 4. Conduct investigations of complex problems: Use
              research-based knowledge and research methods including design of
              experiments, analysis and interpretation of data, and synthesis of
              the information to provide valid conclusions.
            </li>
            <li>
              PO 5. Modern tool usage: Create, select, and apply appropriate
              techniques, resources, and modern engineering and IT tools
              including prediction and modeling to complex engineering
              activities with an understanding of the limitations.
            </li>
            <li>
              PO 6. The engineer and society: Apply reasoning informed by the
              contextual knowledge to assess societal, health, safety, legal and
              cultural issues and the consequent responsibilities relevant to
              the professional engineering practice.
            </li>
            <li>
              PO 7. Environment and sustainability: Understand the impact of the
              professional engineering solutions in societal and environmental
              contexts, and demonstrate the knowledge of, and need for
              sustainable development.
            </li>
            <li>
              PO 8. Ethics: Apply ethical principles and commit to professional
              ethics and responsibilities and norms of the engineering practice.
            </li>
            <li>
              PO 9. Individual and team work: Function effectively as an
              individual, and as a member or leader in diverse teams, and in
              multidisciplinary settings.
            </li>
            <li>
              PO 10. Communication: Communicate effectively on complex
              engineering activities with the engineering community and with
              society at large, such as, being able to comprehend and write
              effective reports and design documentation, make effective
              presentations, and give and receive clear instructions.
            </li>
            <li>
              PO 11. Project management and finance: Demonstrate knowledge and
              understanding of the engineering and management principles and
              apply these to one’s own work, as a member and leader in a team,
              to manage projects and in multidisciplinary environments.
            </li>
            <li>
              PO 12. Life-long learning: Recognize the need for, and have the
              preparation and ability to engage in independent and life-long
              learning in the broadest context of technological change.
            </li>
          </ul>
        </div>
      </div>
    </ColoredSection>
  );
};

export default AcadamicsIntro;
