window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})

var gitalk = new Gitalk({
  clientID: '192844eda51bfad64420',
  clientSecret: 'af922effc6dc62de3fedb61169b7b4935c673c1e',
  repo: 'ai-edu-preview',      // The repository of store comments,
  owner: 'imsuven',
  admin: ['imsuven'],
  id: location.pathname,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false,  // Facebook-like distraction free mode
  title: document.title,
  labels: ['Gitalk', document.title],
  body: location.href + document.getElementsByTagName("meta")["description"]
})

gitalk.render('gitalk-container')
