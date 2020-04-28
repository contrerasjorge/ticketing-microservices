import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('Hey yo');
});

export { router as signoutRouter };
