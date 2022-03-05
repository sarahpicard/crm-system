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

export {
  index,
}