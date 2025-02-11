import { FileText, Search, ScrollText, UserCheck } from "lucide-react"
import { ProcessStep } from "./Step"

export default function RecruitmentProcess() {
  const steps = [
    { title: "Create Job Profile", icon: FileText },
    { title: "Search For Jobs", icon: Search },
    { title: "Apply for Jobs", icon: ScrollText },
    { title: "Get Hired", icon: UserCheck },
  ]

  return (
    <div className="w-full lg:w-full bg-[#99cc00] py-8 md:py-16px-4 md:w-[1030px] sm:w-[600px]   lg:h-[300px] sm:h-[600px] mt-10 ">
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
        <h2 className="text-1xl sm:text-3xl md:text-1xl font-bold text-white text-center mb-8 md:mb-14 font-sans">
          Recruitment process to get hired
        </h2>

        {/* Container for steps */}
        <div className="flex flex-col md:flex-row   items-center md:">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`
                w-[500px] md:w-1/4 
                flex justify-center 
                ${index !== steps.length - 1 ? " md:mb-0" : ""}
              `}
            >
              <ProcessStep number={index + 1} title={step.title} icon={step.icon} isLast={index === steps.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}




