import getChuck from './controller/wecome.js';
import { catChuck } from "./controller/wecome.js";
import { search } from "./controller/wecome.js";

export default {
    hello: {
        hash: "#randomChuck",
        init: getChuck
    },
    category: {
        hash: "#categoryChuck",
        init: catChuck
    },
    search: {
        hash: "#searchChuck",
        init: search
    }
}


