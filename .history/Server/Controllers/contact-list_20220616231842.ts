import express from 'express';
import Contact from '../Models/contact';

import { UserDisplayName } from '../Util';
export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction)
{
   Contact.find(function(err, contactsCollection){
      if(err){
        console.error(err);
        res.end(err);
      }
      res.render('index',{title: 'Contact List', page: 'contact-list', contacts:contactsCollection, displayName: UserDisplayName(req)});

   }).sort({Name: 1});
}
//display add contact page
export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
  
    return res.render('index', {title: 'Add', page: 'update',  messages: req.flash('updateMessage'), displayName: UserDisplayName(req)});
}
// process add contact
export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
   // instantiate a new contact object
   let newContact = new Contact
   ({
       Name: req.body.contactname,
       Phone: req.body.phone,
       Email: req.body.email
   });

   Contact.create(newContact, function(err)
   {
       if(err)
       {
           if(err.name == "ContactExistsError")
           {
               console.error('ERROR: Contact Already Exists!');
               req.flash('registerMessage', 'Registration Error!');
           }
           else
           {
               console.error(err.name); // other error
               req.flash('registerMessage', 'Server Error');
           }
           return res.redirect('/register');
       }
       // everything is ok - user has been registered

       // automatically login the user
       return passport.authenticate('local')(req, res, function()
       {
           return res.redirect('/contact-list');
       });

   });

}