const express = require('express');
let router = express.Router();
let randomArray = [
    {
      id: 1,
      type: 'book',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      pages: 180,
    },
    {
      id: 2,
      type: 'task',
      taskName: 'Complete Homework',
      priority: 3,
      completed: false,
    },
    {
      id: 3,
      type: 'note',
      content: 'Meeting at 2 PM',
    },
    {
      id: 4,
      type: 'book',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      pages: 281,
    },
    {
      id: 5,
      type: 'task',
      taskName: 'Buy groceries',
      priority: 2,
      completed: true,
    },
    {
      id: 6,
      type: 'note',
      content: 'Call Mom tomorrow',
    },
    {
      id: 7,
      type: 'book',
      title: '1984',
      author: 'George Orwell',
      pages: 328,
    },
    {
      id: 8,
      type: 'task',
      taskName: 'Write report',
      priority: 4,
      completed: false,
    },
    {
      id: 9,
      type: 'note',
      content: 'Pick up dry cleaning',
    },
  ];
router.get('/',(req, res) =>{
    res.send('respond with a resource');
    console.log("server is running")
});
router.get('/:id',(req, res) =>{
    const id = parseInt(req.params.id);
    res.send(randomArray[id]);
    console.log("server is running for second get")
});

module.exports = router;