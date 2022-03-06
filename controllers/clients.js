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
  Client.findById(req.params.id).populate('owner').then(customer => {
    res.render('clients/show', {
      customer,
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

function edit(req, res) {
  Client.findById(req.params.id, function(err, customer) {
    res.render('clients/edit', {
      customer, 
      err, 
      title: 'Edit Client'
    })
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] ==='') delete req.body[key]
  }
  Client.findByIdAndUpdate(req.params.id, req.body, function(err, customer) {
    res.redirect(`/clients/${customer._id}`)
  })
}

function createConversation(req, res) {
  Client.findById(req.params.id, function(err, customer) {
    customer.conversations.push(req.body)
    customer.save(function(err) {
      res.redirect(`/clients/${customer._id}`)
    })
  })
}

function deleteClient(req, res) {
  Client.findByIdAndDelete(req.params.id, function(err, client) {
    res.redirect('/clients')
  })
}


export {
  index,
  newClient as new, 
  show,
  create,
  edit,
  update,
  createConversation,
  deleteClient as delete,
}