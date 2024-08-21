---
title:
permalink: /
---

<section id="hero">
	<div id="hero-wrapper">
		<p>
			Computer engineering student and software developer who enjoys creating open-source projects. Welcome to my page.
		</p>
		<div id="hero-links">
			<a href="{{ site.github_profile }}" target="_blank">
				GitHub <i data-feather="external-link"></i>
			</a>
			<a href="{{ site.linkedin_profile }}" target="_blank">
				LinkedIn <i data-feather="external-link"></i>
			</a>
		</div>
	</div>
	<img
		id="general-cat"
		alt="General Cat"
		src="/assets/images/general_cat.webp"
		title="My dear profile picture" />
</section>
<hr />
<section id="about">
	<h3>About Me</h3>
	<p>
		I'm a 3rd-year computer engineering student passionate about software development, and open-source way of collaborating and improving tech together for everyone. I enjoy working with various languages and frameworks to create all sorts of projects.
	</p>
	<ul id="techlist">
		<li><b>Frameworks &#x279C;</b> React, ASP.NET Core, Express.js, Svelte, Flask</li>
		<li><b>Languages &#x279C;</b> JavaScript, TypeScript, C#, Python, Java, C, C++, CSS, HTML</li>
		<li><b>Tools &#x279C;</b> VSCode, Visual Studio, Git, Postman, Linux (WSL), Figma</li>
	</ul>
</section>
<hr />
<section id="projects">
	<div>
		<h3>Project Highlights</h3>
		<a href="{{ site.github_profile }}?tab=repositories" target="_blank">
			View All on GitHub <i data-feather="external-link"></i>
		</a>
	</div>
	<div id="projectsgrid">
	{% for project in site.data.projects %}
		<div class="project">
			<a href="{{ project.source }}" target="_blank">
				{{ project.title }} <i data-feather="external-link"></i>
			</a>
			<p>{{ project.description }}</p>
		</div>
	{% endfor %}
	</div>
</section>
