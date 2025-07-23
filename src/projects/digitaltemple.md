---
title: Digital Temple
category: Case Studies
description: Design for education. An interactive archive for cultural heritage site.
platform: web, mobile
image: /assets/images/digitaltemple.webp
tags: [projects]
layout: projectDT.njk
---

# Digital Temple

An interactive web archive designed for immersive learning

<br>

<div class="fullwidth-image-container">
  <img src="/assets/images/DTCover.webp" alt="Digital Temple cover image">
</div>

## Overview

From architectural space to speculative UX—**<b>this project explores how design can best faciliate the learning of foreign & esoteric subjects</b>**. I was the **project manager** and **product designer** for a series of educational websites focused on Kaihua Monastery. The site itself features **annotated images, virtual gallery, interactive 3D models, and learning games** to explore Buddhist art history.
<br><br>

<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Organization</h3>
        <p><a href="https://camlab.fas.harvard.edu/project/digital-temple/">Harvard FAS CAMLab</a></p>
    </div>
    <div class="column-right">
        <h3>My Role</h3>
        <p>Product Designer, Project Manager</p>
    </div>
</div>
<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Project Site</h3>
        <p>
            <a href="https://www.digitaltemple.art">digitaltemple.art</a>
            <a href="https://www.digitaltemple.art" 
               style="display: inline-block; margin-left: 0.7em; padding: 0.2em 0.8em; font-size: 0.9em; background: #fff; color: #000; border-radius: 4px; text-decoration: none; font-weight: 500; border: none; transition: background 0.2s;"
               onmouseover="this.style.background='#7e7e7e';"
               onmouseout="this.style.background='#fff';"
               target="_blank" rel="noopener">Visit Site</a>
        </p>
    </div>
    <div class="column-right">
        <h3>Year</h3>
        <p>Jun 2022-Feb 2024</p>
    </div>
</div>

<br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

<h3>Context</h3>
<div class="layout-threecolumn">
    <div class="column-left">
        <img src="/assets/images/context.png" alt="Vision illustration" style=" max-width: 75%; border-radius: 6px;">
    </div>
    <div class="column-right">
        <p>Do you know <strong>85%</strong> of Buddhist temples worldwide are unprotected and not open to the public? 
        
        There is <strong>little to no digital data</strong> on Kaihua Monastery, and we can only learn about this hidden heritage site from the research of few scholars.</p>
    </div>
</div>

<h3>Vision</h3>
<div class="layout-threecolumn">
    <div class="column-left">
        <img src="/assets/images/vision.png" alt="Vision illustration" style="margin-top: 1em; max-width: 80%; border-radius: 6px;">
    </div>
    <div class="column-right">
        <p>Our goal was to <strong>innovate</strong> traditional ways of <strong>online learning</strong>, and make it easier for a global audience to understand the storylines and appreciate artworks in the digital world.

        We are devoted to <strong>preserving</strong> and revitalizing the digital assets of the fragile Buddhist art heritage. 
        </p>
    </div>
</div>
<br>

<div class="dark-blue-section">
    <br><br>
    <div class="plain">
        <h2>Design Challenge</h2><br>
        <h3>How might we make medieval Buhddist art more accessible and engaging for a global audience through digital experiences?</h3>
    </div>
    <br><br>
</div>
<br>

## UX Research

<div class="layout-threecolumn-2">
    <div><h1>10+</div>
    <div><h1>25</div>
    <div><h1>140+</div>
</div>
<div class="layout-threecolumn-2">
    <div>Deep User Interviews</div>
    <div>Zoom Workshops</div>
    <div>Survey Forms</div>
</div>
<br>

After conducting **in-person user interviews** with students, scholars, and public audiences, hosting Zoom meetings with the Harvard Art History research team, collecting **Google form survey data**, and creating **user journey mapping**, we identified and understood current users' needs and learning goals. 

<a href="/assets/images/UXresearch.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/UXresearch.png" alt="UX research diagram" style="width:100%; max-width:900px; display:block; margin:auto;">
</a>

<br>

## Problems & Opportunities

Working closely with scholars, we realized that **academic researches are layered and labyrinthian, yet graphics are usually very upfront**. How might we preserve the depth of scholarship without overwhelming the user?
<br><br>
<a href="/assets/images/problems.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
  <img src="/assets/images/problems.png" alt="Problems and opportunities diagram" style="display: block; margin: 0 auto; max-width: 100%; cursor: zoom-in;">
</a>
<script>
function enlargeImage(link) {
  // If popup already exists, remove it
  const existing = document.getElementById('popup-image-modal');
  if (existing) {
    existing.remove();
    document.body.style.overflow = '';
    return;
  }
  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'popup-image-modal';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.85)';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 9999;
  overlay.style.cursor = 'zoom-out';

  // Create enlarged image
  const img = document.createElement('img');
  img.src = link.href;
  img.alt = link.querySelector('img').alt;
  img.style.maxWidth = '90vw';
  img.style.maxHeight = '90vh';
  img.style.boxShadow = '0 4px 32px rgba(0,0,0,0.5)';
  img.style.borderRadius = '6px';

  overlay.appendChild(img);

  // Click overlay to close
  overlay.onclick = function() {
    overlay.remove();
    document.body.style.overflow = '';
  };

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}
</script>

By analyzing the research data above and conducting card sorting to narrow down our scope, we found four main **opportunity spaces** we'd like to address: **lack of accessibility, difficulty of comprehension, lack of interest, and limited visual clarity**. 
<br><br><br><br>
<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

## Design Solutions
This project asked how we might turn a sacred, ambiguous architectural site into a speculative, interactive experience—without flattening its meaning or imposing a fixed narrative.

<br><br>

<div class="layout-twocolumn">
    <div class="column-left">
        <video autoplay loop muted playsinline style="margin: auto; width: 100%; height: auto; display: block; padding-right: 1em">
        <source src="/assets/images/landscape.mp4" type="video/mp4"></video>
    </div>
    <div class="column-right">
        <h3>Solution 1: Spatial Experience--Make 2D into 3D</h3>
        <p>
        Collaborating with CG artists, historians, and architects, we brought the monastic space and the murals online with <strong>fast-loading, interactive 3D</strong>.
        </p>
    </div>
</div>
<br><br><br><br>
<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Solution 2: Layering Information</h3>
        <p>
        Addressing user <strong>painpoints</strong> from researchers who had to <strong>jump between platforms</strong> to access different types of data, we layered research, spatial data, and multimedia content into <strong>one single interface</strong>, all accesible in their native environment.
        </p>
    </div>
    <div class="column-right">
        <video autoplay loop muted playsinline style="margin: auto; width: 100%; height: auto; display: block;">
        <source src="/assets/images/temporalstructure.mp4" type="video/mp4"></video>
    </div>
</div>
<br><br><br><br>
<div class="layout-twocolumn">
    <div class="column-left">
        <img src="/assets/images/Annotation.gif" alt="Animated demonstration of interactive annotation feature." style="width: 100%; border-radius: 4px;">
    </div>
    <div class="column-right">
        <h3>Solution 3: Interactive Annotation</h3>
        <p>
        We combed through the complex mural images and divided the narrative into small modules. Through user testing, we found out that this is a much more engaging way to learn. Students showed <strong>better understanding</strong> of the storyline and <strong>did better in image-text matching tests<strong>.
        </p>
    </div>
</div>
<br><br><br><br>
<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Solution 4: Gamify Learning</h3>
        <p>
        We designed learning games into the experience. Users can complete a 16-scene graphic and text matching quiz based on what they've learned and share the results on <strong>social media</strong>.
        </p>
    </div>
    <div class="column-right">
        <div class="column-left">
        <img src="/assets/images/game.gif" alt="Animated demonstration of interactive annotation feature." style="width: 100%; border-radius: 4px;">
    </div>
    </div>
</div>
<br><br><br><br>
<div class="layout-twocolumn">
    <div class="column-left">
        <img src="/assets/images/archive.gif" alt="Animated demonstration of interactive annotation feature." style="width: 100%; border-radius: 4px;">
    </div>
    <div class="column-right">
        <h3>Solution 5: Archive Everything</h3>
        <p>
        A consolidated archive of high-resolution images categorized and labeled:  This feature speaks directly to the <strong>use case</strong> where scholars navigate the site for research and bibliography-writing purposes.
        </p>
    </div>
</div>

<br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">
<br>

## Information Architecture

<a href="/assets/images/infoarchitecture.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/infoarchitecture.png" alt="Information Architecture diagram" style="width:100%; max-width:900px; display:block; margin:auto;">
</a>


## Wireframes

![](/assets/images/gridlayout.jpg)

## Design System

<img src="/assets/images/design system.png" alt="An infograph showing branding guidelines">

<!-- <img src="/assets/images/gridlayout.jpg" alt="An infograph showing grid layout guidelines"> -->

<br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

<br>

## Usability Testing

Moving through **rapid animated prototyping**, we conducted **5 rounds of interviews with 40 participants** after establishing our usability testing metrics. We identified 35 issues and devised 18 actionable items. 

Our design team identified **UI challenges**, usability issues, and under-addressed **painpoints**, leading to targeted improvements in subsequent iterations.
<br><br><br>


### 1. Improving Spatial & Narrative Clarity
<br>
<a href="/assets/images/DTtest2.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/DTtest2.png" alt="Information Architecture diagram" style="width:100%; max-width:900px; display:block; margin:auto;">
</a>
<br>
<div class="layout-threecolumn">
    <div class="column-left">
        <p>We made major upgrades to the interactive annotation components. Improving spatial and narrative clarity.
    </div>
    <div class="column-right">
     <a href="/assets/images/Annotation.gif" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/Annotation.gif" alt="Animated GIF showing annotation process" style="width: auto; display: block; margin: 0; outline: 1px solid #0ED100;">
    </a></div>
</div>
<br><br><br>

### 2. Fast-load, intuitive, lean
<br>
<a href="/assets/images/DTtest3.png" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/DTtest3.png" alt="Information Architecture diagram" style="width:100%; max-width:900px; display:block; margin:auto;">
</a>
<br>
<div class="layout-threecolumn">
    <div class="column-left">
        <p>We made major upgrades to the interactive annotation components. Improving spatial and narrative clarity.
    </div>
    <div class="column-right">
     <a href="/assets/images/optical.gif" target="_blank" onclick="event.preventDefault(); enlargeImage(this);">
    <img src="/assets/images/optical.gif" alt="Animated GIF showing annotation process" style="width: auto; display: block; margin: 0; outline: 1px solid #0ED100;">
    </a></div>
</div>
<br><br><br><br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

<!-- ## Design Principles

<div class="layout-fourcolumn">
    <div><strong>Immersive Experience</strong></div>
    <div><strong>Data Visualization</strong></div>
    <div><strong>Sensory Engagement</strong></div>
    <div><strong>Gamified Learning</strong></div>
</div>
<div class="layout-fourcolumn">
    <div>Satisfaction</div>
    <div>Views</div>
    <div>Likes on Instagram</div>
    <div>New Collaborations</div>
</div>
<br><br><br>
<div style="overflow-x: auto; white-space: nowrap; padding-bottom: 1rem; margin-bottom: 2rem;">
    <img src="/assets/images/dt_thumb1.jpg" alt="Digital Temple Screenshot 1" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
    <img src="/assets/images/dt_thumb2.jpg" alt="Digital Temple Screenshot 2" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
    <img src="/assets/images/dt_thumb3.jpg" alt="Digital Temple Screenshot 3" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
    <img src="/assets/images/dt_thumb4.jpg" alt="Digital Temple Screenshot 4" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
    <img src="/assets/images/dt_thumb5.jpg" alt="Digital Temple Screenshot 5" style="height: 100px; margin-right: 12px; border-radius: 4px; display: inline-block;">
</div>


<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

<br> -->

## Museum Exhibitions & VR

Alongside the digital application, we also curated physical exhibitions at Harvard University and in various museum spaces in Asia, featuring art installations, immersive theater, and academic events. 
<br><br>
<div class="layout-twocolumn">
    <div class="column-left">
        <img src="/assets/images/Installation2.webp" style="text-align: center" alt="Installation shot of Digital Temple at the exhibition space CAMLab Cave, Cambridge, 2023">
    </div>
    <div class="column-right">
        <img src="/assets/images/dt_installation.png" style="text-align: center" alt="Installation shot of Digital Temple at the exhibition space CAMLab Cave, Cambridge, 2023">
    </div>
</div>
<br><br>

We also crated complimentary <strong>VR experience</strong>, where users can view the temple in 360 degree mode through either their tablets or VR goggles.

<div class="layout-gallery">
    <div style="position: relative; padding: 56.25% 0 0 0;">
        <iframe src="https://player.vimeo.com/video/967074183?autoplay=1&loop=1&muted=1&controls=1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

<br>

<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

## Impact

<div class="layout-fourcolumn">
    <div><h1>+90%</h1></div>
    <div><h1>1.1 M</h1></div>
    <div><h1>1535</h1></div>
    <div><h1>+4</h1></div>
</div>
<div class="layout-fourcolumn">
    <div>Satisfaction</div>
    <div>Views</div>
    <div>Likes on Instagram</div>
    <div>New Collaborations</div>
</div>
<br><br>
<div class="layout-twocolumn">
    <div class="column-left">
        <img src="/assets/images/impact.png" alt="Vision illustration" style=" max-width: 90%; border-radius: 2px;">
    </div>
    <div class="column-right">
        <p>After the project launched, user interviews revealed that <strong>90%</strong> of participants gained new knowledge about Buddhist art through the Digital Temple experience. 
        
        On Instagram, the project reached over <strong>1 million views</strong>, received <strong>1,535 comments</strong>, and sparked collaboration inquiries from <strong>4 research institutions and art organizations</strong>. 
        
        Engagement continues to grow steadily.</p>
    </div>
</div>
<br>
<hr style="border: none; border-top: 0.7px solid #fff; width: 100vw; margin-left: calc(-50vw + 50%); margin-top: 2rem; margin-bottom: 2rem;">

## Reflections

Aside from much rumination over content, I was also interested in exploring those 4 topics through this project:

**Visual design with and through creative technology** <br>
As a small media lab, we try to connect creative tech with academic research as well as public interest. Visual design is the bridge that connects them.

**Making complexities simple**<br>
Academic researches are layered and labyrinthian, yet we realize graphics are usually very upfront. How does the latter convey the former?

**Multidisciplinary collaboration, done remotely** <br>
How do you talk to, make request from, and send assets to developers, architects, scholars, visual artists, writers, and those who come in to play test?

**Managing is a maker's skill** <br>
Alongside of designing, I also acted as the project manger. It felt very different to be in a managing role.