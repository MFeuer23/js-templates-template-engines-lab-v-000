function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;
 
  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
 
  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //let commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  let commentTemplate = document.getElementById('comment-template').innerHTML;
 
  //create template function
  let templateFn = _.template(commentTemplate);
 
  let commentsDiv = document.getElementById('comments');
 
  //execute template function with JSON object for the interpolated values
  let templateHTML = templateFn({ comment: comment, commenter: commenter });
 
  //append rather than replace!
  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;
  
  let postTemplate = document.getElementById('post-template').innerHTML;
  
  let templateFn = _.template(postTemplate);

  let headerDiv = document.getElementById('post-template header');
  let footerDiv = document.getElementById('post-template footer');
 
  //execute template function with JSON object for the interpolated values
  let templateHeadHTML = templateFn({ title: title, body: body});
   let templateFootHTML = templateFn({ author: author});
 
  //append rather than replace!
  headerDiv.innerHTML += templateHeadHTML;
  footerDiv.innerHTML += templateFootHTML;
}