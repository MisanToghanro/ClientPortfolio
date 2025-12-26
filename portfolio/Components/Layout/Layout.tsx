import Header from "./Header";
import Footer from "./Footer";

import React, { Children, ReactNode } from "react";

interface layoutProps {
    children: ReactNode
}
const Layout: React.FC<layoutProps> = ({children}) => {


    return(
<>
<Header/>
<main className="min-h-screen flex flex-col">{children}</main>
<Footer/>
</>
    )
}

export default Layout;