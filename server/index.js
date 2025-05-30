import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const universities = [
  {
    id: '1',
    name: 'University of London',
    country: 'UK',
    logo: 'https://example.com/logo1.png',
    description: 'A world-renowned institution in the heart of London',
    programs: ['Computer Science', 'Business', 'Engineering'],
    tuitionRange: '$15,000 - $25,000',
    acceptanceRate: '65%',
    applicationDeadline: '2025-01-15',
    scholarshipsAvailable: true,
    requirements: {
      gpa: 3.5,
      languageTest: 'IELTS 6.5',
      otherTests: ['SAT']
    }
  },
  // Add more universities as needed
];

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'USA to UK',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    quote: 'UniMatch helped me find and get accepted to my dream university in London.',
    university: 'London School of Economics'
  },
  // Add more testimonials as needed
];

// API Routes
app.get('/api/universities', (req, res) => {
  res.json(universities);
});

app.get('/api/universities/:id', (req, res) => {
  const university = universities.find(u => u.id === req.params.id);
  if (!university) {
    return res.status(404).json({ message: 'University not found' });
  }
  res.json(university);
});

app.get('/api/testimonials', (req, res) => {
  res.json(testimonials);
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});