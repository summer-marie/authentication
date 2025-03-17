# authentication

# .env files
- Test: SERVER_URL=http://localhost:8008
- Server: 
PORT=8008
MONGODB_URL=mongodb://localhost:27017/auth-template
COOKIE_SECRET=secret
SESSION_SECRET=secret
JWT_SECRET=secret
# // 30 days
TOKEN_EXPIRATION=2592000
WHITELISTED_DOMAINS=http://localhost:3003

- Client: VITE_API_SERVER_URL=http://localhost:8008
