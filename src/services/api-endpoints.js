const baseURL = 'http://api.nestoria.co.uk/';

// https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy
// &page=1&place_name=leeds
const country = 'uk';
const pretty = '1';
const action = 'search_listings';
const encoding = 'json';

const fixedPart = `${baseURL}api?country=${country}&pretty=${pretty}&action=${action}&encoding=${encoding}`;

export const apiEndpoints = {
    buy: `${fixedPart}&listing_type=buy`,
    rent: `${fixedPart}&listing_type=rent`,
    share: `${fixedPart}&listing_type=share`
};
