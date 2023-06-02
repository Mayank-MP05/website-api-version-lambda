console.log('Loading function');

// DOCS: Data imports
const ProjectsDB = require('./data/projects-list.js');
const HighlightsDB = require('./data/hightlights.js');
const PerformanceDB = require('./data/performance-metrics.js');
const AboutDB = require('./data/about-me.js');
const SocialDB = require('./data/social-links.js');

// DOCS: base handler added
exports.handler = async (event, context) => {
    const API_BASE_URL = `https://api-version.mayank5pande.com`;
    let requestType = event?.requestType;
    const allowedRequestTypes = [
        'HOME',
        'PROJECTS',
        'PERFORMANCE',
        'ABOUT',
        'HIGHLIGHTS',
        'SOCIAL',
    ]

    let responseToSend = {
        takeMeBack: `${API_BASE_URL}`,
    }

    if (requestType === 'HOME') {
        return ({
            url: `${API_BASE_URL}`,
            projects: `${API_BASE_URL}/projects`,
            performance: `${API_BASE_URL}/performance`,
            about: `${API_BASE_URL}/about`,
            highlights: `${API_BASE_URL}/highlights`,
            social: `${API_BASE_URL}/social`,
        });
    } else if (requestType === 'PROJECTS') {
        return ({
            takeMeBack: `${API_BASE_URL}`,
            projectsList: ProjectsDB
        })
    } else if (requestType === 'PERFORMANCE') {
        return ({
            takeMeBack: `${API_BASE_URL}`,
            performance: PerformanceDB
        })
    } else if (requestType === 'ABOUT') {
        return ({
            takeMeBack: `${API_BASE_URL}`,
            about: AboutDB
        })
    } else if (requestType === 'HIGHLIGHTS') {
        return ({
            takeMeBack: `${API_BASE_URL}`,
            highlights: HighlightsDB
        })
    } else if (requestType === 'SOCIAL') {
        return ({
            takeMeBack: `${API_BASE_URL}`,
            social: SocialDB
        })
    } if (requestType === 'SINGLE_PROJECT') {
        const projectIdQueryParams = event?.project_id;
        const filteredProject = ProjectsDB.filter(project => project.route_slug === projectIdQueryParams);
        const singleProject = filteredProject[0];

        return ({
            takeMeBack: `${API_BASE_URL}`,
            projectDetails: singleProject
        })
    }

    return responseToSend;
};
