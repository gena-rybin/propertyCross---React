import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { HttpFetch } from '../../services/http';
import { routes } from "../../services/routes";

// import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import {Logo} from "../header/logo";

class HeaderBlock extends Component {
    constructor() {
        super();
        this.state = {
            imgSource: '',
        };
    }

    componentWillMount() {
        HttpFetch.getByPlaceName('')
            .then(res => {
                console.log('response',res.response);
                this.setState({
                    imgSource: (res.response && res.response.attribution.img_url) ? res.response.attribution.img_url : ''
                });
            });
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Logo imageSrc={this.state.imgSource}/>
                    <Link to={routes.root}  className="App-header">
                            Property Cross {(this.props.searchFieldData) ? '- '+this.props.searchFieldData : ''}
                    </Link>
                    <p>
                    <a className="App-link"
                       href="https://github.com/tastejs/PropertyCross/tree/master/specification"
                       target="_blank"
                       rel="noopener noreferrer">
                        specification
                    </a>
                        {/*<span style={{width:'20px'}}>cs</span>*/}
                    <a className="App-link"
                       href="https://www.nestoria.co.uk/help/api-search-listings"
                       target="_blank"
                       rel="noopener noreferrer">
                        api
                    </a></p>
                </header>
            </div>
        );
    }
}

// export default HeaderBlock;
function mapStateToProps(state) {
    return {
        searchFieldData: state.search
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         searchFieldData: bindActionCreators(setSearchFieldAction, dispatch)
//     }
// }

export default connect(mapStateToProps, null)(HeaderBlock);
