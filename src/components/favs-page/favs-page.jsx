import React, { Component } from 'react';
import {connect} from "react-redux";


class FavsPage extends Component {

    // changePage = (newPage) => {
    //     console.log('go to ',newPage);
    //     this.props.fetchSearchByPlaceName(newPage);
    // };
    //
    // viewListingDetails = (url) => {
    //     console.log(url);
    //     window.open(url, '_blank');
    //     // lister_url
    // };

    render() {
        if (!(this.props.favs && this.props.favs.length)) {
            return (
                <div className="centered">
                    favourites page
                    <br/><br/>
                    No data available for this request
                </div>
            )
        } else {
            return (
                <div className="wrapper centered">
                    favourites page
                    <br/><br/>

                    {this.props.listings.length} ({this.props.total_results})
                    <br/>
                    <div className="content increase-btn">
                        {/*{this.props.listings.map((listing, index) => {*/}
                            {/*return (*/}
                                {/*<ResultItem data={listing}*/}
                                            {/*index={index}*/}
                                            {/*activePage={this.props.activePage}*/}
                                            {/*onViewListingDetails={this.viewListingDetails}*/}
                                            {/*key={index}></ResultItem>*/}
                            {/*)*/}
                        {/*})}*/}

                    </div>
                </div>
            );

        }
    }
}

function mapStateToProps(state) {
    return {
        // favs: state.response.listings,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // redirectToResultsPage: bindActionCreators(redirectToResultsPageAction, dispatch),
        // fetchSearchByPlaceName: bindActionCreators(fetchSearchByPlaceNameAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavsPage);
