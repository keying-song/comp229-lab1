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
  
    return res.render('index', {title: 'Add', page: 'edit', contact:'', displayName: UserDisplayName(req)});
}
export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void
{
   let id = req.params.id;
   // pass the id to the db and read the movie into the edit page
   let newContact = new Contact
   ({
       _id: id,
       Name: req.body.contactname,
       Phone: req.body.phone,
       Email: req.body.email
   });
   Contact.findById(id, {}, {}, function(err, contactToEdit)
   {
     if(err)
     {
       console.error(err);
       res.end(err);
     }
 
     // show the edit view with the data
     res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName:  UserDisplayName(req) })
   });

   
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
   Contact.create(newContact, function(err: ErrorCallback)
   {
       if(err)
       {
         
             console.error(err);
             res.end(err);     
       }
       return res.redirect('/contact-list');

   });

}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
   let id = req.params.id;
   // pass the id to the db and read the contact into the edit page
  

}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{

}