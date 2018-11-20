import React, {Fragment} from 'react';
import './searches.scss';

export class SearchItem extends React.Component {
    handleDeleteBtn = () => {
        // console.log('delete', this.props.search);
        this.props.onHandleDeleteBtn(this.props.search);
    };

    setSearchFieldBtn = () => {
        // console.log('new SearchField',this.props.search);
        this.props.onSetSearchFieldBtn(this.props.search);
    };

    render() {
        return (
                <div className="increase-btn__item">
                    <div onClick={this.setSearchFieldBtn}>
                        <span className="item-index"><span className="hide-on-mobile">Search</span> #{this.props.index+1}</span>
                        <span className="placeName">{this.props.search.search}</span>
                        <span className="placeName align_right">({this.props.search.results})</span>
                    </div>
                    <div>
                        <span className="delete-btn" onClick={this.handleDeleteBtn}>x</span>
                    </div>
                </div>
        );
    }
};
