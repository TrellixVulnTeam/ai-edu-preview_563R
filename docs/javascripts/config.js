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

var gitalk = new Gitalk({
  clientID: '192844eda51bfad64420',
  clientSecret: 'af922effc6dc62de3fedb61169b7b4935c673c1e',
  repo: 'ai-edu-preview',      // The repository of store comments,
  owner: 'imsuven',
  admin: ['imsuven'],
  id: document.title,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false,  // Facebook-like distraction free mode
  title: document.title,
  body: location.href + document.getElementsByTagName("meta")["description"]
});

gitalk.render('gitalk-container');

(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "76j9m09jeq");