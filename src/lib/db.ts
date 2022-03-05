import 'dotenv/config'
import mongoose from 'mongoose'

// using Node.js 2.2.12 or later str..
const uri = process.env.MONGODB_URI ?? '';

/**
 * Global is used here to maintain a global.mongoose connectionection across hot reloads
 * in development. This prevents connectionections growing exponentially
 * during API Route usage.
 */

if (!global.mongoose) {
  global.mongoose = { connection: null, promise: null }
}

async function dbConnection() {
  if (global.mongoose.connection) {
   return global.mongoose.connection
  }

  if (!global.mongoose.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      // bufferMaxEntries: 0,
      // useFindAndModify: false,
      // useCreateIndex: true,
    }

    global.mongoose.promise = await  mongoose.connect(uri, opts).then(m => m)
  }

  global.mongoose.connection = await global.mongoose.promise
  return global.mongoose.connection
}

export default dbConnection 
