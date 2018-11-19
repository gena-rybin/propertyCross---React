import React from 'react';
import './searches.scss';
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
// import {deleteSearchFromHistoryAction, fetchSearchByPlaceNameAction, setSearchFieldAction} from "../../redux/actions";


export const SearchItem = (props) => {
    console.log(props);
    console.log(props.search);

    const handleDeleteBtn = () => {
        console.log('delete', props.search);
        props.handleDeleteBtn(props.search);
    };

    const setSearchFieldBtn = () => {
        console.log('new SearchField',props.search);
        // this.props.setSearchField(props.search.search);
        // this.props.fetchSearchByPlaceName();
    };

    // render() {
    // if (!(props.search && props.search.search)) {
    //     return (
    //         <div></div>
    //     )
    // } else {
        return (
            <div className="increase-btn__item" onClick={setSearchFieldBtn}>
                <span className="item-index"><span className="hide-on-mobile">Search</span> #{props.ind+1}</span>
                <span className="placeName">{props.search}</span>
                {/*<span className="placeName align_right">({props.search.results})</span>*/}
                <span className="delete-btn" onClick={handleDeleteBtn}>x</span>
            </div>
        );
    // }
    // }
};

// function mapStateToProps(state) {
//     return {
//         searches: state.searches
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         deleteSearchFromHistory: bindActionCreators(deleteSearchFromHistoryAction, dispatch),
//         setSearchField: bindActionCreators(setSearchFieldAction, dispatch),
//         fetchSearchByPlaceName: bindActionCreators(fetchSearchByPlaceNameAction, dispatch),
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);
