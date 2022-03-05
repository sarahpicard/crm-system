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

export {
  index,
  newClient as new, 
}