// NOTE:
// Not used gatsby Img, because write graphql query every time in load image
// is very verbose and couldn't find good way to make common.

import Mail from './mail.png'
import Messenger from './messenger.png'
// import Profile from './profile.jpg'
import Paper from './paper.png'
import Bandlive from './bandlive.jpg'
import Seinenkai from './seinenkai.jpg'
import Thumbnail from './thumbnail.png'
import Xmasgroove from './xmasgroove.jpg'
import Poster from './poster.jpg'
import MV from './accessMV.mp4'


enum Images {
 
  mail = Mail,
  messenger = Messenger,
  
  paper = Paper,
  bandlive = Bandlive,
  seinenkai = Seinenkai,
  thumbnail = Thumbnail,
  xmasgroove = Xmasgroove,
  poster = Poster,

  mv = MV
}

export default Images
