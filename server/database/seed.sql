USE fullstack_project_6;

DELETE FROM comments WHERE id > 0;
DELETE FROM todos WHERE id > 0;
DELETE FROM posts WHERE id > 0;
DELETE FROM users_auth WHERE id > 0;
DELETE FROM users WHERE id > 0;

ALTER TABLE users AUTO_INCREMENT = 1;
ALTER TABLE posts AUTO_INCREMENT = 1;
ALTER TABLE todos AUTO_INCREMENT = 1;
ALTER TABLE comments AUTO_INCREMENT = 1;
ALTER TABLE users_auth AUTO_INCREMENT = 1;

INSERT INTO users (name, email, phone, website)
VALUES
('Ofra Levy', 'ofra@gmail.com', '0501234567', 'ofra.com'),
('Daniel Cohen', 'daniel@gmail.com', '0529876543', 'daniel.com'),
('Noa Mizrahi', 'noa@gmail.com', '0541112233', 'noa.dev'),
('Yossi Levi', 'yossi@gmail.com', '0534445566', 'yossi.net'),
('Dana Friedman', 'dana@gmail.com', '0509998877', 'dana.io'),
('Amit Ben David', 'amit@gmail.com', '0527776655', 'amit.dev'),
('Shira Azulay', 'shira@gmail.com', '0548882211', 'shira.org'),
('Eden Cohen', 'eden@gmail.com', '0503332211', 'eden.tech'),
('Tom Harari', 'tom@gmail.com', '0521212121', 'tom.dev'),
('Lior Malka', 'lior@gmail.com', '0534545454', 'lior.net');

INSERT INTO users_auth (user_id, username, password)
VALUES
(1, 'ofra', '1234'),
(2, 'daniel', 'abcd'),
(3, 'noa', 'pass123'),
(4, 'yossi', 'qwerty'),
(5, 'dana', 'dana123'),
(6, 'amit', 'amit321'),
(7, 'shira', 'hello123'),
(8, 'eden', 'edenpass'),
(9, 'tom', 'tompass'),
(10, 'lior', 'lior123');

INSERT INTO posts (user_id, title, body)
VALUES
(1, 'React Basics', 'Learning React components and props'),
(1, 'SQL Practice', 'Today I practiced JOIN queries'),
(2, 'Express Server', 'Started building an Express API'),
(2, 'NodeJS Notes', 'Callbacks and async functions are important'),
(3, 'Frontend Design', 'CSS and responsive layouts'),
(3, 'React Hooks', 'useState and useEffect examples'),
(4, 'Database Design', 'Planning tables and relationships'),
(5, 'REST API', 'Understanding GET POST PUT DELETE'),
(6, 'JavaScript Tips', 'Arrow functions and array methods'),
(7, 'MySQL Workbench', 'Created my first schema'),
(8, 'Authentication', 'Login and register flow'),
(9, 'Todos App', 'Managing tasks with React'),
(10, 'Fullstack Journey', 'Combining frontend and backend');

INSERT INTO todos (user_id, title, completed)
VALUES
(1, 'Finish database schema', true),
(1, 'Connect NodeJS to MySQL', false),
(2, 'Build login page', true),
(2, 'Create REST routes', false),
(3, 'Practice SQL queries', true),
(3, 'Design posts component', false),
(4, 'Learn foreign keys', true),
(4, 'Write API documentation', false),
(5, 'Test API with Postman', true),
(5, 'Improve UI styling', false),
(6, 'Study async await', true),
(6, 'Add comments endpoint', false),
(7, 'Push project to GitHub', true),
(8, 'Implement authentication', false),
(9, 'Fix React bugs', true),
(10, 'Prepare final presentation', false);

INSERT INTO comments (post_id, name, email, body)
VALUES
(1, 'Noa', 'noa@gmail.com', 'Great explanation!'),
(1, 'Daniel', 'daniel@gmail.com', 'Very helpful post'),
(2, 'Dana', 'dana@gmail.com', 'I also practiced JOIN today'),
(3, 'Tom', 'tom@gmail.com', 'Express is really fun'),
(3, 'Lior', 'lior@gmail.com', 'Nice API structure'),
(4, 'Shira', 'shira@gmail.com', 'Async programming can be tricky'),
(5, 'Ofra', 'ofra@gmail.com', 'Responsive design is important'),
(6, 'Yossi', 'yossi@gmail.com', 'Hooks make React cleaner'),
(7, 'Amit', 'amit@gmail.com', 'Database planning saves time'),
(8, 'Eden', 'eden@gmail.com', 'REST APIs are everywhere'),
(9, 'Noa', 'noa@gmail.com', 'Great JavaScript tips'),
(10, 'Tom', 'tom@gmail.com', 'Workbench is very useful'),
(11, 'Dana', 'dana@gmail.com', 'Authentication is challenging'),
(12, 'Shira', 'shira@gmail.com', 'Todos apps are great practice'),
(13, 'Daniel', 'daniel@gmail.com', 'Fullstack development is awesome');
