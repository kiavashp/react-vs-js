/**** react.js function replacements ****/

// analogous to ReactDOM.createRoot()
function createRoot(rootElement) {
    return {
        render: function (Component) {
            
            // create component html string
            const html = Component();

            // set html of root element
            rootElement.innerHTML = html;
        }
    };
}


/**** App ****/

const RENDERED_BY = 'Vanilla Javascript (HTML)';
const SECTIONS = [
    { name: 'Intro', content: 'Intro Content' },
    { name: 'About', content: 'About Content' },
    { name: 'Contact', content: 'Contact Content' }
];

const Section = (props) => {
    return `
        <section>
            <h5>${props.info.name}</h5>
            <p>${props.info.content}<p>
        </section>
    `;
};

const App = () => {
    return `
        <main>
            <span class="rendered-by">
                Rendered by: <b>${RENDERED_BY}</b>
            </span>
            <h3>Sections</h3>
            ${SECTIONS.map(section => {
                return Section({ info: section });
            }).join('')}
        </main>
    `;
};

const root = createRoot(document.getElementById('vanilla-html-root'));
root.render(App);
