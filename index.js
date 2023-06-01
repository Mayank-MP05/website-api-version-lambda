console.log('Loading function');

exports.handler = async (event, context) => {
    const API_BASE_URL = `https://api-version.mayank5pande.com`;

    return ({
        url: `${API_BASE_URL}`,
        projects: `${API_BASE_URL}/projects`,
        performance: `${API_BASE_URL}/performance`,
        about: `${API_BASE_URL}/about`,
        highlights: `${API_BASE_URL}/highlights`,
        social: `${API_BASE_URL}/social`,
    });
};
