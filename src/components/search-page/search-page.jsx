import React, { Component } from 'react';
import './search-page.scss';
import {bindActionCreators} from 'redux'
import {fetchSearchByPlaceNameAction, setSearchFieldAction} from "../../redux/actions";
import {connect} from "react-redux";
import SearchesComponent from "./searches";
import {Redirect} from "react-router-dom";
import {routes} from "../../services/routes";



class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            imgSource: '',
            searchValue: ''
        };
    }


    handleInput = () => e => {
        this.props.setSearchFieldData(e.target.value);
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log('submit');
        // this.props.handleParentSubmit();
        this.props.fetchSearchByPlaceName();
    };

    render() {
        // if (this.props.redirectToResultsPage) {
        //     return (
        //         <Redirect to={routes.results} />
        //     )
        // }
        if (this.props.response && this.props.response.listings && this.props.response.listings.length) {
            return (
                <Redirect to={routes.results} />
            )
        }

        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                        <div className="form-trade__group">
                            <label htmlFor="trade-price" className="form-trade__label">Search field</label>
                            <div className="form-trade__field">
                                <input type="text" name='searchValue'
                                       className="form-trade__input"
                                       onChange={this.handleInput()}/>
                            </div>
                        </div>
                </form>
                <SearchesComponent></SearchesComponent>
            </div>
        );
    }
}

function mapStateToProps(state) {

    // console.log('state',state);
    return {
        response: state.response,
        redirectToResultsPage: state.redirectToResultsPage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSearchFieldData: bindActionCreators(setSearchFieldAction, dispatch),
        fetchSearchByPlaceName: bindActionCreators(fetchSearchByPlaceNameAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
