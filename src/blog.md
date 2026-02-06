---
layout: base.njk
title: Blog
---
# Writing


<a href="/feeds/blog.xml" class="rss-link" title="Subscribe to all posts via RSS">RSS Feed</a>

## Recent Posts
{% for post in collections.blog %}
<article class="post-preview">

### [{{ post.data.title }}]({{ post.url }})
<p class="meta">{{ post.data.date | readableDate }}</p>

{{ post.data.excerpt }}

{% if post.data.tags %}
<p class="tags">
  {% for tag in post.data.tags %}
  <a href="#{{ tag }}" class="tag">{{ tag }}</a>
  {% endfor %}
</p>
{% endif %}

</article>
{% endfor %}

## By Topic

{% for tag in collections.tagList %}

<h3 id="{{ tag }}">{{ tag | capitalize }}</h3>

{% for post in collections.blog | byTag(tag) %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}

{% endfor %}
