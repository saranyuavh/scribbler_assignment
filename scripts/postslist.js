function create_post_cards() {

    posts.forEach(elm => {

        const div = document.createElement('div');
        div.className = "card-class";
        div.innerHTML = post_card_template;
        div.getElementsByClassName('post-author-p')[0].innerHTML = elm.author;
        div.getElementsByClassName('post-title-p')[0].innerHTML = elm.title;
        div.getElementsByClassName('post-content-p')[0].innerHTML = elm.content;
        document.getElementById('post-board').appendChild(div);

    });
}

const posts = [
    {
        author: "Srishti Gupta",
        title: "‘let’ me be a ‘const’(ant), not a ‘var’(iable)!",
        content: "Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.",
    },
    {
        author: "Colby Fayock",
        title: "What is linting and how can it save you time?",
        content: "One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.",

    },
    {
        author: "Yazeed Bzadough",
        title: "How to Get More Views on Your Tech Blog",
        content: "If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.",

    },
    {
        author: "Cedd Burge",
        title: "How to write easily describable code",
        content: "When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.",
    },
    {
        author: "Srishti Gupta",
        title: "Everything you should know about ‘module’ & ‘require’ in Node.js",
        content: "Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module.",
    }
];

let node_to_delete = null;
function confirm_modal(show, node) {
    if (show) {
        document.getElementById('id04').style.display = 'block';
    } else {
        document.getElementById('id04').style.display = 'none';
    }

    node_to_delete = node;
}

function delete_post() {
    node_to_delete.remove();
}

const post_card_template =
    "<div class='post-author'> \
          <p class='post-author-p'></p> \
      </div> \
      <div class='post-content'> \
          <div class='post-title-header'> \
              <p class='post-title-p'></p> \
              <span> \
                  <!-- Include Font Awesome icon for delete icon here --> \
                  <i class='fa fa-trash card-delete' aria-hidden='true' onclick=\"confirm_modal(true, this.parentElement.parentElement.parentElement.parentElement)\"></i> \
              </span> \
          </div> \
          <p class='post-content-p'></p> \
          <div class='card-ellipsis'> \
              <!-- Include Font Awesome icon for horizontal ellipsis icon here --> \
              <i class='fa fa-ellipsis-h' aria-hidden='true' onclick='window.location.href=\"post.html\"'></i> \
          </div> \
      </div>";