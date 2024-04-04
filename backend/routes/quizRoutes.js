import express from 'express';

const router = express.Router();

// an empty array to store quizzes
let quizzes = [];

// creates a new quiz
router.post('/new', (req, res) => {
  const quiz = req.body;
  quizzes.push(quiz);
  res.status(201).json({ message: 'Quiz created successfully', quiz });
});

// read all the quizzes in the database
router.get('/get', (req, res) => {
  res.status(200).json(quizzes);
});

// read a single quiz using its id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const quiz = quizzes.find(q => q.id === id);
  if (!quiz) {
    return res.status(404).json({ message: 'Quiz not found' });
  }
  res.status(200).json(quiz);
});

// update a quiz by ID
router.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = quizzes.findIndex(q => q.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Quiz not found' });
  }
  quizzes[index] = req.body;
  res.status(200).json({ message: 'Quiz updated successfully', quiz: quizzes[index] });
});

// delete a quiz by ID
router.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = quizzes.findIndex(q => q.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Quiz not found' });
  }
  quizzes.splice(index, 1);
  res.status(200).json({ message: 'Quiz deleted successfully' });
});



export default router;