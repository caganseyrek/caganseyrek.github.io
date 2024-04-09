---
title: Home
permalink: /
---
<section id="intro">
    <div id="intro-wrapper">
        <div id="general-cat" title="My dear profile picture!"></div>
        <h1>Hey, I’m Çağan!</h1>
        <p>I’m a 3rd-year computer engineering student who loves full-stack web development and the open-source way of sharing, collaborating and improving tech together for everyone.</p>
        <div id="socials">
            {% for link in site.data.socials %}
            <a class="btn" href="{{ link.path}}" target="_blank">{{ link.title }}<svg class="icon" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M1.94595 0C0.871186 0 0 0.871216 0 1.94595V16.0541C0 17.1288 0.871186 18 1.94595 18H16.0541C17.1288 18 18 17.1288 18 16.0541V10.7027C18 10.1654 17.5643 9.72973 17.027 9.72973C16.4897 9.72973 16.0541 10.1654 16.0541 10.7027V16.0541H1.94595V1.94595H6.81081C7.34813 1.94595 7.78378 1.51032 7.78378 0.972973C7.78378 0.435623 7.34813 0 6.81081 0H1.94595Z M18 1.94595V6.81081C18 7.34816 17.5644 7.78378 17.0271 7.78378C16.4897 7.78378 16.0541 7.34816 16.0541 6.81081V3.02032L8.38836 10.6861C8.00829 11.066 7.39234 11.066 7.01228 10.6861C6.63233 10.3061 6.63233 9.69003 7.01228 9.31008L14.3764 1.94595H10.7027C10.1654 1.94595 9.72976 1.51032 9.72976 0.972973C9.72976 0.435623 10.1654 0 10.7027 0H16.0541C17.1288 0 18 0.871216 18 1.94595Z"/></svg></a>
            {% endfor %}
        </div>
    </div>
</section>