import { Component } from "react";

const words = [
  'Hello.',
  '你好.',
  'Hola.',
  'こんにちは.',
  'Ciao.',
  'Bonjour.',
  'Aloha.',
  'Привет.',   
  'Olá.',
  'Merhaba.',
  '안녕하세요.',
  'Zdravo.',
  'Cześć.',
  'Hallo.',
  'Salve.',
];

//ToDo: Change Words to Hey! instead of Hello.
//ToDo: Make the Hey! before my namee sync with the background text
//ToDo: Add Type effect on Software developer to change between Software Developer, Web Developer, Game Developer, Discord Moderator, She/Her, Artist.

class ScrambleText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chars: '!@#$%^&*()-_+=<>\\/?',
      timer: this.props.timer,
      output: '',
      queue: [],
    };
  }

  setText(newText) {
    const oldText = "";
    const maxTextLength = Math.max(oldText.length, newText.length);
    
    for (let i = 0; i < maxTextLength; i++) {
      const fromChar = oldText[i] || '';
      const toChar = newText[i] || '';
      const startFrame = Math.floor(Math.random() * 60);
      const endFrame = startFrame + Math.floor(Math.random() * 60);

      this.state.queue.push({ fromChar, toChar, startFrame, endFrame });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;

    this.update()

    return(
      this.state.output
    )
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.state.queue.length; i < n; i++) {
      let { fromChar, toChar, startFrame, endFrame, char } = this.state.queue[i];

      if (this.frame >= endFrame) {
        complete++;
        output += toChar;
      } 
      else if (this.frame >= startFrame) 
      {
        if (!char || Math.random() < 0.26) 
        {
          char = this.state.chars[Math.floor(Math.random() * this.state.chars.length)];
          this.state.queue[i].char = char;
        }

        output += `<span class="ScrambleText">${char}</span>`;

      } 
      else 
      {
        output += fromChar;
      }
    }
    console.log(this.state.queue)

    if (complete === this.state.queue.length) 
    {
      console.log("Completed!");
    } 
    else 
    {
      this.frameRequest = requestAnimationFrame(this.update(this));
      this.frame++;
    }
  }

  render() {
    return (
      this.setText(words[Math.floor(Math.random() * words.length)])
    )
  }
}

// setTimer() {
//   this.interval = setInterval(() => this.tick(), this.state.timer);
// }

// clearTimer() {
//   clearInterval(this.interval);
// }

export default ScrambleText