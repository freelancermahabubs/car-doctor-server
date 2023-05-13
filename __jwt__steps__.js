/**
 * JWT: Secure Your API
 * ------------------------------------------
 *                   CREATE TOKEN
 * -------------------------------------
 * 1. Client After user login send user basic info to crate token.
 * 
 * 2. In the server side: Install  npm i JSonwebtoken.
 * 3. Import JsonwebToken.
 * 4. jwt.sing(payload, secret, {expires}).
 * 5. Return token to the client side.
 * 
 * 
 * 6.After Receiving the token store it either http only cookies or localStorage (second best solution).
 * 
 * 7. use a general space onAuthSateChange > AuthProvider
  ==============================================
 *                SEND TOKEN TO SERVER 
 *============================================
 * 1. for sensitive api call( ) send authorization headers {authorization: `Barer token`}
 * 
 *=======================================
 *             VERIFY TOKEN
  ========================================

  1. Crate a function called verifyJWT(middleware)
  2. This Function wil have three params: req, res, next.
  3. First check whether the authorization headers Exists.
  4. if not send 401
  5. Get hte token out of the authorization header
  6. Call jwt.verify(token, secret, decoded).
  7. if Error => send 401.
  8. Set decoded to the req object so that we can retrieve it later.
  9. call the nex( ) to go the next function.

  ==============================================================
  CHECK WETHER TOKEN HAS THE EMAIL THAT MATCHES WITH THE REQUEST EMAIL
  ====================================================================
 */
