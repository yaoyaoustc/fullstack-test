import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class WebDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    renderWebDetail(web) {
        if (web != null)
            return (
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={web.image} alt={web.name} />
                    <CardBody>
                        <CardTitle>{web.name}</CardTitle>
                        <CardText>{web.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments == null)
            return (
                <div></div>
            )
        const cmts = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{comment.author}, &nbsp;</p>
                </li>
            );
        })
        return (
            <div className="col-12 col-md-5 m-1">
                <h4> Comments </h4>
                <ul className="list-unstyled">
                    {cmts}
                </ul>
            </div>
        );
    }
    render() {
        const selectedWeb = this.props.selectedWeb;
        if (selectedWeb == null) {
            return (
                <div></div>
            );
        }
        const webItem = this.renderWebDetail(selectedWeb);
        const commentItem = this.renderComments(selectedWeb.comments);

        return (
            <div className="container">
            <div className="row">
                    {webItem}
                    {commentItem}
            </div>
            </div>
        );
    }
}

export default WebDetails;