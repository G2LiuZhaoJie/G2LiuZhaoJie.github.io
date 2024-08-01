var posts=["折腾Markdown/use-markdown1/","折腾Markdown/use-markdown3/","折腾Markdown/use-markdown2/","折腾Hexo/use-hexo1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };