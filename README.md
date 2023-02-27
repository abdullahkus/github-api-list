# Summary

This project is a web application built using Next.js that uses the GitHub API as a data source. The application starts with server-side rendering (SSR) for the initial page load and allows users to view a paginated list of GitHub users. Each page can display a maximum of 10 users and users can navigate between pages and search for a specific GitHub user. The basic information for each user, including their username, profile picture, and a link to their GitHub profile, is listed. When a user clicks on the avatar or username of a user in the list, a detail page opens with additional information about that user, such as their bio, location, and number of followers.

# Live

[Live Version](https://github-api-list.vercel.app/
)

# Project Structure

## /pages

It is the folder where the pages of a Next.js project are stored.

## /components

It is a folder that contains all the other components of the project outside the pages folder. This folder contains small, reusable components that can be used in your pages.

## /components/share

This folder contains shared components used in the project. These are components that are used in multiple pages and are written once in the project instead of being repeated.

## /containers

It is a folder that covers larger sections of the pages.

## /layouts

This folder contains components that define the layout and common views of the pages in your project.

## /services

This folder contains functions written to interact with external services such as API calls.

## /utils

This folder contains helper functions and tools that can be used in your project. For example, a date formatting function or a validation function can be found here.

## /styles

This folder contains style pages of the project. It is where CSS files are located and global style pages can be found here.

# Technology

-   React
-   Next
-   TailwindCSS
-   Axios
-   Eslint

# Development Server

```bash
yarn dev
```