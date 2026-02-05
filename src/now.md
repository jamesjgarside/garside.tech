---
layout: base.njk
title: Now - James Garside
---
# What I'm Doing Now
*Updated January 26, 2026 from MPLS, MN*

It's a new year and I'm between jobs. While I have some free time for projects, I'm thankful to have flexibility and slower pace while <a href="https://aje.news/csg3li" target="_blank">living under occupation</a>.

## Creativity

<details class="learning-detail">
<summary class="learning-summary">
<strong>JAMstack & Static Site Generators</strong>
</summary>
<div class="learning-content">
Building this site taught me a lot about 11ty, modern CSS, and privacy-first web design. Currently exploring how to add more interactivity while maintaining the no-JavaScript gimmick.

**Current focus:**
- CSS-only interactive components
- RSS feed optimization
- Performance and accessibility
- Making content (The hard part!)
</div>
</details>

<details class="learning-detail">
<summary class="learning-summary">
<strong>Finishing Home Improvement Projects</strong>
</summary>
<div class="learning-content">
With cold weather outside and the house to myself, I've been cleaning and organizing inside.

**Current focus:**
- Cooking meals, developing recipes and organizing the kitchen
- New paneling, trim, and paint on our 3-season porch
- Drywall repair and paint throughout
</div>
</details>

## Consumption

<!-- Reading/Watching Grid -->
<div class="media-clean-grid">
  <div class="media-cover-item">
    <img src="/assets/covers/reading-1.jpg" alt="Cover of Didion and Babitz by Lili Anolik" class="grid-cover reading-cover" 
         data-title="Didion & Babitz" 
         data-author="by Lili Anolik" 
         data-blurb="I could do without the author inserting herself into the story so much, but as a cultural study it's effective. Read <i>Slouching Towards Bethlehem</i> and <i>
Eve's Hollywood</i> instead of this if you haven't.">
  </div>
  
  <div class="media-cover-item">
    <img src="/assets/covers/reading-2.jpg" alt="Cover of Class by Paul Fussell" class="grid-cover reading-cover" 
         data-title="Class: A Guide Through the American Status System" 
         data-author="by Paul Fussell" 
         data-blurb="This is a dated examination of class in the US packed with snobbery and snark. Fun to reflect how some class distinctions have completely changed and others are more relevant than ever.">
  </div>
  
  <div class="media-cover-item">
    <img src="/assets/covers/reading-3.jpg" alt="Current watch" class="grid-cover reading-cover" 
         data-title="Succession" 
         data-author="Season 4" 
         data-blurb="Loved the series finale. The entire fourth season felt appropriately chaotic and rushed. Why shouldn't it? Having grown up without siblings around, the Roy children's dynamics are my favorite.">
  </div>
  
  <div class="media-cover-item">
    <div class="placeholder-cover reading-cover" 
         data-title="Coming Soon" 
         data-author="Placeholder" 
         data-blurb="More reading and watching to come...">+</div>
  </div>
</div>

<div id="media-info-display" class="media-info-display"></div>

<!-- Listening Grid -->
<div class="media-clean-grid">
  <div class="media-cover-item">
    <img src="/assets/covers/listening-1.jpg" alt="Current listen 1" class="grid-cover listening-cover" 
         data-title="Don't be Dumb" 
         data-author="by ASAP Rocky" 
         data-blurb="Peak Dad Rap. I don't care if this confirms my metamorphosis into an old head, this record is fantastic and it's better than anything that came out last year. It's not only old sounds for fan service, Rocky keeps pushing the artistic envelope on every album.">
  </div>
  
  <div class="media-cover-item">
    <img src="/assets/covers/listening-2.jpg" alt="Current listen 2" class="grid-cover listening-cover" 
         data-title="KPop Demon Hunters (Soundtrack from the Netflix Film)" 
         data-author="by Various Artists" 
         data-blurb="I'm sick of hearing it. My family won't stop playing it. I heard &quot;Golden&quot; while shopping at a retailer the other day and thought I was hallucinating.">
  </div>
  
  <div class="media-cover-item">
    <div class="placeholder-cover listening-cover" 
         data-title="Coming Soon" 
         data-author="Placeholder" 
         data-blurb="More music to come...">+</div>
  </div>
  
  <div class="media-cover-item">
    <div class="placeholder-cover listening-cover" 
         data-title="Coming Soon" 
         data-author="Placeholder" 
         data-blurb="More music to come...">+</div>
  </div>
</div>

<script>
const display = document.getElementById('media-info-display');
let currentCover = null;

document.querySelectorAll('.grid-cover, .placeholder-cover').forEach(cover => {
  cover.style.cursor = 'pointer';
  
  cover.addEventListener('click', () => {
    // If clicking the same cover, close it
    if (currentCover === cover && display.classList.contains('active')) {
      display.classList.remove('active');
      cover.classList.remove('active');
      currentCover = null;
      return;
    }
    
    // Remove active from previous cover
    if (currentCover) currentCover.classList.remove('active');
    
    // Add active to new cover
    cover.classList.add('active');
    currentCover = cover;
    
    // Update display content
    const title = cover.getAttribute('data-title');
    const author = cover.getAttribute('data-author');
    const blurb = cover.getAttribute('data-blurb');
    
    display.innerHTML = `
      <button class="close-info">×</button>
      <strong>${title}</strong><br>
      <span class="media-author">${author}</span>
      <p class="media-blurb">${blurb}</p>
    `;
    display.classList.add('active');
    
    // Add close button handler
    display.querySelector('.close-info').addEventListener('click', () => {
      display.classList.remove('active');
      cover.classList.remove('active');
      currentCover = null;
    });
  });
});
</script>

---

*This is a [now page](https://nownownow.com/about), inspired by Derek Sivers.*
