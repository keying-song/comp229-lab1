import express from 'express';
import User from '../Models/user';
import { UserDisplayName } from '../Util';
export function DisplayContactsList(req: express.Request, res: express.Response, next: express.NextFunction)
{
   User.find(function(err, usersCollection){
      if(err){
        console.error(err);
        res.end(err);
      }
      res.render('index',{title: 'User List', page: 'user-list', users:usersCollection, displayName: UserDisplayName(req)});

   });
}