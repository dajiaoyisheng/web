import Vue from 'vue'
import Router from 'vue-router'
import workbench from '@/components/pages/workbench/workbench.vue'
import tvmonitor from '@/components/pages/prewarning/tvmonitor/tvmonitor.vue'
import personnelposition from '@/components/pages/prewarning/personnelposition/personnelposition.vue'
import pointname from '@/components/pages/prewarning/pointname/pointname.vue'
import posunusual from '@/components/pages/prewarning/posunusual/posunusual.vue'
import violation from '@/components/pages/prewarning/violation/violation.vue'
import querystats from '@/components/pages/querystats/querystats.vue'
import systemset from '@/components/pages/systemset/systemset.vue'
import systemmanagement from '@/components/pages/systemmanagement/systemmanagement.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/workbench',
            name: 'workbench',
            component: workbench
        },
        {
            path: '/prewarning/tvmonitor',
            name: 'tvmonitor',
            component: tvmonitor
        },
        {
            path: '/prewarning/personnelposition',
            name: 'personnelposition',
            component: personnelposition
        },
        {
            path: '/prewarning/pointname',
            name: 'pointname',
            component: pointname
        },
        {
            path: '/prewarning/posunusual',
            name: 'posunusual',
            component: posunusual
        },
        {
            path: '/prewarning/violation',
            name: 'violation',
            component: violation
        },
        {
            path: '/querystats',
            name: 'querystats',
            component: querystats
        },
        {
            path: '/systemset',
            name: 'systemset',
            component: systemset
        },
        {
            path: '/systemmanagement',
            name: 'systemmanagement',
            component: systemmanagement
        },
        {
            path: '/',
            redirect: '/workbench'
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.path === '/workbench') {
        next()
    } else if (to.path === '/prewarning/tvmonitor') {
        next()
    } else if (to.path === '/prewarning/personnelposition') {
        next()
    } else if (to.path === '/prewarning/pointname') {
        next()
    } else if (to.path === '/prewarning/posunusual') {
        next()
    } else if (to.path === '/prewarning/violation') {
        next()
    } else if (to.path === '/querystats') {
        next()
    } else if (to.path === '/systemset') {
        next()
    } else if (to.path === '/systemmanagement') {
        next()
    } else if (localStorage.getItem('token')) {
        next()
    } else {
        next({ path: '/workbench' })
    }
})
export default router