import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { HouseSchema } from '../models/Houses.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Houses = mongoose.model('House', HouseSchema);
}

export const dbContext = new DbContext()
