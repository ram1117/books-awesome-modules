"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.getBooksArray = function () {
        return JSON.parse(localStorage.getItem('book-list'));
    };
    Storage.setBooksArray = function (array) {
        localStorage.setItem('book-list', JSON.stringify(array));
    };
    return Storage;
}());
const _default = Storage;
export { _default as default };
