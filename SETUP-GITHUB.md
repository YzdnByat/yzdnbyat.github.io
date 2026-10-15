# Publish this website on GitHub Pages

## 1. Create the repository

Open https://github.com/new while signed in as YzdnByat.

| Setting | Value |
| --- | --- |
| Owner | YzdnByat |
| Repository name | yzdnbyat.github.io |
| Description | Academic portfolio — computer vision, medical image analysis, and robotics. |
| Visibility | Public |
| Add README | Off; this package contains one |
| Add .gitignore | None |
| License | None for now |

Use the exact lowercase repository name `yzdnbyat.github.io`. This is separate from the existing `YzdnByat` profile README repository. If the website repository already exists, use it instead of creating a duplicate.

Click **Create repository**.

## 2. Extract and upload

1. Extract `yazdan-bayat-github-pages.zip` on your computer.
2. Open the extracted `yzdnbyat.github.io` folder.
3. On the empty repository page, select **uploading an existing file**. In an existing repository, use **Add file → Upload files**.
4. Drag the CONTENTS of `yzdnbyat.github.io` into the upload area. Include the entire `assets` folder. Do not upload the ZIP or the enclosing `yzdnbyat.github.io` folder.
5. Use the commit message `Add academic portfolio website`.
6. Commit to `main`.

At the top level of the repository, you should now see `index.html`, `contact.html`, `styles.css`, `script.js`, `assets/`, `README.md`, `SETUP-GITHUB.md`, and `.nojekyll`.

The index file must be called exactly `index.html`, lowercase, and must appear directly at the repository root.

The package includes `.nojekyll`, which can be hidden by your operating system. If it is missing after upload, use **Add file → Create new file**, name it `.nojekyll`, enter `Static website; no Jekyll build required.` as its content, and commit. Its contents do not affect the site.

## 3. Enable publishing

1. Open the repository's **Settings**.
2. Select **Pages** in the sidebar.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Under **Branch**, select **main** and **/ (root)**.
5. Click **Save**.
6. Leave **Custom domain** empty.

No custom GitHub Actions workflow or theme installation is needed. GitHub creates the Pages deployment automatically.

## 4. View the result

The website address will be:

https://yzdnbyat.github.io

The repository address will be:

https://github.com/YzdnByat/yzdnbyat.github.io

These are different: the first displays the website; the second displays its source files.

Allow up to 10 minutes for publication. In **Settings → Pages**, use **Visit site**. The **Actions** tab shows the deployment progress and any failures.

## 5. Check after publishing

- Open the site on desktop and mobile.
- Check navigation between the homepage and contact.html.
- Open and close each inline project-details disclosure; check source-code links.
- Check GitHub, LinkedIn, Hugging Face, and email links; try Copy email address.
- Confirm that both project images and all fonts load.
- Review provisional text before sharing the site with university reviewers.

GitHub Pages makes this site public. The separate hosted preview is managed independently.

## 6. Update later

For text edits, open `index.html` in the repository and click the pencil icon. Commit your changes to `main`. Expanded project descriptions and repository destinations are in `index.html`. Contact-page links are in `contact.html`.

For visual edits, update `styles.css`. For image replacements, upload to `assets/` and update the image path in `index.html` if its filename changes. Filenames and capitalization must match exactly.

Each commit to the publishing branch triggers an automatic update. If the old version remains visible after deployment finishes, hard-refresh with Ctrl+F5 on Windows or Command+Shift+R on macOS.

## Troubleshooting

| Problem | Check |
| --- | --- |
| 404 | Exact repository name, `index.html` at root, `main` and `/ (root)` selected, deployment completed |
| README appears instead of design | `index.html` is missing, nested in another folder, or incorrectly named |
| Missing styles or images | `styles.css`, `script.js`, and the whole `assets/` folder were uploaded with their original names |
| Branch dropdown has no main | Upload and commit the website files first |
| Deployment failed | Open the failed run in Actions and read its error |

## Official instructions

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
