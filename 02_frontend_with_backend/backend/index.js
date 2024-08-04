import express from 'express';

const app=express();

const getJokes= [
  {
      id: 1,
      setup: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!"
  },
  {
      id: 2,
      setup: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!"
  },
  {
      id: 3,
      setup: "Why don't skeletons fight each other?",
      punchline: "They don't have the guts."
  },
  {
      id: 4,
      setup: "What do you call fake spaghetti?",
      punchline: "An impasta!"
  },
  {
      id: 5,
      setup: "Why was the math book sad?",
      punchline: "Because it had too many problems."
  }
];




app.get('/api/jokes',(req,res)=>{
  res.send(getJokes)

})
app.listen(3000)