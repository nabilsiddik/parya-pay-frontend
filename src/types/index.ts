import type { LucideProps } from "lucide-react"
import type { ComponentType, ForwardRefExoticComponent, RefAttributes } from "react"

export type TRole = 'ADMIN' | 'USER' | 'AGENT'

// Type for sidebar item
export interface ISidebarItem {
  title: string,
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
  isActive: boolean,
  items: {
    title: string,
    url: string,
    component: ComponentType,
  }[]
}