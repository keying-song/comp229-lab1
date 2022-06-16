import express from 'express';
import Contact from '../Models/user';
import { UserDisplayName } from '../Util';
export function DisplayContactList(req: express.Request, res: express.Response, next: express.NextFunction)
{
   User.find(function(err, contactsCollection){
      if(err){
        console.error(err);
        res.end(err);
      }
      res.render('index',{title: 'Contact List', page: 'contact-list', contacts:contactsCollection, displayName: UserDisplayName(req)});

   });
}