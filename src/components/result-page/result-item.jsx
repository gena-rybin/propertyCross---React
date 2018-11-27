import React from 'react';
import './result-item.scss';
import {bindActionCreators} from "redux";
import {addToFavouritesAction} from "../../redux/actions";
import connect from "react-redux/es/connect/connect";

class ResultItem extends React.Component {
    viewListingDetails = () => {
        this.props.onViewListingDetails(this.props.data.lister_url);
    };

    addToFavourites = () => {
        console.log('addToFavourites',this.props.data);
        this.props.addToFavourites(this.props.data);
    };

    checkFavourites = () => {
        let isInside=false;
        const favourites = this.props.favourites;
        if (favourites && favourites.length) {
            for (let i=0; i<favourites.length; i++) {
                if (favourites[i].thumb_url===this.props.data.thumb_url) {
                    isInside = true;
                }
            }
        }
        return isInside;
    };

    render() {
        const tens = (this.props.activePage > 1) ? 10*(+this.props.activePage) : 0;
        const isInFavs = this.checkFavourites();

        return (
            <div className="listing">
                <div className="listing-item">
                    <div className="listing-options">
                        <div className="favs-wrapper">
                            {!isInFavs && <span onClick={this.addToFavourites}>add to fav</span>}
                            {isInFavs && <span>rem from fav</span>}
                        </div>
                        <span className="listing-index" onClick={this.viewListingDetails}>#{this.props.index+1+tens}</span>
                        {/*<span className="listing-img hide-on-mobile">*/}
                            <img className="listing-img hide-on-mobile" src={this.props.data.img_url} alt="listing" />
                        {/*</span>*/}
                    </div>
                    <div className="listing-text" onClick={this.viewListingDetails}>
                        <p>
                            <span>{this.props.data.listing_type.toString().toUpperCase()}</span>
                             {this.props.data.property_type}
                             <span className="right red">{this.props.data.price_formatted}</span>
                            <br/>
                        </p>
                        <div></div>
                        <p>{this.props.data.keywords}</p>
                    </div>
                    {/*<span className="placeName">{this.props.data}</span>*/}
                    {/*<span className="placeName align_right">({this.props.search.results})</span>*/}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log('state favourites',state.favouritesReducer);
    return {
        favourites: state.favouritesReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToFavourites: bindActionCreators(addToFavouritesAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultItem);
