import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderWebs({ web, onClick }) {
    return (
        <Card key={web.id} onClick={() => onClick(web.id)}>
            <CardImg width="100%" src={web.image} alt={web.name} />
            <CardImgOverlay>
                <CardTitle>{web.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );

}
const Webs = (props) => {
    const webslist = props.webs.map((web) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderWebs web = {web} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {webslist}
            </div>
        </div>

    );
}
export default Webs