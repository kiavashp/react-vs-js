/*
    Note: these next two lines are commented out because instead of using 
    react-scripts to generate the code bundles, I'm just including react 
    in index.html (See https://reactjs.org/docs/add-react-to-a-website.html)
*/
// import React from 'react';
// import ReactDOM from 'react-dom/client';

const RENDERED_BY = 'React.js (createElement)';
const SECTIONS = [
    { name: 'Intro', content: 'Intro Content' },
    { name: 'About', content: 'About Content' },
    { name: 'Contact', content: 'Contact Content' }
];

const Section = (props) => {
    return React.createElement('section', {}, 
        React.createElement('h5', {}, props.info.name),
        React.createElement('p', {}, props.info.content)
    );
};

const App = () => {
    return React.createElement('main', {}, 
        React.createElement('span', {className: 'rendered-by'}, 
            'Rendered by: ',
            React.createElement('b', {}, RENDERED_BY)
        ),
        React.createElement('h3', {}, 'Sections'),
        SECTIONS.map(section => {
            return React.createElement(Section, {
                key: section.name,
                info: section
            });
        })
    );
};

const root = ReactDOM.createRoot(document.getElementById('react-createElement-root'));
root.render(React.createElement(App));
