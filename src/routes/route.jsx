
import Home from "../pages/Home";
import Errorpage from "../pages/Errorpage";
import MainLayout from "../layout/MainLayout";
import WhatYouOffer from "../pages/WhatYouOffer";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Errorpage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'what-we-offer',
                element: <WhatYouOffer />
            },
        ]
    }
]);

export default router;