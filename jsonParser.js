document.addEventListener('DOMContentLoaded', initiate);

function initiate() {
    const path = window.location.href;
    const page = path.split("?").pop();
    const params = new URLSearchParams(page);

    if (document.title == "croissantderp") {
        let i = 0;
        const target = document.getElementById("projects-short");
        for (let project of projects) {
            let div = document.createElement("div");
            div.className = "project";
            div.innerHTML = "<a href=\"projects.html?proj=" + project.link + "\"></a><p>" + project.title + "</p><img src=\"./media/" + project.cover + "\" />"
            target.insertBefore(div, target.lastElementChild);
            if (i >= 3) break;
            i++;
        }

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
    else if (document.title == "Projects") {
        const target = document.getElementById("projects");
        if (params.has("proj")) {
            let titles = projects.map(item => item.link);
            if (titles.includes(params.get("proj"))) {
                let project = projects[titles.indexOf(params.get("proj"))];
                document.getElementsByClassName("title")[0].innerHTML = project.title;
                let div = document.createElement("div");
                div.className = "entry";

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
            }
        }
        else {
            for (let project of projects) {
                let div = document.createElement("div");
                div.className = "project";
                div.innerHTML = "<a href=\"projects.html?proj=" + project.link + "\"></a><p>" + project.title + "</p><img src=\"./media/" + project.cover + "\" />"
                target.appendChild(div);
            }
        }
    }
    else if (document.title == "Posts") {
        const target = document.getElementById("posts");
        if (params.has("post")) {
            let titles = posts.map(item => item.link);
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
                console.log(index);
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


