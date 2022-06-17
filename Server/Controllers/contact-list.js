"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessAddPage = exports.DisplayAddPage = exports.DisplayContactList = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
const Util_1 = require("../Util");
function DisplayContactList(req, res, next) {
    contact_1.default.find(function (err, contactsCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contactsCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    }).sort({ Name: 1 });
}
exports.DisplayContactList = DisplayContactList;
function DisplayAddPage(req, res, next) {
    return res.render('index', { title: 'Add', page: 'update', messages: req.flash('updateMessage'), displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contact_1.default({
        Name: req.body.contactname,
        Phone: req.body.phone,
        Email: req.body.email
    });
    contact_1.default.create(newContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        return res.redirect('/contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
//# sourceMappingURL=contact-list.js.map