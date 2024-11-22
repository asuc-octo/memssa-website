// import About from '../pages/About.page'
import Constitution from '../pages/Office/Constitution.page'
// import Team from '../pages/Office/Team.page'
import PastBills from '../pages/Office/PastBills.page'
import StudentResources from '../pages/Resources/StudentResources.page'
import RSOResources from '../pages/Resources/RSOResources.page'
import Calendar from '../pages/Calendar.page'
// import Community from '../pages/Community.page'

export interface NavBarItem {
    path: string
    label: string
    unavailable?: boolean
    active?: boolean
    new?: boolean
    subItems?: NavBarItem[]
    component?: () => JSX.Element
}

export const OFFICE_ITEMS: NavBarItem[] = [
    { path: '/office/constitution', label: 'Constitution', component: Constitution},
    // { path: , label: , component: },
    { path: '/office/pastbills', label: 'Past Bills', component: PastBills},
]

export const RESOURCE_ITEMS: NavBarItem[] = [
    // { path: , label: , component: },
    { path: '/resources/rso', label: 'RSO Resources', component: RSOResources},
    { path: '/resources/student', label: 'Student Resources', component: StudentResources},
]

export const NAV_BAR_ITEMS: NavBarItem[] = [
    // { path: /about, label: , component: },
    { path: '/office', label: 'Our Office', subItems: OFFICE_ITEMS},
    { path: '/resources', label: 'Resources', subItems: RESOURCE_ITEMS},
    { path: '/calendar', label: 'Calendar', component: Calendar},
    // { path: /community, label: , component: },
]