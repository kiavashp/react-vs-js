/**** react.js function replacements ****/

// analogous to ReactDOM.createRoot()
function createRoot(rootElement) {
    return {
        render: function (Component) {
            
            // create component element
            const element = Component();

            // add component to root element
            rootElement.appendChild(element);
        }
    };
}

// analogous to React.createElement()
/*
Function: createElement(tagNameOrComponent, attributesOrProps, ...children)
> Creates an html element of the specified tagName, adds attributes, and appends the child elements. Or passes other arguments to Component(props, children)

Arguments / Parameters:
- tagNameOrComponent (String | Function): either a tagname (string) or a Component (function
- attributesOrProps (Object, default={}): either attributes to add to html, or props to send to Component
- ...children (String | Element | Array[Element]): either a string (to be made a textNode), or an html element, or list of html elements.
*/
function createElement(tagNameOrComponent, attributesOrProps={}, ...children) {
    let element;

    if (typeof tagNameOrComponent === 'string') {
        const tagName = tagNameOrComponent; // tagNameOrComponent is a tagName
    
        element = document.createElement(tagName);
        
        // add attributes
        for (const key in attributesOrProps) {
            element.setAttribute(key, attributesOrProps[key]);
        }

        // append children
        children.forEach(child => {
            if (Array.isArray(child)) { // support for .map(() => createElement())
                child.forEach(c => {
                    element.appendChild(c);
                });
            } else if (typeof child === 'string') { // support for text nodes
                child = document.createTextNode(child);
                element.appendChild(child);
            } else {
                element.appendChild(child);
            }
        });
    } else if (typeof tagNameOrComponent === 'function') {
        const Component = tagNameOrComponent; // tagNameOrComponent is a Component

        // call component
        element = Component(attributesOrProps, children);
    }

    return element;
}



/**** App ****/

const RENDERED_BY = 'Vanilla Javascript (createElement)';
const SECTIONS = [
    { name: 'Intro', content: 'Intro Content' },
    { name: 'About', content: 'About Content' },
    { name: 'Contact', content: 'Contact Content' }
];

const Section = (props) => {
    return createElement('section', {},
        createElement('h5', {}, props.info.name),
        createElement('p', {}, props.info.content)
    );
};

const App = () => {
    return createElement('main', {},
        createElement('span', {class: 'rendered-by'},
            'Rendered by: ',
            createElement('b', {}, RENDERED_BY)
        ),
        createElement('h3', {}, 'Sections'),
        SECTIONS.map(section => {
            return createElement(Section, { info: section });
        })
    );
};

const root = createRoot(document.getElementById('vanilla-createElement-root'));
root.render(App);