const fetch = require('isomorphic-fetch')
const FormData =require('form-data')

module.exports = event => {
  console.log(event)

  if (!process.env['MAILGUN_API_KEY']) {
    console.log('Please provide a valid mailgun secret key!')
    return { error: 'Module not configured correctly.' }
  }

  if (!process.env['MAILGUN_DOMAIN']) {
    console.log('Please provide a valid mailgun domain!')
    return { error: 'Module not configured correctly.' }
  }

  const token = new Buffer(`api:${process.env['MAILGUN_API_KEY']}`).toString('base64')
  const endpoint = `https://api.mailgun.net/v3/${process.env['MAILGUN_DOMAIN']}/messages`

  const node = event.data.Order.node

  const from = 'Webshop <order@your-webshop.com>'
  const to = node.user.email
  const subject = 'Your order is confirmed'
  const text = `Congratulations. We've received your order.`

  const form = new FormData()
  form.append('from', from)
  form.append('to', to)

  form.append('subject', subject)
  form.append('text', text)

  return fetch(endpoint, {
    headers: {
      'Authorization': `Basic ${token}`
    },
    method: 'POST',
    body: form
  })
  .then(response => response.json())
  .then(json => {
    console.log(`Email both valid, and queued to be delivered.`)
    console.log(json)

    return { data: { success: true } }
  })
  .catch(error => {
    console.log(`Email could not be sent because an error occured:`)
    console.log(error)

    return { data: { success: false } }
  })
}
