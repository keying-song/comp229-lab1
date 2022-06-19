import express from 'express';
import Contact from '../Models/contact';

import { UserDisplayName } from '../Util';
export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction):void
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
export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction):void
{
  
    return res.render('index', {title: 'Add', page: 'edit',  messages: req.flash('updateMessage'), displayName: UserDisplayName(req)});
}
export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{


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
//add the new contact to collection
   Contact.create(newContact, function(err)
   {
       if(err)
       {
         
             console.error(err);
             res.end(err);     
       }
       return res.redirect('/contact-list');

   });

}