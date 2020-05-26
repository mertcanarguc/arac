const async = require("async")
const express = require('express');
const User = require('../models/user');
const passport = require("passport")
const router = express.Router();

exports.registerpost = async(req,res,next)=>{
	User.register(new User(req.body),
		req.body.password, function(err, user) {
		if (err) {
			return res.render('auth/login', { user: user });
		}
		
		passport.authenticate('local')(req,res, function() {
			res.redirect('/');
		});
    });
}

exports.login = async(req,res,next)=>{
	res.render('auth/login', { user : req.user });
}

exports.loginpost = async(req,res,next)=>{
	res.redirect('/');
}

exports.logout = async(req,res,next)=>{
	req.logout();
    res.redirect('/');
}

