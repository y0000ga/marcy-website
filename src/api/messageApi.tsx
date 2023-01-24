import axios from 'axios'

import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const projectId = 'marcy-375508'

const firebaseConfig = {
  apiKey: '{{apiKey}}',
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: 'https://{{databaseName}}.firebaseio.com',
  storageBucket: '{{bucket}}.appspot.com',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

