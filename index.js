"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import pagenavigation_js_1 from "./modules/pagenavigation.js";
import booksinterface_js_1 from "./modules/booksinterface.js";
import storage_js_1 from "./modules/storage.js";
window.onload = function () {
    if (storage_js_1.getBooksArray() === null) {
        storage_js_1.setBooksArray([]);
    }
    var pageNav = new pagenavigation_js_1();
    pageNav.displayBooks();
    var booksUi = new booksinterface_js_1();
    booksUi.loadBooksList();
};
console.log('loaded');
