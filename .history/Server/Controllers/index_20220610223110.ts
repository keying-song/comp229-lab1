import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page:'home' });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About Me', page:'about' });
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Projects', page:'projects' });
}

export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'My Services', page:'services' });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me', page:'contact' });
}


import Movie from '../Models/movie';
export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
   Movie.find(function(err, moviesCollection){
      if(err){
        console.error(err);
        res.end(err);
      }
      res.render('index',{title: 'Movie lList', page:});

   });
}