import {shuffle} from '../../library/helpers';

export default function (req, res) {
  console.log(req.query);
  const {text=""}=req.query;
  const bigText = text.toUpperCase();
  const textArray =text.split("")
  const shuffledText = shuffle(textArray).join("")
  res.status(200).json({ bigText,shuffledText });
}
