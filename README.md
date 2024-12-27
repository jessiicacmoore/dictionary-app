# Dictionary Web App - Frontend Mentor Challenge

This is a solution to the [Dictionary Web App](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

This challenge requires calling an api to retrieve dictionary word definitions and displaying them. The api chosen for this is [dictionaryapi.dev](https://dictionaryapi.dev).

This is a simple api call with a somewhat challenging response format. It is based on wikitext which is freeform, so there are often inconsistencies in the json that is returned, depending on word. For example, the audio file reference may be in second or third pronunciation slot in the returned array depending on what the article author did on wiktionary.

Themes throws in a new wrinkle with font themes of Sans-serif, Serif, Monospaced, along with the more typical day/night color scheme switching. Automatic system switching is also implemented.

An `<audio>` element is required in order to play mp3, ogg, etc. for the word pronunciation. The custom button requires that the audio element have controls hidden and be controlled through api only.

The web page must be fully accessible and support full keyboard navigation. This requires a custom dropdown menu implementation with appropriate aria usage to replace the intrinsic system accessibility normally available in `<select>`.

To add to the utility of the page, permalink hashes are added to the URL. This allows any search to be bookmarked and for back/forward browser navigation to act as a search history.

An accessible busy spinner and live region is used in this implementation. During development, the dictionaryapi.dev site went down for several hours. This forced better error handling, timeout handling etc.

### Links

- Solution URL: [Github Repository](https://github.com/jessiicacmoore/dictionary-app)
- Live Site URL: [Github Pages](https://jessthedev-fem-dictionary-app.netlify.app)

## My process
### Built with

- React
- TypeScript
- Tailwind CSS
- Context API to store theme preferences 
- Tanstack Query for fetching data, and error / loading state
- React Router (for managing search functionality via url query)

### What I learned
While building the dictionary app, I focused on improving how I organize React projects and experimented with the Bulletproof React system. Although it was initially challenging to grasp, I found it to be a promising approach for structuring larger-scale applications. Additionally, I enhanced my understanding of accessibility by implementing feedback for screen reader users, ensuring they are informed about loading, loaded, and error states. This experience deepened my appreciation for both scalability and user-centered design.

### Continued development

While working on this project, I learned a lot about React project organization and accessibility best practices, but there are several areas I’d like to continue improving:

1. **Advanced React Patterns**: I want to deepen my understanding of scalable project architectures, particularly with the Bulletproof React approach, and explore advanced patterns like Context API and custom hooks.

2. **Accessibility Best Practices**: Building on my experience with screen reader feedback for loading, loaded, and error states, I plan to learn more about ARIA roles, landmarks, and making complex components fully accessible.

3. **Error Handling and User Feedback**: I aim to implement more user-friendly error-handling mechanisms, like retry options and detailed error messages, to enhance the overall user experience.

4. **TypeScript Proficiency**: Strengthening my TypeScript skills is a priority, particularly in typing more complex React components and data flows for better maintainability and reliability.

5. **Testing**: I want to expand beyond unit testing with Jest and dive into integration and end-to-end testing using tools like React Testing Library and Cypress to ensure more robust applications.

6. **Scalability in Larger Projects**: To prepare for larger-scale applications, I plan to take on projects where architectural decisions and reusable components play a bigger role. Collaborating on open-source projects or simulating team workflows will be part of this effort.

These focus areas will help me grow as a developer and refine my ability to create scalable, accessible, and user-friendly applications.
