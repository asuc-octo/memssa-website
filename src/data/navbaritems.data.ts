// import About from '../pages/About.page'
import Constitution from '../pages/Office/Constitution.page'
import Team from '../pages/Office/Team.page'
import Senators from '../pages/Office/Senators.page'
import Bills from '../pages/Office/Bills.page'
import StudentResources from '../pages/Resources/StudentResources.page'
import RSOResources from '../pages/Resources/RSOResources.page'
import Calendar from '../pages/Calendar.page'
import Community from '../pages/Community.page'
import Newsletter from '../pages/Newsletter.page'

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
    { path: '/office/team', label: 'Team', component: Team},
    { path: '/office/bills', label: 'Bills', component: Bills},
    { path: '/office/senators', label: 'Senators', component: Senators},
]

export const RESOURCE_ITEMS: NavBarItem[] = [
    { path: '/resources/student', label: 'Student Resources', component: StudentResources},
    { path: '/resources/rso', label: 'RSO Resources', component: RSOResources}
]

export const NAV_BAR_ITEMS: NavBarItem[] = [
    // { path: /about, label: 'About', component: About},
    { path: '/office', label: 'Our Office', subItems: OFFICE_ITEMS},
    { path: '/resources', label: 'Resources', subItems: RESOURCE_ITEMS},
    { path: '/calendar', label: 'Calendar', component: Calendar},
    { path: '/community', label: 'Community', component: Community},
    { path: '/newsletter', label: 'Newsletter', component: Newsletter},
]