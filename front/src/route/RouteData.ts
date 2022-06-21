
import RoutePath from './RoutePath';
import { SignIn } from '@/pages/User';
import ClubList from '@/pages/ClubList/ClubList';



// array, object
export const ROUTES = {
    SIGN_IN: {
        path: RoutePath.SIGN_IN,
        link: RoutePath.SIGN_IN,
        component: SignIn
    },
    SIGN_UP: {
        path: RoutePath.SIGN_UP,
        link: RoutePath.SIGN_UP,
        component: SignIn
    },
    CLUB_LIST: {
        path: RoutePath.CLUB_LIST,
        link: RoutePath.CLUB_LIST,
        component: ClubList
    }
}


export const ROUTES_ARR: any[] = []
for(const key in ROUTES) {
    ROUTES_ARR.push(ROUTES[key as keyof typeof ROUTES])
}

