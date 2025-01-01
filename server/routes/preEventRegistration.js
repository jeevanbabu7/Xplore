import express from 'express';
import User from '../models/p_e_r_userModel.js';
import bcrypt from 'bcryptjs';
import authClient from '../googleAuth/googleSheets.js'

const router = express.Router();


router.post('/register',async (req, res) => {
    const { name, phone, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);
    
        // Create new user
        const newUser = new User({
          name,
          phone,
          email,
          password: hashedPassword
        });
    
        await newUser.save();
    
        res.status(201).json({ message: 'Registration successful' });
      } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
});


router.post('/export-to-sheets', async (req, res) => {
  try {
    const data = await User.find();
    const rows = data.map((doc) => [doc.name, doc.phone, doc.email]);
    const googleSheets = await authClient();

    const spreadsheetId = '1AlaUsTbiruoGOUxgymd97TDaPei2i0ZNbo5CSay41hM';  //Google Sheets ID

    await googleSheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Sheet1!A1',  
      valueInputOption: 'RAW',
      resource: {
        values: [['Name', 'Phone-Number', 'Email'], ...rows],
      },
    });

    res.send('Data exported successfully to Google Sheets!');
  } catch (error) {
    console.error('Error exporting data: ', error);
    res.status(500).send('Failed to export data.');
  }
});

router.post('/ambassador-registration', async (req, res) => {
  try {
    const {name, whatsapp, email, course, college, why, skills, promote, hours } = req.body;
    const row = [name, email, whatsapp, course, college, why, skills, promote, hours];
    const googleSheets = await authClient();

    const spreadsheetId = '1lRZds4q2RNQauHRwHheatgaJp7JYuXwNC_-0cUDzYso'; 

    await googleSheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Sheet1!A1',  
      valueInputOption: 'RAW',
      resource: {
        values: [['Name', 'Email', 'Phone number', 'course', 'colege', 'why', 'skills', 'promote', 'hours'], row],
      },
    });

    res.send('Data exported successfully to Google Sheets!');
  } catch (error) {
    console.error('Error exporting data:', error.response?.data || error);
    res.status(500).send('Failed to export data.');
  }
});


export default router;
