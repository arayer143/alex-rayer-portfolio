// File: scripts/generate-secret.js
import crypto from 'crypto';

function generateSecret(length = 32) {
  return crypto.randomBytes(length).toString('base64');
}

const secret = generateSecret();
console.log('Your NextAuth Secret:');
console.log(secret);

// Generate a few alternatives
console.log('\nAlternative secrets:');
for (let i = 0; i < 3; i++) {
  console.log(generateSecret());
}