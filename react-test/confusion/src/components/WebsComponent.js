import React from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Webs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWeb: null
        };
    }

    onWebSelect(web) {
        this.setState({ selectedWeb: web});
    }

    renderWeb(web) {
        if (web != null)
            return(
                <Card>
                    <CardImg top src={web.image} alt = {web.name}/>
                    <CardBody>
                        <CardTitle>{web.name}</CardTitle>
                        <CardText>{web.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const webslist = this.props.webs.map((web) => {
            return (
                <div className="col-12 col-md m-1">
                    <Card key={web.id} onClick={() => this.onWebSelect(web)}>
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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderWeb(this.state.selectedWeb)}
                    </div>
                </div>
            </div>

        ); 
    }
}

export default Webs;