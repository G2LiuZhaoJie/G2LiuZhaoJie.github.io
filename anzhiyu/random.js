var posts=["折腾Markdown/use-markdown1/","折腾Markdown/use-markdown3/","折腾Markdown/use-markdown2/","折腾Hexo/use-hexo1/","元启发式优化/metaheuristic/","元启发式优化/SA1/","元启发式优化/TS1/","元启发式优化/GA1/","元启发式优化/ACA1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };