import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderWebDetail({ web }) {
    if (web != null)
        return (
            <div>
                <Card>
                    <CardImg src={web.image} alt={web.name} />
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

const RenderComments = ({ comments }) => {
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
        <>
            <h4> Comments </h4>
            <ul className="list-unstyled">
                {cmts}
            </ul>
        </>
    );
}

const WebDetails = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/webs">Webs</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.web.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.web.name}</h3>
                    <hr />
                </div>
            </div>

            <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderWebDetail web={props.web} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>

                </div>
            </div>
    );
}

export default WebDetails;