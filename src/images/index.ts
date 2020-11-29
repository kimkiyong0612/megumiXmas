// NOTE:
// Not used gatsby Img, because write graphql query every time in load image
// is very verbose and couldn't find good way to make common.
import Facebook from './fb.png'
import Github from './github.png'
import Qiita from './qiita.png'
import Medium from './medium.png'
import Mail from './mail.png'
import Messenger from './messenger.png'
import Profile from './profile.jpg'
import Paper from './paper.png'
// import Backgroud from './background.png'
// import Candle from './candle.jpg'
import Bandlive from './bandlive.jpg'
import Members from './members.jpg'
import Thumbnail from './thumbnail.png'

enum Images {
  github = Github,
  qiita = Qiita,
  medium = Medium,
  facebook = Facebook,
  mail = Mail,
  messenger = Messenger,
  profile = Profile,
  paper = Paper,
  // background = Backgroud
  // candle = Candle,
  bandlive = Bandlive,
  members = Members,
  thumbnail = Thumbnail
}

export default Images
