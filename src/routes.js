import IndexReport from './views/IndexReport';
import ReportsByStates from './views/ReportsByStates';

export default [
    {
        path: '/',
        name: 'home',
        component: IndexReport,
    },
    {
        path: '/casos-por-estado',
        name: 'reports-by-states',
        component: ReportsByStates,
    },
];  