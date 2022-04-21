import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {/*<Route path={BASKET_ROUTE} element={<Basket/>}/>*/}
            {user.IsAuth && authRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element}/>
            )}
            {publicRoutes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element}/>
            )}
        </Routes>
    );
};

export default AppRouter;