import express from 'express';
import nodemailer from 'nodemailer';
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
  }catch (error) {
    console.error('Error exporting data: ', error);
    res.status(500).send('Failed to export data.');
  }
});

router.post('/ambassador-registration', async (req, res) => {
  try {
    const { name, whatsapp, email, course, college, why, skills, promote, hours, ambassadorId } = req.body;
    const row = [name, email, whatsapp, course, college, why, skills, promote, hours, ambassadorId];
    const googleSheets = await authClient();

    const spreadsheetId = '1lRZds4q2RNQauHRwHheatgaJp7JYuXwNC_-0cUDzYso';


    const getData = await googleSheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1',
    });

    const existingData = getData.data.values || [];

    const emailExists = existingData.some((row) => row[1] === email);

    if (emailExists) {
      return res.status(400).send({ ok: false, message: 'Email already exists' });
    }

    await googleSheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [row],
      },
    });

    res.status(200).send({ ok: true, message: 'Form submitted successfully.Check mail for more info.' });
  } catch (error) {
    console.error('Error appending data:', error.response?.data || error);
    res.status(500).send({ ok: false, message: 'Failed to submit.' });
  }
});

router.post('/send-email', async (req, res) => {
  console.log("hehehe");
  const { to, subject, html } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject ,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
});


export default router;
