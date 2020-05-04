import React from 'react';
import { Media } from 'reactstrap';

class Webs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            webs: [
                {
                    id:0,
                    name: 'Google',
                    image: 'assets/google-logo.png',
                    category: 'search',
                    description: 'Most common search engine'
                },
                {
                    id:1,
                    name: 'Wikipedia',
                    image: 'assets/Wikipedia-logo.png',
                    category: 'knowledge',
                    description: 'Widely used knowledge database'
                }
            ], 
        };
    }

    render() {
        const webslist = this.state.webs.map((web) => {
            return (
                <div key={web.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                             <Media object src={web.image} alt={web.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{web.name}</Media>
                            <p>{web.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {webslist}
                    </Media>

                </div>
            </div>

        ); 
    }
}

export default Webs;