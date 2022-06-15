import express from 'express';

export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page:'home' });
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About Me', page:'about' });
}

export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Projects', page:'projects' });
}

export function ProcessPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Services', page:'services' });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me', page:'contact' });
}


