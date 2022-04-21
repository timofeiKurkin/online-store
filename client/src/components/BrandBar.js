import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {device.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    border={brand.id === device.selectedBrand.id ? 'black-grey' : 'light'}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                    className='p-3'
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;