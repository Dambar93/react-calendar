import React from "react";
import Calendar from "./calendar/Calendar";
import FilterSort from "./calendar/FilterSort";


const Layout = () => {
    return (
        <div >

            <FilterSort/>  {/* dar nedadarytas */}
            <Calendar/>

        </div>
    )
}

export default Layout;