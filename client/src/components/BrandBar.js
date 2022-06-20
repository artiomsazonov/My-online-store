import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import  Card  from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer' , width:"10%"}}
                    key={brand.id}
                    className="p-3 m-1"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;