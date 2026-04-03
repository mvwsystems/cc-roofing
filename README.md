# C&C Roofing — Website

Commercial & multi-family roofing website for C&C Roofing (Rockwall, TX).
Plain HTML/CSS/JS — no build step. Deploy direct to Netlify via GitHub.

## Structure

```
cc-roofing/
├── index.html          # Homepage
├── services.html       # Services detail page
├── projects.html       # Full project gallery
├── about.html          # About + certifications
├── contact.html        # Contact form + details
├── netlify.toml        # Deploy config, headers, redirects
├── README.md
├── css/
│   └── style.css       # All shared styles
├── js/
│   └── main.js         # Nav, scroll reveal, mobile menu
└── images/
    ├── CCRoofLogo1.png
    ├── CCRoofLogo2.png
    ├── MEZZO_2.PNG
    ├── Midtown_Station.PNG
    ├── Montgomery_Ridge.PNG
    ├── Sachse.PNG
    ├── Solea_Tavolo.PNG
    ├── Solea_Vintage_Park.PNG
    └── Star_Park_Las_Colinas.PNG
```

## Deploy

1. Push this folder to a GitHub repo
2. Connect repo to Netlify
3. Set publish directory to `/` (root)
4. Done — no build step needed

## Brand System

- **Colors:** Near-black `#0a0a0a`, Blue `#2563eb`, White `#ffffff`
- **Fonts:** Bebas Neue (display), Barlow Condensed (headings), Barlow (body)
- **Aesthetic:** Dark industrial, grain overlay, angular clip-paths, 1px grid separators

## TODO

- [ ] Swap hero `<img>` for `<video autoplay muted loop playsinline src="images/drone.mp4">`
- [ ] Hook up real form backend (currently FormSubmit → coy@candcroofers.com)
- [ ] Add favicon
- [ ] Add Open Graph meta tags for social sharing
- [ ] Connect custom domain
- [ ] Optimize images (convert PNG → WebP)
- [ ] Add Mod-Bit service card if client requests

Built by Titan AI
