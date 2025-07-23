import React from 'react';

const About = () => {
  return (
    <div className="bg-black text-green-400 font-mono h-full w-full p-8">
      <pre className="text-sm leading-relaxed">
{`Welcome to Umesh's Terminal...
---------------------------------

Name:     Umesh Singh Mehta
Role:     Full Stack Web Developer
Stack:    MongoDB | Express.js | React | Node.js
GitHub:   https://github.com/YOUR_GITHUB
LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN
Resume:   /resume.pdf

> Passionate about building scalable, clean, and efficient web apps.
> Currently exploring advanced MERN patterns & contributing to open source.

_`}
      </pre>
    </div>
  );
};

export default About;
