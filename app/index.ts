import 'dotenv/config'

import app from './settings/server'



app.listen(process.env.PORT || 5000, () => console.log(`application running in port ${process.env.PORT} 🚀🚀🚀🚀🚀🚀`))