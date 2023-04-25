import Marquee from "react-fast-marquee";
import { AiFillHeart, AiFillMail } from "react-icons/ai";
import { BsEmojiSmileFill } from "react-icons/bs";

const App = () => {
  return (
    <div>
      <Marquee gradient={false}>
        <div className="marquee__item">
          <AiFillHeart /> <p>Get In Touch!</p>
        </div>
        <div className="marquee__item">
          <BsEmojiSmileFill /> <p>Let's Work!</p>
        </div>
        <div className="marquee__item">
          <AiFillMail /> <p>Say Hello!</p>
        </div>
      </Marquee>
    </div>
  );
};

export default App;
