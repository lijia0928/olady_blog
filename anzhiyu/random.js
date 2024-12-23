var posts=["2024/12/16/hello-world/","2024/12/17/我创建的文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };