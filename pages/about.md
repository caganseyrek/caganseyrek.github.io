---
title: About
permalink: /about
---
<section id="about">
    <div class="container pageheader">
        <h2>About Me</h2>
    </div>
    <div id="about-content" class="centered">
        <p>Hello! My name is Çağan Seyrek. I am currently in my 3rd year studying computer engineering.</p>
        <p>I began my programming adventure back in 2014 with HTML, CSS and a little bit of JavaScript (not really programming but anyways haha). Since the day I started, my interest and curiosity in programming has grown every day. Because of this interest and curiosity, I decided to study computer engineering.</p>
        <p>Although I initially focused on front-end when I first started programming, after I got into university, I also became interested in back-end and improved myself in that field too. Now I continue my path as a full-stack developer.</p>
        <div class="container">Also my name might look a little hard to pronounce. It's pronounced like "chaan". The letter "Ç" is pronounced like "ch" as in "chocolate" and the letter "ğ" is not pronounced at all 🤓</div>
        <p>I enjoy working with different languages and various frameworks. I enjoy learning new languages and frameworks to work with. Here's a brief list of the languages, frameworks and databases I work with and some tools that I use on my projects:</p>
    </div>
    <div id="techstackgrid" class="centered">
        {% for section in site.data.techstack %}
        <div class="container techstacksection">
            <h3>{{ section.title }}</h3>
            <div class="techstacklist">
                {% for tech in section.list %}
                <span class="container">{{ tech }}</span>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
</section>