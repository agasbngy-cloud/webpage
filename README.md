# Agatha A. Sabungey – Personal Portfolio

Dark olive green portfolio built with plain HTML, CSS and JavaScript (no frameworks).

```
personal-portfolio/
├── index.html
├── style.css
├── script.js
├── assets/profile.jpg
└── README.md
```

## Design concept
Dark olive green theme (colors are CSS variables at the top of `style.css`), serif headings (Fraunces) with Inter body text. Sections: Hero → About → Resume (education timeline, skills cards, coursework) → Projects → Contact → Footer.

## Customize
| What | Where |
|---|---|
| Colors / fonts / spacing | `:root` in `style.css` |
| Photo | replace `assets/profile.jpg` (keep the name). Adjust `object-position` / `scale` on `.hero__photo img` to re-frame |
| Intro, About text | `#home` and `#about` in `index.html` |
| Skills / education | `#resume` in `index.html` – delete anything you haven't actually learned |
| Projects | copy an `<article class="project">` block; replace the "View project" and repository links with the exact repo or live demo URLs |
| Contact links | `#contact` and footer in `index.html` |

## Run locally (VS Code)
1. Open the folder in VS Code → install the **Live Server** extension.
2. Right-click `index.html` → **Open with Live Server**.
3. Test the mobile menu and layout using browser DevTools (F12 → device toolbar).

## Contact form
The form only validates input; it does **not** send anything. To receive messages, point it at a form service such as [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com): create a form there, set `action` and `method="post"` on `<form id="contactForm">`, and in `script.js` replace the `e.preventDefault()` success branch with a `fetch()` POST (or remove `novalidate` handling and let the browser submit after validation).

## Publish on GitHub Pages
1. On github.com click **New repository** → name it e.g. `personal-portfolio` → Public → Create.
2. Upload: **Add file → Upload files** and drop everything (including the `assets` folder), or use git:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/agasbngy-cloud/personal-portfolio.git
   git push -u origin main
   ```
3. Repo **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
4. After a minute your URL appears at the top of that page: `https://agasbngy-cloud.github.io/personal-portfolio/`.

### After-deploy checklist
- [ ] Photo, fonts, CSS and JS load (no broken styling)
- [ ] Nav links scroll to sections; mobile menu opens/closes
- [ ] Project, GitHub, TikTok, Instagram and email links work
- [ ] Form shows errors on bad input
- [ ] Looks right on phone width, no sideways scrolling

## TikTok plan
1. Homepage and hero. 2. Scroll About → Resume → Projects. 3. Show the mobile layout and menu. 4. Show hover effects and form validation. 5. End on the live site and GitHub links.

Caption idea: *"Built my personal portfolio from scratch with HTML, CSS & JS 💚 3rd-year BSCS at UNP. Link in bio! #portfolio #webdev #bscs #student"*
