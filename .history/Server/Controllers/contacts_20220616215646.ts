import express from 'express';
import Contact from '../Models/contact';
import { UserDisplayName} from '../Util';

export function DisplayUpdatePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    if(! req.user)
    {
       return  res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName:UserDisplayName(req)});
    }
    return res.redirect ('/contac');
 
}