import tweetme from '../../assets/projects_images/tweetme.PNG'
import chatapp from '../../assets/projects_images/chatapp.JPG'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
import blinking from '../../assets/projects_images/blinking.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'

const data_projects = [
    {
        name: 'COVID 19 tracker',
        image: COVID,
        deployed_url: '/projects',
        github_url: '/projects',
        category: ['react.js']
    },

    {
        name: 'Dev Talks',
        image: Dev_talks,
        deployed_url: '/projects',
        github_url: '/projects',
        category: ['node.js', 'mongoDB', 'react.js']
    },

    {
        name: 'Realtime Chat App',
        image: chatapp,
        deployed_url: '/projects',
        github_url: '/projects',
        category: ['node', 'socket.io', 'react']
    },

    {
        name: 'Tweeter Clone',
        image: tweetme,
        deployed_url: '/projects',
        github_url: '/projects',
        category: ['django', 'react']
    },

    {
        name: 'Shop Website',
        image: hardware_store,
        deployed_url: '/projects',
        category: ['html_css', 'vanilla']
    },

    {
        name: 'Dev Portfolio',
        image: portfolio,
        deployed_url: '/projects',
        category: ['vanilla','node']
    },
    {
        name: 'Blinking bubbles',
        image: blinking,
        deployed_url: '/projects',
        github_url: '/projects',
        category: ['processing']
    }
]

export default data_projects;