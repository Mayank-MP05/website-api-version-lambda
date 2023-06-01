console.log('Loading function');

exports.handler = async (event, context) => {
    const BASE_URL = `https://api-version.mayank5pande.com`;

    return ({
        url: `${BASE_URL}`,
    });
};
