import React ,{useState} from 'react'
import Header from '../Header';
import Drawer from '../Drawer/index'


function NavigationHelper() {
    
    const [showDrawer,setShowDrawer] = useState(false);

    const openDrawer = ()=>{
        setShowDrawer(true);
    }

    const closeDrawer = ()=>{
        setShowDrawer(false);
    }

    return (
        <div>
            <Header opened = {openDrawer}></Header>
            <Drawer open = {showDrawer} closed = {closeDrawer}></Drawer>
        </div>
    )
}

export default NavigationHelper
