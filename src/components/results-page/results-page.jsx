import React, { Component } from 'react';
import './results-page.scss';
import {bindActionCreators} from 'redux'
import {connect} from "react-redux";
import {clearSearchResponseAction, redirectToResultsPageAction} from "../../redux/actions";


class ResultsPage extends Component {
    componentWillUnmount() {
        this.props.redirectToResultsPage(false);
        // this.props.clearSearchResponse();
    }

    render() {
        if (!(this.props.listings && this.props.listings.length)) {
            return (
                <div>
                    results page
                    <br/><br/>
                    No data available for this request
                </div>
            )
        } else {
            return (
                <div>
                    results page
                    <br/><br/>
                    {this.props.listings.length} ({this.props.total_results})
                </div>
            );

        }
    }
}

function mapStateToProps(state) {
    return {
        listings: state.response.listings,
        total_results: state.response.total_results,
        page: state.response.page,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // clearSearchResponse: bindActionCreators(clearSearchResponseAction, dispatch),
        redirectToResultsPage: bindActionCreators(redirectToResultsPageAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
