import React, {Fragment} from 'react';
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

    render() {
        console.log(this.props);
        return (
            <div className="increase-btn__item">
                <div>
                    <span className="item-index"><span className="hide-on-mobile">Search</span> #{this.props.index+1}</span>
                    {/*<span className="placeName">{this.props.data}</span>*/}
                    {/*<span className="placeName align_right">({this.props.search.results})</span>*/}
                </div>
            </div>
        );
    }
};
