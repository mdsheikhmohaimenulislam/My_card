import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {


    const navegation = useNavigation();
const isNavegating = Boolean(navegation.location)



    return (
        <div>
            <Header></Header>
           <div className='flex justify-center items-center gap-10'>
              <Sidebar></Sidebar>       
              {isNavegating && <span className='bg-red-900 text-8xl'>Loadingakfjoiajeijjidejfka.....</span>}
              <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;