# Vercel & GitHub Upload Guide

The GitHub web browser drag-and-drop tool has a **limit of 100 files** and often crashes when uploading folders containing large PDF documents. 

To publish your project easily, use one of the two methods below.

---

## Method 1: Use GitHub Desktop (Easiest Graphical Way)

GitHub Desktop is a free app that handles large folders and PDF files instantly without using code commands.

1. Download and install **[GitHub Desktop](https://desktop.github.com/)**.
2. Sign in with your GitHub account.
3. In the app, go to **File** -> **Clone Repository**. Select your `Web-Projects` repository and clone it to a folder on your computer (e.g., `C:\Users\YourName\Documents\Web-Projects`).
4. Copy the entire `Physical Therapy Retention Exam` folder from `d:\CODES\WEBSITE\` and paste it inside that cloned `Web-Projects` folder.
5. Go back to GitHub Desktop. You will see all your files listed.
6. Write a summary (e.g., "Add PT Retention Reviewer") in the bottom-left box and click **Commit to main**.
7. Click the **Push origin** button at the top. All files will upload smoothly!

---

## Method 2: Use Git Commands in the Terminal (Fastest Command-Line Way)

Since you already have a repository on GitHub named `Web-Projects`, you can push the folder directly using the command line:

### Step 1: Open PowerShell or Command Prompt
Run this command to go to your workspace directory:
```powershell
cd "d:\CODES\WEBSITE"
```

### Step 2: Initialize Git (if not already done)
If you haven't set up Git in this folder yet, run:
```powershell
git init
```

### Step 3: Add your remote repository link
Link this folder to your GitHub repository:
```powershell
git remote add origin https://github.com/jmarkTheDeveloper/Web-Projects.git
```
*(If it says "remote origin already exists", just type `git remote set-url origin https://github.com/jmarkTheDeveloper/Web-Projects.git`)*

### Step 4: Add the folder and commit
Add only the new Physical Therapy folder:
```powershell
git add "Physical Therapy Retention Exam"
```
Commit the changes:
```powershell
git commit -m "Add PT Retention Exam project with PDF resources"
```

### Step 5: Push the files to GitHub
Upload all files securely:
```powershell
git push -u origin main
```
*(If your default branch is named master, replace main with master: `git push -u origin master`)*
