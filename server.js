import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Project from './models/project.js';

// express app
const port = 3000;
const app = express();

// const webpack = require('webpack');
// const config = require('./webpack.config.js');
// const compiler = webpack(config);
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// })
// );

// app.use(webpackHotMiddleware(compiler));

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://abananaj:Mp18uYTjlDhm6YG2@cluster0.dct4vbd.mongodb.net/theatrum?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbURI)
  .then(result => app.listen(port))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('src'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// ===== page routing

// center stage
app.get('/', (req, res) => { res.redirect('/center'); });
app.get('/center', (req, res) => { res.render('center', { title: 'Center Stage - Home' }); });
// up stage
app.get('/about', (req, res) => { res.redirect('/up'); });
app.get('/up', (req, res) => { res.render('up', { title: 'Up Stage - About' }); });
// stage right
app.get('/portfolio', (req, res) => { res.redirect('/right'); });
app.get('/right', (req, res) => { res.render('right', { title: 'Stage Right - Projects' }); });
// down stage
app.get('/contact', (req, res) => { res.redirect('/down'); });
app.get('/down', (req, res) => { res.render('down', { title: 'Down Stage - Contact' }); });
// stage left
app.get('/services', (req, res) => { res.redirect('/left'); });
app.get('/left', (req, res) => { res.render('left', { title: 'Stage Left - Services' }); });

// private new project page 
app.get('/projects/create', (req, res) => { res.render('create', { title: 'Create a new project' }); });
app.post('/projects', (req, res) => {
  console.log(req.body);
  const project = new Project(req.body);
  project.save()
    .then(result => {
      res.redirect('/right');
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.get('/projects', (req, res) => { res.redirect('/right'); });
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});