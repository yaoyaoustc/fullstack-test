import React from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Webs extends React.Component {

    render() {
        const webslist = this.props.webs.map((web) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={web.id} onClick={() => this.props.onClick(web.id)}>
                        <CardImg width="100%" src = {web.image} alt = {web.name} />
                        <CardImgOverlay>
                            <CardTitle>{web.name}</CardTitle>
                        </CardImgOverlay>                    
                    </Card>
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
}

export default Webs;