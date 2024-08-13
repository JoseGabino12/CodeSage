export interface CodeReviewContextValue {
  // state
  code: string

  // methods
  setCode?: (code: string) => void
}

export interface CodeReviewProviderProps {
  children: React.ReactNode
}

export interface IaResponseSectionProps {
  section: string[]
  title: string
  clasName?: string
}