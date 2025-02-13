import type { LucideIcon } from "lucide-react"

interface ProcessStepProps {
  number: number
  title: string
  icon: LucideIcon
  isLast?: boolean
}

export function ProcessStep({ number, title, icon: Icon, isLast }: ProcessStepProps) {
  return (
    <div className="flex flex-col items-center relative">
      
      <div className="relative">
        <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-[#1a4d1a] text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-xs md:text-sm">
          {number}
        </div>
        <div className="bg-blue-600 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#1a4d1a]" />
        </div>
        {!isLast && (
          <>
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[calc(100%+2rem)] w-[calc(100%-5rem)] h-px border-t-2 border-dashed border-white/60" />
            {/* Vertical line for mobile */}
            <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-1/2 h-8 w-px border-l-2 border-dashed border-white/60" />
          </>
        )}
      </div>
      <h3 className="mt-3 md:mt-4 text-sm md:text-base text-white text-center font-medium px-2">{title}</h3>
    </div>
  )
}


