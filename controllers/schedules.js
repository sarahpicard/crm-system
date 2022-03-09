import { Schedule } from '../models/schedule.js'

function index(req, res) {
  res.render('schedules/index', {
    title: 'Schedule',
  })
}


export {
  index,
}