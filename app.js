import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from "./services/Menu.js";
import Router from './services/Router.js';



window.app = {
    store: Store,
    router: Router
}


window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
    loadData();
})

// https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
window.addEventListener('popstate', event => {
    Router.go(event.state.route, false);
});