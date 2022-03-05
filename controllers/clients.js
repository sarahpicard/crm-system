import { Client } from "../models/client.js";

function index(req, res) {
  Client.find({}).then(clients => {
    res.render('clients/index', {
      clients, 
      title: 'Clients'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/clients')
  })
}

function newClient(req, res) {
  res.render('clients/new', {
    title: 'Add a New Client',
  })
}

function show(req, res) {
  Client.findById(req.params.id).populate('owner').then(client => {
    res.render('clients/show', {
      client,
      title: 'Client'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/clients')
  })
}

function create(req, res) {
  req.body.status = !!req.body.status
  const client = new Client(req.body)
  client.save(function(err) {
    if (err) return res.redirect('/clients/new')
    res.redirect('/clients')
  })
}


export {
  index,
  newClient as new, 
  show,
  create,
}