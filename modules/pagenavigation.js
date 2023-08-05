"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import { DateTime } from "./luxon.js";
var PageNavigation = /** @class */ (function () {
    class PageNavigation {
        constructor() {
            var _this = this;
            this.listbtn = document.getElementById('list-books-link');
            this.addBookBtn = document.getElementById('add-books-link');
            this.contactBtn = document.getElementById('contact-link');
            if (this.listbtn) {
                this.listbtn.onclick = function () { return _this.displayBooks(); };
            }
            if ((this, this.addBookBtn)) {
                this.addBookBtn.onclick = function () {
                    console.log("clicked");
                    _this.displayAddBooks();
                };
            }
            if (this.contactBtn) {
                this.contactBtn.onclick = function () { return _this.displayContact(); };
            }
            this.displayBk = document.querySelector('.display-book');
            this.addBk = document.querySelector('.add-book');
            this.contact = document.querySelector('.contact-section');
            this.dateDisplay = document.querySelector('.date-display');
        }
        displayBooks() {
            this.displayTime();
            if (this.displayBk) {
                this.displayBk.style.display = 'block';
            }
            if (this.addBk) {
                this.addBk.style.display = 'none';
            }
            if (this.contact) {
                this.contact.style.display = 'none';
            }
        }
        displayAddBooks() {
            this.displayTime();
            if (this.displayBk) {
                this.displayBk.style.display = 'none';
            }
            if (this.addBk) {
                this.addBk.style.display = 'block';
            }
            if (this.contact) {
                this.contact.style.display = 'none';
            }
        }
        displayContact() {
            this.displayTime();
            if (this.displayBk) {
                this.displayBk.style.display = 'none';
            }
            if (this.addBk) {
                this.addBk.style.display = 'none';
            }
            if (this.contact) {
                this.contact.style.display = 'block';
            }
        }
        displayTime() {
            var dt = DateTime.now();
            if (this.dateDisplay) {
                this.dateDisplay.textContent = dt.toLocaleString(DateTime.DATETIME_MED);
            }
        }
    }
    return PageNavigation;
}());
const _default = PageNavigation;
export { _default as default };
