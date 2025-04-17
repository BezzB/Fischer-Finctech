# Deploy script for Fischer Telesec static site
# This script deploys the static site to GitHub Pages

# Ensure we have a clean build
Write-Host "Building the site..." -ForegroundColor Green
npm run build

# Ensure .nojekyll file exists
Write-Host "Creating .nojekyll file..." -ForegroundColor Green
New-Item -Path 'out/.nojekyll' -ItemType File -Force

# Instructions for manual deployment
Write-Host "`nThe static site has been built successfully in the 'out' directory!`n" -ForegroundColor Green
Write-Host "To deploy to GitHub Pages, follow these steps:" -ForegroundColor Yellow
Write-Host "1. Create a new GitHub repository (e.g., 'fischer-telesec-static')" -ForegroundColor Yellow
Write-Host "2. Navigate to the 'out' directory: cd out" -ForegroundColor Yellow
Write-Host "3. Initialize a new git repository: git init" -ForegroundColor Yellow
Write-Host "4. Add all files: git add ." -ForegroundColor Yellow
Write-Host "5. Commit the files: git commit -m 'Initial static site deployment'" -ForegroundColor Yellow
Write-Host "6. Add the remote repository: git remote add origin https://github.com/YOUR_USERNAME/fischer-telesec-static.git" -ForegroundColor Yellow
Write-Host "7. Push to GitHub: git push -u origin main" -ForegroundColor Yellow
Write-Host "8. In GitHub repository settings, enable GitHub Pages from the main branch" -ForegroundColor Yellow
Write-Host "`nYour site will be available at: https://YOUR_USERNAME.github.io/fischer-telesec-static/`n" -ForegroundColor Green 