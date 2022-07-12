import React from "react";
import Calendar from "./calendar/Calendar";
import FilterSort from "./calendar/FilterSort";


const Layout = () => {
    return (
        <div >

            <FilterSort/>
            <Calendar/>

        </div>
    )
}

export default Layout;