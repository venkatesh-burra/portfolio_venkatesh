# Burra Venkatesh — Personal Portfolio

A premium, responsive portfolio website built with **HTML5**, **CSS3**, **JavaScript**, and **Bootstrap 5**. Designed for Python Full Stack Developer fresher roles.

**Live Demo:** [Add your deployed URL here]

---

## Features

- Premium dark theme with blue/purple gradients & glassmorphism
- Fully responsive (mobile, tablet, desktop)
- Typing animation in hero section
- Particle background effect
- Scroll reveal animations
- Animated skill progress bars
- Project image carousel
- Education timeline
- Dark / Light mode toggle
- Loading screen
- Back to top button
- SEO-friendly meta tags
- Accessible navigation & form

---

## Folder Structure

```
Portfolio/
├── index.html              # Main HTML file
├── style.css               # All custom styles
├── script.js               # All JavaScript functionality
├── README.md               # This file
└── assets/
    ├── icons/
    │   └── favicon.svg     # Site favicon (BV monogram)
    ├── images/
    │   ├── profile-placeholder.svg   # Profile placeholder
    │   ├── profile.jpg               # Your photo (upload later)
    │   ├── project1-placeholder.svg  # Main project screenshots
    │   └── project2-placeholder.svg  # IoT project image
    └── resume/
        └── Burra_Venkatesh_Resume.pdf  # Your resume PDF
```

---

## Quick Start (Local)

1. Clone or download this repository
2. Open `index.html` in your browser

   **Option A — Double-click:** Open `index.html` directly

   **Option B — Live Server (VS Code):**
   ```bash
   # Install Live Server extension in VS Code
   # Right-click index.html → "Open with Live Server"
   ```

   **Option C — Python HTTP Server:**
   ```bash
   cd Portfolio
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

---

## Customization Checklist

### 1. Add Your Photo
- Save your professional photo as `assets/images/profile.jpg`
- Recommended: square crop, at least 400×400px
- The site automatically detects and replaces the placeholder

### 2. Add Your Resume
- Save your resume as `assets/resume/Burra_Venkatesh_Resume.pdf`
- The "Download Resume" buttons link to this file

### 3. Update Contact Details
Edit the contact section in `index.html`:
- Phone number
- Email address
- LinkedIn URL
- Location

### 4. Add Project Screenshots
Replace `assets/images/project1-placeholder.svg` with actual screenshots:
- `project1-home.png`
- `project1-campus.png`
- `project1-admin.png`

Update carousel image `src` paths in `index.html`.

### 5. Add Certificate Images
Replace certificate placeholders in the Certifications section when ready.

---

## Deployment Guide

### GitHub Pages

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/venkatesh-burra/Portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repo → **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)`
   - Click **Save**

3. **Access your site**
   - URL: `https://venkatesh-burra.github.io/Portfolio/`
   - It may take 1–2 minutes to go live

4. **Custom domain (optional)**
   - Add a `CNAME` file with your domain
   - Configure DNS with your domain provider

---

### Netlify

1. **Sign up** at [netlify.com](https://www.netlify.com)

2. **Deploy via drag & drop**
   - Go to Netlify dashboard → **Sites** → **Add new site** → **Deploy manually**
   - Drag your entire `Portfolio` folder onto the upload area
   - Your site goes live instantly with a random URL

3. **Deploy via Git (recommended)**
   - **Add new site** → **Import an existing project**
   - Connect your GitHub account
   - Select the `Portfolio` repository
   - Build settings:
     - **Build command:** *(leave empty)*
     - **Publish directory:** `/` or `.`
   - Click **Deploy site**

4. **Custom domain**
   - Site settings → **Domain management** → **Add custom domain**
   - Follow DNS configuration steps

5. **Your Netlify URL**
   - Example: `https://burra-venkatesh.netlify.app`
   - Rename in **Site settings** → **Site details** → **Change site name**

---

## Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Structure  | HTML5             |
| Styling    | CSS3, Bootstrap 5 |
| Scripting  | Vanilla JavaScript|
| Icons      | Bootstrap Icons   |
| Fonts      | Google Fonts (Outfit, JetBrains Mono) |

---

## Interview Tips

When explaining this portfolio in interviews:

1. **Structure:** "I built a static portfolio using HTML, CSS, and JavaScript with Bootstrap 5 — no frameworks, so I understand every line of code."

2. **Features:** Mention typing animation (setInterval), Intersection Observer for scroll reveal, Canvas API for particles, CSS variables for theming.

3. **Main Project:** Focus on the Django college admission system — models, views, templates, admin panel, forms.

4. **Responsive Design:** Bootstrap grid + custom media queries.

5. **Performance:** Lazy loading images, minimal dependencies, CDN for Bootstrap.

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Edge (latest)
- Safari (latest)
- Mobile browsers

---

## License

This portfolio is free to use and modify for personal purposes.

---

## Author

**Burra Venkatesh**  
Python Full Stack Developer  
[GitHub](https://github.com/venkatesh-burra) | [LinkedIn](https://www.linkedin.com/in/venkatesh-burra-34886b281 )

---

*Designed & Developed by Burra Venkatesh*
