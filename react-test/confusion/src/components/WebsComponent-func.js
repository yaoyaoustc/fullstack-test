import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderWebs({ web }) {
    return (
        <Card>
            <Link to={`/webs/${web.id}`} >
                <CardImg width="100%" src={web.image} alt={web.name} />
                <CardImgOverlay>
                    <CardTitle>{web.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );

}
const Webs = (props) => {
    const webslist = props.webs.map((web) => {
        return (
            <div key={web.id} className="col-12 col-md-5 m-1">
                <RenderWebs web={web} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Webs
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Webs</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {webslist}
            </div>
        </div>

    );
}
export default Webs