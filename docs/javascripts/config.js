window.MathJax = {
    options: {
      ignoreHtmlClass: 'tex2jax_ignore',
      processHtmlClass: 'tex2jax_process',
      renderActions: {
        find: [10, function (doc) {
          for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
            const display = !!node.type.match(/; *mode=display/);
            const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
            const text = document.createTextNode('');
            const sibling = node.previousElementSibling;
            node.parentNode.replaceChild(text, node);
            math.start = {node: text, delim: '', n: 0};
            math.end = {node: text, delim: '', n: 0};
            doc.math.push(math);
            if (sibling && sibling.matches('.MathJax_Preview')) {
              sibling.parentNode.removeChild(sibling);
            }
          }
        }, '']
      }
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
