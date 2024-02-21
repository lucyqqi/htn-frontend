# Login Credentials

- **Username:** `htn`
- **Password:** `plsacceptme<3`

# Hack the North Frontend Challenge Writeup 

## Development Process and Planning

The development of the HTN Frontend project began with an extensive planning phase where I focused on understanding the requirements and the overall goal of the application. Knowing it was aimed at improving the Hackathon Global Inc.™ event experience, I wanted to ensure the application was intuitive, efficient, and scalable. 

### Structure and Design

For the structure, I decided to follow a modular approach, breaking down the application into smaller, reusable components. This not only helped in keeping the codebase organized but also facilitated easier debugging and testing. I opted for a clean and minimalist design to enhance user experience, and used Figma to help me have a better idea of how I wanted to design the landing page. I was thinking of adding some gradients as I know they help make websites a lot more modern (and is the style of Hack the North), but for this challenge, I decided to keep the text as is since I feel like it had a really clean style and helped the parts such as the 3D computer model shine (which took a very long time to get working).

### Tool Selection

At first, I was focusing a lot on design, and wanted to use Bootstrap having had a lot of experience in CSS, HTML, and Javascript in the past; then, I somehow transitioned to Next.js (was done in a different repository). But I realized that it wasn't the best as a lot of the components I wanted to use to stylize my website were in React. After a little bit of playing around, I got started in Vue.js specifically because of its simplicity, ease of learning, and flexibility. Its component-based architecture also promotes reusability, making development more efficient which I know was something prioritized in this challenge. 

I also liked how I could use some things such as the react-three/fiber, react-three/drei, and react-vertical-temeline-components as well as Framer Motion, which made my website hopefully more appealing to the eye. It also had like React Router for navigation and Context API for statement management. For styling, I leaned towards Tailwind CSS for its utility-first approach, which significantly sped up the development process, since I know manually doing every CSS component can be incredibly time consuming. 

### Challenges and Solutions

One of the main challenges I encountered was managing global state efficiently, especially for user authentication. I solved this by implementing React's Context API, which simplified state management across components without prop drilling. I also used a boolean to check if it's logged in or logged out or now (probably wouldn't want to hard code it if I had more time), and the components for Login would display if the login button was clicked, false otherwise. This boolean would also help render if private events could be viewed. 

Another challenge was ensuring the application was responsive across devices. Luckily, I had Tailwind CSS--I utilized Tailwind's responsive design features, which allowed me to quickly adapt the layout for different screen sizes.

### Highlights

I'm particularly proud of the dynamic form component that adapts based on the user's input. It was a complex feature that required thoughtful state management and conditional rendering, but it significantly improved the user's interaction with the application.

I also had trouble sorting events due to how I used variables, and I'm glad I used console.log to help fix the problem. In addition, I think the site looks really nice and I'm pretty glad how the overall aesthetic came out, especially the 3D computer model!

## Future Enhancements

Given more time, my goal would be to evolve this project into a fully functional platform that could support thousands of users. 

I would want it that you could click each event to view more about each one, and get more details about it. I also was still working on the way to link and view each event, and if I had an individual page to view each event (and you could close it with an X), I would have the "Related Events:" section click to the individual page of the other events. I would also add the ability to filter based on event type, and those nice tags in different colours like Notion has for task management to show what type of event each one is. 

I did have some of that functionality working for reference, that was mentioned in the challenge, but I wasn't properly displayed and I rather not present something in my challenge if it's not fully working, and only keep the parts that are of high quality on my website. 

Of course, I would also implement features like allowing the user to search and re-order events as well. Overall, I would also not have all the events on the landing page and in its own hacker dashboard section where there would also be a navigation board on the side to view the Hacker Package, Schedule, etc. 

### Additional Features

- **Real-time updates:** Implementing WebSocket for real-time updates on schedules, announcements, and live polls.
- **User authentication:** Not having a hard-coded version of it.
- **Enhanced accessibility:** Further improving accessibility to ensure the application is usable for everyone, including those with disabilities.

### Performance Metrics

- **Lazy loading:** Implementing lazy loading for images and components to improve load times.
- **Server-side rendering (SSR):** Utilizing SSR for faster initial page loads and SEO benefits.

## Concluding Thoughts

After many hours, I'm glad how it turned out and had a great time making this project! I also learned a lot throughout the process and it pushed me to apply best practices in React development explore features I haven't implemented before. Given additional time, I would want to implement the above and the React Testing Library to ensure each component functions correctly across updates. Furthermore, I'd invest time into adding more cool gradient components to make the UI more exciting. 

That's a little bit of me and my insights. As a note, I'd say my fortes are design and the general styling, as I've mostly just made landing pages and websites in the past (not usually the functionality of them, but I'm getting better at it)! Anyhow, I hope to help with design at Hack the North and continue growing and learning! 
