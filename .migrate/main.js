// JS includes for webpack go here
import Handlebars from 'handlebars';
import ifCond from './helpers/Handlebars/ifCond.js';
Handlebars.registerHelper('ifCond', ifCond);