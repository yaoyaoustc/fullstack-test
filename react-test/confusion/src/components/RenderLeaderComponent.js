import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderLeader = ({ leaders }) => {
    const leaderlist = leaders.map((leader) => {
        return (
            <div key={leader.id} className="col-12 m-2">
                <Media tag="li">
                    <Media left middle>
                        <Media object src={leader.image} alt={leader.name} />
                    </Media>
                    <Media body className="ml-12 m-3">
                        <Media heading>{leader.name}</Media>
                        <Media>{leader.designation}</Media>
                        <Media>{leader.description}</Media>
                    </Media>
                </Media>
            </div>
        );

    });
    return (
        <div className="row">
            {leaderlist}
        </div>
    );
}
export default RenderLeader;