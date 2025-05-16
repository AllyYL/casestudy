---
title: Weave
category: Case Studies
description: Web3 marketplace for NFT-backed phygital fashion
platform: iOS
image: /assets/images/WeaveCover.png
tags: [projects]
layout: project.njk
---

# Weave

Web3 marketplace for NFT-backed phygital fashion

<div class="fullwidth-image-container">
  <img src="/assets/images/WeaveCover.png" alt="Weave app interface showing NFT fashion marketplace">
</div>

<br>

## TL;DR

This case study explores how **complex product data can become a story** through social-native UX. I designed a card-based interface for WEAVE that transforms blockchain-backed supply chain data into clear, shareable experiences—bridging NFTs, e-commerce, and social apps.

<br>

## Context

WEAVE is a Web3 social commerce app offering a **phygital shopping experience** with NFT-based sustainability verification. I was brought in to design the MVP—building a unified UI system that connects physical garments to their blockchain-backed stories, with a focus on **clarity, shareability, and low-friction checkout**.

<br>
<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Client</h3>
        <p>WEAVE</p>
    </div>
    <div class="column-right">
        <h3>My Role</h3>
        <p>Product Designer</p>
    </div>
</div>
<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Platform</h3>
        <p>iOS</p>
    </div>
    <div class="column-right">
        <h3>Year</h3>
        <p>2022-2023</p>
    </div>
</div>

<br>

<div class="fullwidth-image-container">
  <img src="/assets/images/weave2.webp" alt="Weave app from physical scanning to storytelling process illustration">
</div>

## Result

<div class="layout-threecolumn">
    <div class="column-left">
        <h3>Conversion Rate</h3>
    </div>
    <div class="column-right">
        <p>Above industry average at 12.4%, improved product discovery and checkout flow reduced hesitation and <strong>helped first-time buyers convert faster</strong>.</p>
    </div>
</div>
<div class="layout-threecolumn">
    <div class="column-left">
        <h3>User-Generated Content</h3>
    </div>
    <div class="column-right">
        <p><strong>Over one-third</strong> of testing users posted at least <strong>one product story, comment, or review</strong> (measured over a 30-day period).</p>
    </div>
</div>
<div class="layout-threecolumn">
    <div class="column-left">
        <h3>Platform Stickiness</h3>
    </div>
    <div class="column-right">
        <p>With a DAU/MAU ratio at 31% , testing users <strong>return regularly</strong> for updates, not just purchases.</p>
    </div>
</div>
<br>

<div class="dark-blue-section">
    <br><br>
    <div class="plain">
        <h2>Problem Scope</h2><br>
        <p>Turn complex sustainability data into a format that's easy to read, Web3-friendly, and built for sharing on social media—no dense tables, no info overload.
    </div>
    <br><br>
</div>
<br>

## Competitive Analysis

Most platforms focus on either provenance tracking or community—not both. Through a quick audit of blockchain and e-commerce tools, I found space to merge the two: turning raw supply chain data into a social, story-driven experience. This became WEAVE's core differentiator.

<br>

<img src="/assets/images/competitive.png" alt="logos from competing companies in the crypto and e-commerce industries" style="width: 50%; display: block; margin: 0 auto;">

<br>

## User Research

What does sustainable fashion mean to online shoppers — and **what would convince users to switch platforms**? 

<div class="highlight-text">
    What actually builds credibility, curiosity, and conversion in a crowded, trend-sensitive market? 
</div>

To explore this, we conducted online surveys, as well as in-depth interviews with 14 potential users. We focused on perceptions of credibility, trust, and innovation in the context of fashion transparency.

<br>

<div class="quote-container">
  <p>Numbers won't win me over. Zara has done that too many times with their carbon-offset. Give me something I should care about.</p>
  <cite>— Anonymous shopper</cite>
</div>

<div class="quote-container">
  <p>I've yet to find a place where I can shop both physical AND digital fashion at the same time.</p>
  <cite>— Hannah, Fashion designer</cite>
</div>

<div class="quote-container">
  <p>It's one thing to own. To participate, be on-chain, and be part of it--that's a whole lot more attractive.</p>
  <cite>— NFT Collector</cite>
</div>

<br>

Our research surfaced a few consistent themes:

<ol style="list-style-position: decimal inside; padding-left: 1em; margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.6;">
    <li style="padding-left: 1em;">Users are skeptical of vague sustainability claims
	<li style="padding-left: 1em;">Users were drawn to an integrated platform with physical and digital capacities
	<li style="padding-left: 1em;">Social sharing and brand signaling played a bigger role than expected in conversion
</ol>

Through user interviews, we zeroed in on our Persona.

<br>


![A persona featuring Emily's goals and frustrations.](/assets/images/WeavePersona.png)


![A persona featuring Michael's goals and frustrations.](/assets/images/WeavePersona2.png)


<div class="dark-blue-section">
    <br><br>
    <div class="plain">
        <h2>Design Objectives</h2>
    </div>
    <br>
    <div class="layout-twocolumn">
        <div class="column-left">
            <h2>Integration</h2>
            <img src="/assets/images/integration.webp">
        </div>
        <div class="column-right">
            <p>Connect physical products and NFTs <strong>in one flow</strong>—no tab-switching, just tap-and-shop.</p>
        </div>
    </div>
    <br>
    <div class="layout-twocolumn">
        <div class="column-left">
            <h2>Simplification</h2>
            <img src="/assets/images/simplification.webp">
        </div>
        <div class="column-right">
            <p>Synthesize and layer information—<strong>hide jargons, show what matters</strong>.</p>
        </div>
    </div>
    <br>
    <div class="layout-twocolumn">
        <div class="column-left">
            <h2>Participation</h2>
            <img src="/assets/images/participation.webp">
        </div>
        <div class="column-right">
            <p>Let users explore the supply chain as a <strong>story</strong>—flippable, stackable, shareable.</p>
        </div>
    </div>
    <br><br>
</div>

<br>

Now, let's tackled these three objectives one by one.

<br>


## Wireframe: Tackling Phygital Integration

The core flow guides new users to register, browse, and buy physical garment AND digital NFTs in one seamless experience.

![WEAVE's primary user flow](/assets/images/WeavePrimaryFlow.webp)

A secondary flow exists when a user already owns a physical garment and wants to access its NFT twin through the app.

![WEAVE's physical garment led user flow](/assets/images/weavephysicalflow.jpeg)

<br>

## User Testing

With a solid foundation in place, I created a minimal prototype. The usability study surfaced key friction points, leading to two major design changes:

<br>

### ① Perfecting Integrated Checkout

<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Problem</h3>
        <p>Wallet setup was mandatory before checkout, leading to drop-offs.</p>
    </div>
    <div class="column-right">
        <h3>Solution</h3>
        <p>Introduced <strong>guest checkout</strong> with auto-wallet creation by email. <strong>Wallet setup is deferred to post-purchase</strong>.</p>
    </div>
</div>

<div class="fullwidth-image-container">
  <img src="/assets/images/usertest1.png" alt="Before and after userflow for guest checkout">
</div>

### ② Information for Depth, Not Overload

<div class="layout-twocolumn">
    <div class="column-left">
        <h3>Problem</h3>
        <p>The full supply chain breakdown was shown upfront, overwhelming users who were here to shop.</p>
    </div>
    <div class="column-right">
        <h3>Solution</h3>
        <p><strong>A dynamic card stacknig visual that shows</strong>high-level summary before checkout and a full supply chain tracking experience post-purchase.</p>
    </div>
</div>

![Before and after userflow for guest checkout](/assets/images/usertest2.png)

<br>

## Kicking it up to high fidelity

I started shaping WEAVE's visual design by gathering references, research, and inspiration to define its brand identity.

<div class="fullwidth-image-container">
  <img src="/assets/images/hifidelity.png" alt="Weave app interface showing NFT fashion marketplace">
</div>

<div class="highlight-text">
    The magic of strong visuals and digestable narratives for socials.
</div>

Each step in the garment history and each stakeholder in the supplychain is brokendown into digestable, sharable pieces. Meeting the needs of social-native users.

<br>

<div class="fullwidth-image-container">
  <img src="/assets/images/CardSocial.png" alt="Prototype of WEAVE highlighting the ease of sharing garment history on socials">
</div>

<div class="highlight-text">
    An one-stop integrated <br>checkout flow
</div>

<div style="text-align: center; width: 60%; margin-left: auto; margin-right: auto;">
  <img src="/assets/images/OneStopShop.png" alt="3D View + integrated checkout system (more on this later)." style="max-width: 100%; height: auto;">
</div>

<div class="highlight-text">
   Dynamic UI<br>Stack, Scroll, Expand
</div>

Key details upfront, deeper data on flip—balancing transparency with engagement. Users explore at their own pace.

<video autoplay loop muted playsinline style="width: 100%; height: auto; display: block; clip-path: inset(0 0 5px 0);">
  <source src="/assets/images/cardflip.mov" type="video/mp4">
</video>

Dynamic card flip to decluster and store information--Key information upfront, and supporting evidence, certificates, data points in the back.

<br>

<div style="text-align: center; width: 60%; margin-left: auto; margin-right: auto;">

  ![Card stacking motion).](/assets/images/stack.gif)
</div>

A concept demo to showcase the physical to digital "stacking" behind the choice of card deck UI.

<div style="text-align: center;">

![NFC tag scan to access product.](/assets/images/conceptnft.gif)

</div>

<br>

---

<br>

## Style Guide

Logo, color, typography

![Style guide for WEAVE](/assets/images/weavebrand.webp)

<br>

---

<br>

## Future Recommendations

This project taught me the importance of simplifying complex information and the value of user-centered design in building trust and engagement. It reinforced my belief in the power of design to make sustainability more accessible and understandable.