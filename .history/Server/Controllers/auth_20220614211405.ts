import express from 'express';

export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
   
}

export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Projects', page:'projects' });
}

export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Services', page:'services' });
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me', page:'contact' });
}


