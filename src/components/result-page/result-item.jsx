import React from 'react';
import './result-item.scss';

export class ResultItem extends React.Component {
    handleDeleteBtn = () => {
        // console.log('delete', this.props.search);
        this.props.onHandleDeleteBtn(this.props.search);
    };


    setSearchFieldBtn = () => {
        // console.log('new SearchField',this.props.search);
        this.props.onSetSearchFieldBtn(this.props.search);
    };

    viewListingDetails = () => {
        // console.log('new SearchField',this.props.search);
        this.props.onViewListingDetails(this.props.data.lister_url);
    };

    render() {
        console.log(this.props);
        const tens = (this.props.activePage > 1) ? 10*(+this.props.activePage) : 0;

        return (
            <div className="listing" onClick={this.viewListingDetails}>
                <div className="listing-item">
                    <div className="listing-options">
                        <div className="favs-wrapper">
                            {false && <span>add to fav</span>}
                            {false && <span>fav</span>}
                            {true && <span>rem from fav</span>}
                        </div>
                        <span className="listing-index">#{this.props.index+1+tens}</span>
                        {/*<span className="listing-img hide-on-mobile">*/}
                            <img className="listing-img hide-on-mobile" src={this.props.data.img_url} alt="listing" />
                        {/*</span>*/}
                    </div>
                    <div className="listing-text">
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
};
