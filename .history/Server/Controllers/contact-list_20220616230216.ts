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
//display add contact 
export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
  
    return res.render('index', {title: 'Add', page: 'update',  messages: req.flash('updateMessage'), displayName: UserDisplayName(req)});
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{

}