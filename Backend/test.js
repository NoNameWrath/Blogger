const mongoose = require('mongoose');

const uri = 'mongodb+srv://Abejo:Anpanman1@scribe.qveyzds.mongodb.net/scribe?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => console.log('✅ MongoDB Connected Successfully!'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));
