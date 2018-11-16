import * as fetch from 'isomorphic-fetch';
import {apiEndpoints} from "./api-endpoints";

export class _HttpFetch {
    getByPlaceName(place_name, _page) {
        const page = _page ? _page : '1';
        const url = `${apiEndpoints.buy}&page=${page}&place_name=${place_name}`;
        console.log('url',url);

        return fetch(url, {method: 'GET'})
            .then(res => {
                if (res.json) {
                    return res.json();
                }
                return res;
            });
    }

    get(url) {
        // const page = _page ? _page : '1';

        // const placeName = store.getState().placeName;

        // const url = `${_url}&page=${page}&place_name=${placeName}`;

        // console.log('page',page);
        // console.log('url',url);

        return fetch(url, {method: 'GET'})
            .then(res => {
                if (res.json) {
                    return res.json();
                }
                return res;
            });
    }
}

export const HttpFetch = new _HttpFetch();
