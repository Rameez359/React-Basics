function customRender(reactElement, container){
   /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.probs.href)
    domElement.setAttribute('target', reactElement.probs.target)
    container.appendChild(domElement)
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        console.log(prop)
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children:'click me to visit google'
}
const reactElement1 = {
    type: 'h1',
    probs: {
        href: 'https://facebook.com',
        target: '_blank'
    },
    children:'click me to visit facebook'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)
customRender(reactElement1, mainContainer)