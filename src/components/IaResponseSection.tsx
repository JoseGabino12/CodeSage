import type { IaResponseSectionProps } from '../types/interfaces'

export const IaResponseSection = ({section, title, clasName}: IaResponseSectionProps) => {
  return(
    <div>
      <strong className='text-2xl'>{title}</strong>
      <div className={`${clasName} flex flex-col gap-2 bg-[#102F4C] text-white p-10 rounded-lg mt-5`}>
        <ol className='flex flex-col gap-5 list-disc'>
          {section.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}