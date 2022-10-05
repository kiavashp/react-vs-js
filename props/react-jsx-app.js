/*
    Note: these next two lines are commented out because instead of using 
    react-scripts to generate the code bundles, I'm just including react 
    in index.html (See https://reactjs.org/docs/add-react-to-a-website.html)
*/
// import React from 'react';
// import ReactDOM from 'react-dom/client';

const RENDERED_BY = 'React.js (JSX)';
const SECTIONS = [
    { name: 'Intro', content: 'Intro Content' },
    { name: 'About', content: 'About Content' },
    { name: 'Contact', content: 'Contact Content' }
];

const Section = (props) => {
    return (
        <section>
            <h5>{props.info.name}</h5>
            <p>{props.info.content}</p>
        </section>
    );
};

const App = () => {
    return (
        <main>
            <span className="rendered-by">
                Rendered by: <b>{RENDERED_BY}</b>
            </span>
            <h3>Sections</h3>
            {SECTIONS.map(section => {
                return <Section key={section.name} info={section} />;
            })}
        </main>
    );
};

const root = ReactDOM.createRoot(document.getElementById('react-jsx-root'));
root.render(<App/>);
