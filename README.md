# Portfolio — Product Design

A Jekyll-based portfolio site hosted on GitHub Pages.

## Local Development

### Prerequisites

1. **Install Ruby** (if not already installed)
   - Windows: Download from [RubyInstaller](https://rubyinstaller.org/)
   - Choose Ruby+Devkit version (recommended)
   - During installation, check "Add Ruby executables to your PATH"

2. **Install Bundler**
   ```bash
   gem install bundler
   ```

### Setup

1. **Install dependencies**
   ```bash
   bundle install
   ```

2. **Run the local server**
   ```bash
   bundle exec jekyll serve
   ```

3. **View your site**
   - Open your browser to: `http://localhost:4000/portfolio/`
   - The server will auto-reload when you make changes to files

### Making Changes

- Edit content files (`.md` files) or layouts (`_layouts/`)
- Changes will automatically rebuild and refresh in your browser
- Press `Ctrl+C` in the terminal to stop the server

### Deploying

After testing locally:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your changes (usually takes 1-3 minutes).
