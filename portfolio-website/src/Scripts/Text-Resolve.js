class ScrambleText {

    constructor(el) {
      this.el = el;
      this.chars = '!@#$%^&*()-_+=<>\\/?';
      this.update = this.update.bind(this);
    }

    setText(input) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, input.length);
      const promise = new Promise(resolve => this.resolve = resolve);

      this.queue = [];
      for (let i = 0; i < length; i++) {
        const fromChar = oldText[i] || '';
        const toChar = input[i] || '';
        const startFrame = Math.floor(Math.random() * 60);
        const endFrame = start + Math.floor(Math.random() * 60);

        this.queue.push({ fromChar, toChar, startFrame, endFrame });
      }

      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();

      return promise;
    }

    update() {
      let output = '';
      let complete = 0;

      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { fromChar, toChar, startFrame, endFrame, char } = this.queue[i];

        if (this.frame >= endFrame) {
          complete++;
          output += toChar;
        } 
        else if (this.frame >= startFrame) 
        {
          if (!char || Math.random() < 0.26) 
          {
            char = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.queue[i].char = char;
          }

          output += `<span class="Hello">${char}</span>`;

        } 
        else 
        {
          output += fromChar;
        }
      }

      this.el.innerHTML = output;

      if (complete === this.queue.length) 
      {
        this.resolve();
      } 
      else 
      {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
}

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

const el = document.querySelector('.scramble');
const scramble = new ScrambleText(el);

const timer = () => {
  scramble.setText(words[Math.floor(Math.random() * items.length)]).then(() => {
    setTimeout(timer, 2500);
  });
};

timer();