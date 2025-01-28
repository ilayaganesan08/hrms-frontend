import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/dashboard'));

const ListFaq = lazy(() => import('../pages/setup/faq/listfaq'));
const AddAndEditFaq = lazy(() => import('../pages/setup/faq/addandeditfaq'));
const ViewFaq = lazy(() => import('../pages/setup/faq/viewfaq'));

const ListTestimonial = lazy(() => import('../pages/setup/testimonial/listtestimonial'));
const AddTestimonial = lazy(() => import('../pages/setup/testimonial/addandedittestimonial'));
const ViewTestimonial = lazy(() => import('../pages/setup/testimonial/viewtestimonial'));


const ListTax = lazy(() => import('../pages/sales/taxes/listtax'));
const AddTax = lazy(() => import('../pages/sales/taxes/addandedittax'));
const ViewTax = lazy(() => import('../pages/sales/taxes/viewtax'));



export const routesData = () => {
    const Routes = [
        {
            path: "/",
            pageTitle: "Dashboard",
            component: <Dashboard />
        },
        {
            path: "/list-faq",
            pageTitle: "List Faq",
            component: <ListFaq />
        },
        {
            path: "/add-faq",
            pageTitle: "Add Faq",
            component: <AddAndEditFaq />
        },
        {
            path: "/edit-faq/:id",
            pageTitle: "Edit Faq",
            component: <AddAndEditFaq />
        },
        {
            path: "/view-faq/:id",
            pageTitle: "View Faq",
            component: <ViewFaq />
        },

        // Testimonial
        {
            path: "/list-testimonial",
            pageTitle: "List Testimonial",
            component: <ListTestimonial />
        },
        {
            path: "/add-testimonial",
            pageTitle: "Add Testimonial",
            component: <AddTestimonial />
        },
        {
            path: "/edit-testimonial/:id",
            pageTitle: "Edit Testimonial",
            component: <AddTestimonial />
        },
        {
            path: "/view-testimonial/:id",
            pageTitle: "View Testimonial",
            component: <ViewTestimonial />
        },

        //tax

        {
            path: "/list-tax",
            pageTitle: "List Tax",
            component: <ListTax />
        },
        {
            path: "/add-tax",
            pageTitle: "Add Tax",
            component: <AddTax />
        },
        {
            path: "/edit-tax/:id",
            pageTitle: "Edit Tax",
            component: <AddTax />
        },
        {
            path: "/view-tax/:id",
            pageTitle: "View Tax",
            component: <ViewTax/>
        },
        

    ];

    return Routes;
}
