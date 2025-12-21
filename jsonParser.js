document.addEventListener('DOMContentLoaded', initiate);

function initiate() {
    const path = window.location.href;
    const page = path.split("?").pop();
    const params = new URLSearchParams(page);

    //if it is landing page
    if (document.title == "croissantderp") {
        const target = document.getElementById("projects-short");

        //shows first five projects on front page
        let i = 0;
        for (let project of projects) {
            let div = document.createElement("div");
            div.className = "project";
            div.innerHTML = "<a href=\"projects.html?proj=" + project.link + "\"></a><p>" + project.title + "</p><img src=\"./media/" + project.cover + "\" />"
            target.insertBefore(div, target.lastElementChild);
            if (i >= 4) break;
            i++;
        }

        //shows first three projects on front page
        i = 0;
        const target2 = document.getElementById("posts-short");
        for (let post of posts) {
            let div = document.createElement("div");
            div.className = "post";
            div.innerHTML = "<div class=\"line\"></div><h2>" + post.title + "</h2><p>" + post.summary + "</p><a href=\"posts.html?post=" + post.link + "\">continued...</a>"
            target2.appendChild(div);
            if (i >= 2) break;
            i++;
        }
    }
    //if it is portfolio page
    else if (document.title == "Portfolio") {
        const target = document.getElementById("projects");
        const footer = document.getElementById("footer");

        //if a specific project is selected in the URL
        if (params.has("proj")) {
            let titles = projects.map(item => item.link);
            if (titles.includes(params.get("proj"))) {
                let project = projects[titles.indexOf(params.get("proj"))];

                //shows name of selected project 
                document.getElementsByClassName("title")[0].innerHTML = project.title;
                let div = document.createElement("div");
                div.className = "entry";

                //replaces text surrounded by %% with images
                let splitDesc = project.description.split("%%");
                let finalString = "";
                for (let i = 0; i < splitDesc.length; i++) {
                    if (i % 2 == 0) {
                        finalString = finalString + "<p>" + splitDesc[i] + "</p>";
                    }
                    else {
                        finalString = finalString + "<img src=\"./media/" + splitDesc[i] + "\" />";
                    }
                }
                div.innerHTML = finalString;
                target.appendChild(div);

                //shows posts tagged with the project at bottom
                let postTags = posts.filter(item => item.tag == project.title);
                if (postTags.length != 0) {

                    //adds header for posts
                    let h1 = document.createElement("h1");
                    h1.className = "title";
                    h1.innerHTML = "Related Posts";
                    document.body.insertBefore(h1, footer);

                    //generates posts and appends them
                    for (i = 0; i < postTags.length; i++) {
                        post = postTags[i];
                        let div2 = document.createElement("div");
                        div2.className = "entry";
                        splitDesc = post.description.split("%%");
                        finalString = "<h2>" + post.title + "</h2>";
                        for (let i = 0; i < splitDesc.length; i++) {
                            if (i % 2 == 0) {
                                finalString = finalString + "<p>" + splitDesc[i] + "</p>";
                            }
                            else {
                                finalString = finalString + "<img src=\"./media/" + splitDesc[i] + "\" />";
                            }
                        }

                        div2.innerHTML = finalString;
                        document.body.insertBefore(div2, footer);
                    }
                }

            }
        }
        //show generic projects page
        else {
            for (let project of projects) {
                let div = document.createElement("div");
                div.className = "project";
                div.innerHTML = "<a href=\"projects.html?proj=" + project.link + "\"></a><p>" + project.title + "</p><img src=\"./media/" + project.cover + "\" />"
                target.appendChild(div);
            }
        }
    }
    //if it is posts page
    else if (document.title == "Posts") {
        const target = document.getElementById("posts");

        //if a specific post is selected in the URL
        if (params.has("post")) {
            let titles = posts.map(item => item.link);

            //does the same thing as above
            if (titles.includes(params.get("post"))) {
                let index = titles.indexOf(params.get("post"));
                let post = posts[index];
                document.getElementsByClassName("title")[0].innerHTML = post.title;
                let div = document.createElement("div");
                div.className = "entry";

                let splitDesc = post.description.split("%%");
                let finalString = "";
                for (let i = 0; i < splitDesc.length; i++) {
                    if (i % 2 == 0) {
                        finalString = finalString + "<p>" + splitDesc[i] + "</p>";
                    }
                    else {
                        finalString = finalString + "<img src=\"./media/" + splitDesc[i] + "\" />";
                    }
                }
                if (index < titles.length - 1) {
                    finalString = finalString + "<a href=\"posts.html?post=" + titles[index + 1] + "\"><< Previous Post</a> ||";
                }
                finalString = finalString + " <a href=\"./posts.html\">All Posts</a> ";
                if (index > 0) {
                    finalString = finalString + "|| <a href=\"posts.html?post=" + titles[index - 1] + "\">Next Post >></a>";
                }
                div.innerHTML = finalString;
                target.appendChild(div);
            }
        }
        //show generic posts page
        else {
            for (let post of posts) {
                let div = document.createElement("div");
                div.className = "post";
                div.innerHTML = "<a href=\"posts.html?post=" + post.link + "\">" + post.date + " | " + post.title + "</a>";
                target.appendChild(div);
            }
        }
    }
}


