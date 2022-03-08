import { Client } from "../models/client.js";


function index(req, res) {
  Client.find({ owner: req.user.profile._id}).then(customer => {
    Client.findById(req.user.profile._id)
    .then(self => {
      console.log(req.user.profile._id, 'owner!')
      // console.log(customer.owner._id, "customer")
      // const isSelf = req.user.profile._id
      res.render('clients/index', {
        customer,
        self,
        title: 'Clients',
      })
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
  Client.findById(req.params.id)
    .populate('owner')
    .then(customer => {
      Client.findById(req.user.profile._id)
        .then(self => {
          const isSelf = req.user.profile
          res.render('clients/show', {
            customer, 
            self,
            isSelf, 
            title: 'Client'
          })
        })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/clients')
  })
}

function create(req, res) {
  req.body.status = !!req.body.status
  req.body.owner = req.user.profile._id
  const client = new Client(req.body)
  console.log(req.body, "body")
  console.log(req.body.owner, "owner!")
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

function showRecentConversations(req, res) {
  Client.find({}).then(conversation => {
    res.render('index', {
      title: 'Daily View',
      customer: conversation,
      // isSelf: req.user.profile, 
    })
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
  showRecentConversations
}