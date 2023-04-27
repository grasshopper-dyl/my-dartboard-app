// pages/api/private.js

import NextAuth from 'next-auth'
 
export default (req, res) => {
  // Require authentication for the private endpoint
  NextAuth.getSession({ req }).then(session => {
    if (!session) {
      res.statusCode = 401
      res.end('Unauthorized')
    } else {
      // Allow access to the private endpoint
      // ...
    }
  })
}
