import React, { Component } from 'react';
import './searches.scss';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {deleteSearchFromHistoryAction, fetchSearchByPlaceNameAction, setSearchFieldAction} from "../../redux/actions";


class Searches extends Component {

    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log('submit');
    //     // this.props.handleParentSubmit();
    //     this.props.fetchSearchByPlaceName();
    // };

    handleDeleteBtn = (item) => () => {
        console.log(item);
        this.props.deleteSearchFromHistory(item.search);
    };

    setSearchFieldBtn = (searchObject) => () => {
        console.log('new SearchField',searchObject);
        this.props.setSearchField(searchObject.search);
        this.props.fetchSearchByPlaceName();
    };

    render() {
        // const handleDeleteBtn = (item) => {
        //     console.log(item);
        //     this.props.deleteSearchFromHistory(item.search);
        // };

        if (!(this.props.searches && this.props.searches.length)) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="centered">
                    <div  className="increase-btn">
                        {this.props.searches.map((search, index) => (
                            <div className="increase-btn__item" key={search.search + index}
                                 onClick={this.setSearchFieldBtn(search)}>
                                <span className="item-index"><span className="hide-on-mobile">Search</span> #{index+1}</span>
                                <span className="placeName">{search.search}</span>
                                <span className="placeName align_right">({search.results})</span>
                                <span className="delete-btn" onClick={this.handleDeleteBtn(search)}>x</span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        searches: state.searches
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteSearchFromHistory: bindActionCreators(deleteSearchFromHistoryAction, dispatch),
        setSearchField: bindActionCreators(setSearchFieldAction, dispatch),
        fetchSearchByPlaceName: bindActionCreators(fetchSearchByPlaceNameAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searches);
