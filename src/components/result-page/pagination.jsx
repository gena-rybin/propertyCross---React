import React, {Fragment} from 'react';
import './pagination.scss';

export class Pagination extends React.Component {
    firstPageClicked = () => {
        const page = 1;
        this.props.onChangePage(page);
    };

    prevDottedClicked = () => {
        const page = +this.props.activePage - 3;
        this.props.onChangePage(page);
    };

    prevClicked = () => {
        const page = +this.props.activePage - 1;
        this.props.onChangePage(page);
    };

    nextPageClicked = () => {
        const page = +this.props.activePage + 1;
        this.props.onChangePage(page);
    };

    nextDottedClicked = () => {
        const page = +this.props.activePage + 2;
        this.props.onChangePage(page);
    };

    lastPageClicked = () => {
        const page = +this.props.totalPages;
        this.props.onChangePage(page);
    };

    render() {
        const isFirstPage = +this.props.activePage>2;
        const isPrevDotted = +this.props.activePage>3;
        const isPrevPage = +this.props.activePage>1;
        const isNextPage = (+this.props.activePage + 1) <= +this.props.totalPages;
        const isNextDotted = +this.props.totalPages>2 && +this.props.activePage+1<+this.props.totalPages;
        const isLastPage = +this.props.totalPages > 2;
        console.log(this.props);
        return (
            <div>
                    {isFirstPage && <span className="clickable" onClick={this.firstPageClicked}>#1</span>}
                    {isPrevDotted && <span className="clickable" onClick={this.prevDottedClicked}>...</span>}
                    {isPrevPage && <span className="clickable" onClick={this.prevClicked}>#{this.props.activePage-1}</span>}
                    <span className="activePage">#{this.props.activePage}</span>
                    {isNextPage && <span className="clickable" onClick={this.nextPageClicked}>#{this.props.activePage+1}</span>}
                    {isNextDotted && <span className="clickable" onClick={this.nextDottedClicked}>...</span>}
                    {isLastPage && <span className="clickable" onClick={this.lastPageClicked}>#{this.props.totalPages}</span>}
            </div>
        );
    }
}
