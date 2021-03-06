import React, { Component } from 'react';
import './result-page.scss';
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import {
    fetchSearchByPlaceNameAction,
    redirectToResultsPageAction
} from "../../redux/actions";
import ResultItem from "./result-item";
import {Pagination} from "./pagination";


class ResultPage extends Component {
    componentWillUnmount() {
        this.props.redirectToResultsPage(false);
        // this.props.clearSearchResponse();
    }

    changePage = (newPage) => {
        console.log('go to ',newPage);
        this.props.fetchSearchByPlaceName(newPage);
    };

    viewListingDetails = (url) => {
        console.log(url);
        window.open(url, '_blank');
        // lister_url
    };

    render() {
        if (!(this.props.listings && this.props.listings.length)) {
            return (
                <div className="centered">
                    results page
                    <br/><br/>
                    No data available for this request
                </div>
            )
        } else {
            return (
                <div className="wrapper centered">
                    results page
                    <br/><br/>

                    {this.props.listings.length} ({this.props.total_results})
                    <br/>
                    <div className="content increase-btn">
                        {this.props.listings.map((listing, index) => {
                            return (
                                <ResultItem data={listing}
                                            index={index}
                                            activePage={this.props.activePage}
                                            onViewListingDetails={this.viewListingDetails}
                                            key={index}></ResultItem>
                            )
                        })}

                    </div>
                    <div className="footer">
                        <hr/>
                        <Pagination
                            activePage={this.props.activePage}
                            totalPages={this.props.totalPages}
                            onChangePage={this.changePage}
                        ></Pagination>
                    </div>

                </div>
            );

        }
    }
}

function mapStateToProps(state) {
    console.log('state favourites ' + state.favouritesReducer.length,state.favouritesReducer);
    return {
        listings: state.response.listings,
        total_results: state.response.total_results,
        activePage: state.response.page,
        totalPages: state.response.total_pages,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        redirectToResultsPage: bindActionCreators(redirectToResultsPageAction, dispatch),
        fetchSearchByPlaceName: bindActionCreators(fetchSearchByPlaceNameAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
